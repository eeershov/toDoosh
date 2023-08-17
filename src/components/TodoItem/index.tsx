import { useState } from "react";
import { Todo } from "../../interfaces/todo";
import { ReactComponent as Checkcircle } from './checkcircle.svg';
import { ReactComponent as Checkmark } from './checkmark.svg';
import { ReactComponent as Trashcan } from '../FiltersBar/trashcan.svg';
import { useDispatch } from "react-redux";
import { toggleComplete, editTodo, removeSingleTodo } from "../../redux/todoSlice";

export function TodoItem({ id, title, completed }: Todo) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false); // State to track editing mode
  const [editedTitle, setEditedTitle] = useState(title); // State to track edited title
  const [style, setStyle] = useState('hidden'); // State to track visibility of delete button
  
  const handleToggle = () => {
    dispatch(toggleComplete({
      id: id,
      completed: !completed
    }));
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    if (editedTitle.trim() !== "") {
      dispatch(editTodo({
        id: id,
        title: editedTitle
      }));
    }
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
  };


  return (
    <li className="flex items-center gap-2 hover:bg-gray-200 hover:bg-opacity-70 py-1 px-2 overflow-hidden w-full relative"
      onMouseEnter={() => setStyle('block')}
      onMouseLeave={() => setStyle('hidden')}>
      <span className="relative" onClick={handleToggle}>
        <Checkcircle className="opacity-70" />
        {completed && <Checkmark className="opacity-70 absolute top-0 left-0" />}
      </span>
      <div className="flex-grow whitespace-normal">
        {editing ? (
          <input
            className="w-full"
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            autoFocus
          />
        ) : (
          <div
            onClick={handleEditClick}
            className={`cursor-pointer`}
          >
            {title}
          </div>
        )}
      </div>
      <button onClick={()=>dispatch(removeSingleTodo({id: id}))} className={`${style} w-8 h-8 absolute right-0 hover:bg-red-500 hover:bg-opacity-70 rounded-full`}><Trashcan/></button>
    </li>
  );
}
