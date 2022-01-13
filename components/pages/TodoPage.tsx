import { gql, useQuery } from "@apollo/client";

type Todo = {
  id: string;
  title: string;
  user: {
    id: string;
    name: string;
  };
};

type GetAllTodos = {
  todos: [Todo];
};

const GET_ALL_TODOS = gql`
  query {
    todos {
      id
      title
      user {
        id
        name
      }
    }
  }
`;

const TodoPage = () => {
  const { data, loading, error } = useQuery<GetAllTodos>(GET_ALL_TODOS);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>there was an error</>;
  }

  return (
    <div>
      {data?.todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default TodoPage;
