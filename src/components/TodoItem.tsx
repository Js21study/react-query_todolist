import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodos';

type TodoItemType = {
  id: string;
};

export const TodoItem: React.FC<TodoItemType> = ({ id }) => {
  const { data, isLoading } = useTodo(id);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <b>{Number(id)}</b>. <i>Todo: {data?.todo}</i>
    </>
  );
};
