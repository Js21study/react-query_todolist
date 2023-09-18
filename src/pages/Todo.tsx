import React from 'react';
import { useParams } from 'react-router-dom';
import { TodoItem } from '../components/TodoItem';

export const Todo: React.FC = () => {
  const { id } = useParams();
  if (!!id) {
    return (
      <>
        <TodoItem id={id} />
      </>
    );
  }
};
