import Todo from '../../../models/Todo';

export default {
  Mutation: {
    updateTodo: async (parent, args) => {
      try {
        const todo = await Todo.findByPk(args.id);
        if (todo && todo.id) {
          await todo.update({
            name: args.name,
            status: args.status,
          });
          return {
            message: 'Todo updated successfully!',
            status: 200,
            todo: todo,
          };
        } else {
          return {
            message: 'Todo not found!',
            status: 400,
            todo: null,
          };
        }
      } catch (e) {
        console.log('e', e);
        return {
          message: 'Update todo failed!',
          status: 400,
          todo: null,
        };
      }
    },
  },
};
