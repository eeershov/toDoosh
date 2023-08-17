export const filters = {
  all: 'All',
  active: 'Active',
  completed: 'Completed',
  } as const;
  
export type Filter = (typeof filters)[keyof typeof filters];
