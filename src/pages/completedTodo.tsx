import { componentProps, CardComponent } from "../constants/path";

type CompletedTodoProps = {
  todos: componentProps['todo'][];
  onDelete: (id: string) => void;
  onRestore: (id: string) => void;
};

export default function CompletedTodo({ todos, onDelete, onRestore }: CompletedTodoProps) {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Completed Todos</h1>

      {completedTodos.length === 0 ? (
        <CardComponent
          todo={{ title: "No completed todos", description: "Complete a todo to see it here" }}
          variant="empty"
        />
      ) : (
        completedTodos.map(todo => (
          <CardComponent
            key={todo.id}
            todo={todo}
            onDelete={() => todo.id && onDelete(todo.id)}
            onRestore={() => todo.id && onRestore(todo.id)}
          />
        ))
      )}
    </div>
  );
}