import ChipButton from "./ChipButton";
import { filters, Filter } from "../../interfaces/filters";

export function FiltersBar({activeFilter}: {activeFilter: Filter}) {
  return (
    <div className="flex p-2 gap-4">
      <ChipButton buttonText="All" filterName={filters.all} activeFilter={activeFilter} />
      <ChipButton buttonText="Active" filterName={filters.active} activeFilter={activeFilter} />
      <ChipButton buttonText="Completed" filterName={filters.completed} activeFilter={activeFilter} />
    </div>
  );
}
