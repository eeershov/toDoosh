import { useAppDispatch } from "../../redux/hooks";
import { applyFilter } from "../../redux/todoSlice";
import { Filter } from "../../interfaces/filters";

export default function ChipButton({
    buttonText, activeFilter, filterName
  }:{
    buttonText: string, activeFilter: Filter, filterName: Filter
  }) {

  const dispatch = useAppDispatch();
  const classPassive = `bg-purple-200`;
  const classActive = `bg-purple-900 text-white`;
  const classStyle = `rounded-full ${activeFilter===filterName ? classActive : classPassive} hover:bg-purple-400 pointer bg-opacity-70 px-2 py-1`;
  return (
    <span 
      className={classStyle} 
      onClick={() => dispatch(applyFilter({filter: filterName}))}
    >
      <button>
        {buttonText}
      </button>
    </span>
  );
}
