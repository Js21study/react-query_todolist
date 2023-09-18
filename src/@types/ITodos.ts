export interface ITodo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

export interface ITodoFullObj {
  limit: number;
  todos: ITodo[];
  total: number;
  skip: number;
}

export interface ITodoCreate extends Omit<ITodo, 'id'> {}
