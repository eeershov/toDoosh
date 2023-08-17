import { useEffect } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { getTodosAsync } from './redux/todoSlice';

function App() {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div className='bg-gray-200'>
      <div className='bg-white max-w-xl'>
        <h1 className='text-3xl'>todo</h1>
        <TodoList {...{ todos: todos }} />
      </div>
    </div>
  );
}

export default App;
