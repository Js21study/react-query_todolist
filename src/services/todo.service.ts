import axios from 'axios';
import { ITodo, ITodoCreate, ITodoFullObj } from '../@types/ITodos';

class TodoService {
  private URL = 'https://dummyjson.com/todos';
  async getAll() {
    return await axios.get<ITodoFullObj>(`${this.URL}?limit=3`);
  }
  async getById(id: string) {
    return await axios.get<ITodo>(`${this.URL}/${id}`);
  }

  async create(title: string) {
    return await axios.post<any, any, ITodoCreate>(`${this.URL}/add`, {
      todo: title,
      completed: false,
      userId: 5,
    });
  }
}

export default new TodoService();
