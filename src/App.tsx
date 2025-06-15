import { useState } from "react";
import { RouterComponent, componentProps, AuthProvider } from "./constants/path";

export default function App() {
  const [todos, setTodos] = useState<componentProps["todo"][]>([
    // sample todos...
  ]);

  const addTodo = (newTodo: componentProps["todo"]) =>
    setTodos((prev) => [...prev, newTodo]);

  const deleteTodo = (id: string) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = (updatedTodo: componentProps["todo"]) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );

  const completeTodo = (id: string) => {
    if (window.confirm("Are you sure you want to complete this todo?")) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo
        )
      );
    }
  };

  const restoreTodo = (id: string) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );

  return (
    <AuthProvider>
      <RouterComponent
        todos={todos}
        addTodo={addTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        restoreTodo={restoreTodo}
      />
    </AuthProvider>
  );
}
