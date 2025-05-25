
export type Todo = {
    id: string;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    completed: boolean;
    createdAt?: string;
    updatedAt?: string;
    dueDate?: string;
}

export type componentProps = {
    todo: Todo
}