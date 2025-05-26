import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardComponent, TodoFormComponent, componentProps } from "../constants/path";

type EditTodoProps = {
  todos: componentProps['todo'][];
  onEdit: (todo: componentProps['todo']) => void;
};

export default function EditTodo({ todos, onEdit }: EditTodoProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const selectedTodo = todos.find(todo => todo.id === id);

  const [form, setForm] = useState<Omit<componentProps['todo'], "id" | "completed">>({
    title: "",
    description: "",
    priority: "low",
  });

  useEffect(() => {
    if (selectedTodo) {
      const { title, description, priority } = selectedTodo;
      setForm({ title, description, priority });
    }
  }, [selectedTodo]);

  const handleSubmit = (formData: typeof form) => {
    if (!id) return;

    const updatedTodo: componentProps['todo'] = {
      id,
      completed: selectedTodo?.completed || false,
      ...formData,
    };

    onEdit(updatedTodo);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <CardComponent todo={{ title: "Edit Todo", description: "Update your todo item" }} variant="form">
        <TodoFormComponent
          onSubmit={handleSubmit}
          form={form}
          setForm={setForm}
          isEdit={true}
        />
      </CardComponent>
    </div>
  );
}
