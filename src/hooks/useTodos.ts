import { useQuery } from 'react-query';
import todoService from '../services/todo.service';

export const useTodos = () => {
  return useQuery(['todos'], async () => todoService.getAll(), {
    select: ({ data }) => data,
    retry: 5,

    onSuccess(data) {
      alert('Now you can create different notes like "' + data.todos[0].todo + '". Good luck!');
    },
    onError(err) {
      alert('Sonething went wrong. ' + err + ' Please, reload this page!');
    },
  });
};

export const useTodo = (todoId: string) => {
  return useQuery(['todo', todoId], async () => todoService.getById(todoId.toString()), {
    select: ({ data }) => data,
    enabled: !!todoId,
  });
};
