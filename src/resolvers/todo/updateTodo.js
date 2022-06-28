import Todo from '../../../models/Todo';

export default {
  Mutation: {
    updateTodo: async (parent, args) => {
      try {
        await Todo.update(
          {
            name: args.name,
            status: args.status,
          },
          {
            where: {
              id: args.id,
            },
          }
        );
        return {
          message: 'Todo updated successfully!',
          status: 200,
        };
      } catch (e) {
        console.log('e', e);
        return {
          message: 'Update todo failed!',
          status: 400,
        };
      }
    },
  },
};
