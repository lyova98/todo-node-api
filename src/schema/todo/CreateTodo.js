const CreateTodo = `
  type Mutation {
    createTodo(name:String!, status:StatusType!):Response
  }
`;

export default CreateTodo;
