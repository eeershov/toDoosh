import { Todo } from "../../interfaces/todo";
import { TodoItem } from "../TodoItem";

interface PropsData {
  todos: Todo[]
}

export function TodoList({todos}: PropsData) {
  return (
    <>
      <ul className="flex flex-col">
        {
          todos.slice().reverse().map((item)=>{
            return(
              <TodoItem key={item.id} {...item} />
            );
          })
        }
      </ul>
    </>
  );
}
