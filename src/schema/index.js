import { mergeTypes } from 'merge-graphql-schemas';

//Models
import Todo from './models/Todo';
import StatusType from './models/StatusType';
import Response from './models/Response';
import TodoResponse from './models/TodoResponse';

//Todos
import Todos from './todo/Todos';
import DeleteTodo from './todo/DeleteTodo';
import CreateTodo from './todo/CreateTodo';
import UpdateTodo from './todo/UpdateTodo';

export default mergeTypes(
  [
    //Models
    Todo,
    StatusType,
    Response,
    TodoResponse,

    //Todos
    Todos,
    DeleteTodo,
    CreateTodo,
    UpdateTodo,
  ],
  { all: true }
);
