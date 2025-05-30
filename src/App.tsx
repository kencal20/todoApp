import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavbarComponent,
  HomeScreen,
  AddTodo,
  componentProps,
  EditTodo,
  CompletedTodo,
} from "./constants/path";

export default function App() {
  const [todos, setTodos] = useState<componentProps["todo"][]>([
    {
      id: "1",
      title: "Learn React",
      description: "Study the basics of React and build a simple app.",
      priority: "high",
      completed: false,
    },
    {
      id: "2",
      title: "Complete Project",
      description: "Finish the project by the end of the week.",
      priority: "medium",
      completed: false,
    },
  ]);

  const addTodo = (newTodo: componentProps["todo"]) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    if (window.confirm("Are you sure you want to delete this todo?")) 
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (updatedTodo: componentProps["todo"]) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const completeTodo = (id: string) => {
    if (window.confirm("Are you sure you want to complete this todo?"))
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const restoreTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );
  };

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              todos={todos}
              onDelete={deleteTodo}
              onEdit={editTodo}
              onComplete={completeTodo}
            />
          }
        />
        <Route path="/add" element={<AddTodo onAdd={addTodo} />} />
        <Route
          path="/edit/:id"
          element={<EditTodo todos={todos} onEdit={editTodo} />}
        />
        <Route
          path="/completed"
          element={
            <CompletedTodo
              todos={todos}
              onDelete={deleteTodo}
              onRestore={restoreTodo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
