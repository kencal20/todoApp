
 type Todo = {
    id?: string;
    title: string;
    description: string;
    priority?: "low" | "medium" | "high";
    completed?: boolean;
    createdAt?: string;
    updatedAt?: string;
    dueDate?: string;
}

type Card={
    todo: Omit<Todo,    | 'createdAt' | 'updatedAt' | 'dueDate'>;
    onEdit?: () => void;
    onDelete?: () => void;
    children?: React.ReactNode;
    variant?: 'default' | 'empty' | 'form';
}

export type componentProps = {
    todo: Todo
    card: Card;
}