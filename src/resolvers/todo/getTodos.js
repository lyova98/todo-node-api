import Todo from '../../../models/Todo';

export default {
  Query: {
    todos: async () => {
      return Todo.findAll();
    },
  },
};
