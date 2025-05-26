import { componentProps,CardComponent } from "../constants/path";

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
     todo={{ title: "No todos yet", description: "Create new Todo"  }}
     variant="empty"
   />
   
      ) : (
        todos.map(todo => (
          <CardComponent 
            key={todo.id}
            todo={todo}
            onEdit={() => {}}
            onDelete={() => onDelete(todo.id)}
          />
        ))
      )}
    </div>
  );
}