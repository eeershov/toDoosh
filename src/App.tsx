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
    // Success means user did get data from the server at least once
    // therefore there is no need to get it again
    // and (for example) having zero todos is users choice
    if (status!=="Success") {
      dispatch(getTodosAsync());
    }
  }, [dispatch, status]);

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
    <div className='bg-gray-200 min-h-screen'>
      <div className='bg-white max-w-xl min-h-screen max-h-screen overflow-y-scroll'>
        <h1 className='text-3xl p-4 text-purple-200'>toDoosh</h1>
        <FiltersBar activeFilter={activeFilter}/>
        <AddTodoForm/>
        <StatusHandler status={status}/>
        <TodoList {...{ todos: activeTodos }}/>
      </div>
    </div>
  );
}

export default App;
