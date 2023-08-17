import ChipButton from "./ChipButton";
import { filters, Filter } from "../../interfaces/filters";
import { removeAllCompleted } from "../../redux/todoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ReactComponent as Trashcan } from './trashcan.svg';

export function FiltersBar({activeFilter}: {activeFilter: Filter}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex p-2 gap-4">
      <ChipButton buttonText="All" filterName={filters.all} activeFilter={activeFilter} />
      <ChipButton buttonText="Active" filterName={filters.active} activeFilter={activeFilter} />
      <ChipButton buttonText="Completed" filterName={filters.completed} activeFilter={activeFilter} />
      {activeFilter===filters.completed && <button className="hover:bg-red-500 hover:bg-opacity-70 rounded-full" onClick={()=>dispatch(removeAllCompleted())}><Trashcan/></button>}
    </div>
  );
}
