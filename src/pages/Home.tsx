import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { Link } from 'react-router-dom';

import { useMutation, useQueryClient } from 'react-query';
import todoService from '../services/todo.service';

export const Home: React.FC = () => {
  const [title, setTitle] = useState('');
  const { data, isLoading } = useTodos();

  const { mutate } = useMutation('create todo', (title: string) => todoService.create(title), {
    onSuccess() {
      setTitle('');
      alert('todo created!');
    },
  });
  const queryClient = useQueryClient();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    mutate(title);
  };
  return (
    <div>
      <h1> Todos: </h1>

      <button onClick={() => queryClient.invalidateQueries(['todos'])}>Refresh</button>
      <h2>Create todo:</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter todo title"
        />
        <button>Create</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : data?.todos.length ? (
        data.todos.map((todo) => (
          <div key={todo.id}>
            <Link to={`/${todo.id}`}>
              <b>{todo.id}</b>. <i>Todo: {todo.todo}</i>
            </Link>
          </div>
        ))
      ) : (
        <p>Data was not found!</p>
      )}
    </div>
  );
};
