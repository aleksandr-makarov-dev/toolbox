export type Task = {
  id: number;
  title: string;
  description: string;
};

export type Stage = {
  id: number;
  title: string;
  items: Task[];
};
