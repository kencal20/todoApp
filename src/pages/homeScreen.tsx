import CardComponent from "../components/cardComponent";
import { componentProps } from "../components/types";

type HomeScreenProps = {
  todos: componentProps['todo'][];
  onDelete: (id: string) => void;
};

export default function HomeScreen({ todos, onDelete }: HomeScreenProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      
      {todos.length === 0 ? (
        <CardComponent
          title="No Todos Found"
          subtitle="Create your first todo to get started"
          variant="empty"
        />
      ) : (
        todos.map(todo => (
          <CardComponent 
            key={todo.id}
            title={todo.title}
            subtitle={todo.description}
            onEdit={() => {}}
            onDelete={() => onDelete(todo.id)}
          />
        ))
      )}
    </div>
  );
}