import Todo from '../../../models/Todo';

export default {
  Mutation: {
    createTodo: async (parent, args) => {
      try {
        const todo = await Todo.create({
          name: args.name,
          status: args.status,
        });
        return {
          message: 'Todo created successfully!',
          status: 200,
          todo: todo,
        };
      } catch (e) {
        console.log('e', e);
        return {
          message: 'Create todo failed!',
          status: 400,
          todo: null,
        };
      }
    },
  },
};
