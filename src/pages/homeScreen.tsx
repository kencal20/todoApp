import { componentProps, CardComponent } from "../constants/path";

type HomeScreenProps = {
  todos: componentProps["todo"][];
  onDelete: (id: string) => void;
  onEdit: (todo: componentProps["todo"]) => void;
  onComplete: (id: string) => void;
};

export default function HomeScreen({
  todos,
  onDelete,
  onEdit,
  onComplete,
}: HomeScreenProps) {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>

      {activeTodos.length === 0 ? (
        <CardComponent
          todo={{ title: "No todos yet", description: "Create new Todo" }}
          variant="empty"
        />
      ) : (
        activeTodos.map((todo) => (
          <CardComponent
            key={todo.id}
            todo={todo}
            onEdit={() => onEdit(todo)}
            onDelete={() => todo.id && onDelete(todo.id)}
            onComplete={() => todo.id && onComplete(todo.id)}
          />
        ))
      )}
    </div>
  );
}
