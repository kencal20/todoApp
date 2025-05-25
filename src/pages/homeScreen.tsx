import CardComponent from "../components/cardComponent";

export default function HomeScreen() {
    interface Todo {
        id: string;
        title: string;
        description: string;
    }

    const todos: Todo[] = [
        {
            id: "1",
            title: "Learn React",
            description: "Study the basics of React and build a simple app."
        },
        {
            id: "2",
            title: "Complete Project",
            description: "Finish the project by the end of the week."
        }
    ]; // Your todos array
    
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
                        onEdit={() =>{}}
                        onDelete={() => {}}
                    />
                    
                ))
            )}
        </div>
    );
}