import { useEffect, useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { FiltersBar } from './components/FiltersBar';
import { Todo } from './interfaces/todo';
import { Filter, filters } from './interfaces/filters';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { getTodosAsync } from './redux/todoSlice';
import StatusHandler from './components/FetchStatusHandler';

function App() {
  const [activeTodos, setActiveTodos] = useState([]);
  const {todos, status, activeFilter} = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const filterTodos = (todos: Todo[], activeFilter: Filter) => {
    switch (activeFilter) {
      case (filters.active):
        return todos.filter(todo => todo.completed === false);
      case (filters.completed):
        return todos.filter(todo => todo.completed === true);
      default:
        return todos;
    }
  };
  useEffect(() => {
    setActiveTodos(filterTodos(todos, activeFilter));
  }, [todos, activeFilter]);

  return (
    <div className='bg-gray-200'>
      <div className='bg-white max-w-xl'>
        <h1 className='text-3xl'>todo</h1>
        <FiltersBar activeFilter={activeFilter}/>
        <AddTodoForm/>
        <StatusHandler status={status}/>
        <TodoList {...{ todos: activeTodos }}/>
      </div>
    </div>
  );
}

export default App;
