import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => alert(err));
  }, []);

  return (
    <>
      <h1 className='text-3xl'>todo</h1>
      {data.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </>
  );
}

export default App;
