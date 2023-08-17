import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../interfaces/todo';
import { Status } from '../interfaces/statuses';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos';

    const todos: [] | Todo[] = await fetch(url)
      .then(response => response.json());
    await new Promise((resolve) =>
      setTimeout(()=>resolve(''), 500),
    );
    
    const lastFive = todos.slice(-5);

    return {todos: lastFive};
  }
);


export interface TodosState {
  todos: Todo[],
  status: Status,
}

const initialState: TodosState = {
  todos: [],
  status: 'Idle',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{title: string}>) => {
      let currentId = state.todos[state.todos.length-1]?.id;
      if (!currentId) {
        currentId = 0;
      }
      const nextId = currentId + 1;
      const newTodo = {
        id: nextId,
        title: action.payload.title,
        completed: false,
      };
      state.todos.unshift(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<{id: number, completed: boolean}>) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[todoIndex].completed = action.payload.completed; 
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getTodosAsync.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getTodosAsync.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
      state.status = 'Success';
    })
    .addCase(getTodosAsync.rejected, (state) => {
      state.status = 'Error';
    });
  }
});

export const { addTodo, toggleComplete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
