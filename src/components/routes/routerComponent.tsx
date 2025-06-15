// components/routes/routerComponent.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  NavbarComponent,
  HomeScreen,
  AddTodo,
  componentProps,
  EditTodo,
  CompletedTodo,
  LoginForm,
  RegisterForm,
  useAuth
} from "../../constants/path";

type  Props = componentProps['routerProps']

export default function RouterComponent({
  todos,
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  restoreTodo,
}: Props) {

    const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
