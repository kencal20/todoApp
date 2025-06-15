type Todo = {
    id?: string;
    title: string;
    description: string;
    priority?: "low" | "medium" | "high";
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
    dueDate?: string;
    userId?: string; // Add userId to associate todos with users
}

type Card = {
    todo: Omit<Todo, | 'createdAt' | 'updatedAt' | 'dueDate'>;
    onEdit?: () => void;
    onDelete?: () => void;
    children?: React.ReactNode;
    variant?: 'default' | 'empty' | 'form';
}

type RouterComponentProps = {
    todos: componentProps["todo"][];
    addTodo: (newTodo: componentProps["todo"]) => void;
    editTodo: (updatedTodo: componentProps["todo"]) => void;
    deleteTodo: (id: string) => void;
    completeTodo: (id: string) => void;
    restoreTodo: (id: string) => void;
}

export type componentProps = {
    todo: Todo
    card: Card;
    routerProps: RouterComponentProps;
}