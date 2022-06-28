import Todo from '../../../models/Todo';

export default {
  Mutation: {
    deleteTodo: async (parent, args) => {
      console.log('args.id', args.id);
      try {
        await Todo.destroy({
          where: {
            id: args.id,
          },
        });
        return {
          message: 'Todo deleted successfully!',
          status: 200,
        };
      } catch (e) {
        return {
          message: 'Todo delete failed!',
          status: 400,
        };
      }
    },
  },
};
