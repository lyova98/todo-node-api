import { mergeResolvers } from 'merge-graphql-schemas';

// Todos
import getTodos from './todo/getTodos';
import deleteTodo from './todo/deleteTodo';
import createTodo from './todo/createTodo';
import updateTodo from './todo/updateTodo';

export default mergeResolvers([
  //Todos
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
]);
