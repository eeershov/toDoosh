export function FiltersBar() {
  const classStyle = `rounded-full bg-purple-400 hover:bg-purple-500 hover:text-white pointer bg-opacity-70 px-2 py-1`;
  return (
    <div className="flex p-2 gap-4">
      <span className={classStyle}>All</span>
      <span className={classStyle}>Active</span>
      <span className={classStyle}>Completed</span>
    </div>
  );
}
