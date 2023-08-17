import { useEffect } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { FiltersBar } from './components/FiltersBar';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { getTodosAsync } from './redux/todoSlice';
import StatusHandler from './components/FetchStatusHandler';

function App() {
  const {todos, status, activeFilter} = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div className='bg-gray-200'>
      <div className='bg-white max-w-xl'>
        <h1 className='text-3xl'>todo</h1>
        <FiltersBar activeFilter={activeFilter}/>
        <AddTodoForm/>
        <StatusHandler status={status}/>
        <TodoList {...{ todos: todos }}/>
      </div>
    </div>
  );
}

export default App;
