import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

  const dispatch = useDispatch();

	const onSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		if (value.length>0) {
			setValue('');
			dispatch(addTodo({
				title: value,
			}));
		}
	};

	return (
		<form onSubmit={onSubmit} className='items-center flex'>
			<input
				type='text'
				className='rounded-xl h-6 mx-2 my-2 p-4 ring-2 max-w-xl ring-purple-400 w-full'
				placeholder='Add todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='rounded-full bg-purple-400 hover:bg-purple-600 px-2 py-1 h-8 mx-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
