import { Todo } from "../../interfaces/todo";
import {ReactComponent as Checkcircle} from './checkcircle.svg';
import {ReactComponent as Checkmark} from './checkmark.svg';
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../redux/todoSlice";

export function TodoItem({id, title, completed}: Todo) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete({
      id: id,
      completed: !completed
    }));
  };

  return (
    <li className="flex items-center gap-2 hover:bg-gray-200 hover:bg-opacity-70 py-1 px-2">
      <span className="relative" onClick={handleToggle}>
        <Checkcircle className="opacity-70"/>
        {completed && <Checkmark className="opacity-70 absolute top-0 left-0"/>}
      </span>
      <span className="leading-6">
        {title}
      </span>
    </li>
  );
}
