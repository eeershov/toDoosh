export const statuses = {
  idle: 'Idle',
  loading: 'Loading',
  error: 'Error',
  success: 'Success' 
  } as const;
  
export type Status = (typeof statuses)[keyof typeof statuses];
