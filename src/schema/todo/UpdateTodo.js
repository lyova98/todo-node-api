const UpdateTodo = `
  type Mutation {
    updateTodo(id:Int!, name:String!, status:StatusType!): Response
  }
`;

export default UpdateTodo;
