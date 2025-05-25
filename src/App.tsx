// App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent, HomeScreen, AddTodo } from './constants/path';
import { componentProps } from './components/types';

type Props = {};

export default function App({ }: Props) {
  const [todos, setTodos] = useState<componentProps['todo'][]>([
    {
      id: "1",
      title: "Learn React",
      description: "Study the basics of React and build a simple app.",
      priority: "high",
      completed: false
    },
    {
      id: "2",
      title: "Complete Project",
      description: "Finish the project by the end of the week.",
      priority: "medium",
      completed: false
    }
  ]);

  const addTodo = (newTodo: componentProps['todo']) => {
    setTodos(prev => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeScreen todos={todos} onDelete={deleteTodo} />} />
        <Route path="/add" element={<AddTodo onAdd={addTodo} />} />
      </Routes>
    </BrowserRouter>
  );
}