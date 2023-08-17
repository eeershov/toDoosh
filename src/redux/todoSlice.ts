import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../interfaces/todo';

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const todos: [] | Todo[] = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .catch(err => alert(err));
      return { todos };
  }
);


const initialState = {
  todos: [],
  status: 'idle',
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
    .addCase(getTodosAsync.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
    });
  }
});

export const { addTodo, toggleComplete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
