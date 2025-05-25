import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoFormComponent from "../components/todoFormComponent";
import { CardComponent } from "../constants/path";
import { componentProps } from "../components/types";

type AddTodoProps = {
  onAdd: (todo: componentProps['todo']) => void;
};

export default function AddTodo({ onAdd }: AddTodoProps) {
  const navigate = useNavigate();
  const [form, setForm] = useState<Omit<componentProps['todo'], "id" | "completed">>({
    title: "",
    description: "",
    priority: "low",
  });

  const handleSubmit = (formData: Omit<componentProps['todo'], "id" | "completed">) => {
    const newTodo = {
      ...formData,
      id: Date.now().toString(),
      completed: false
    };

    onAdd(newTodo);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <CardComponent title="Add Todo" variant="form">
        <TodoFormComponent
          onSubmit={handleSubmit}
          form={form}
          setForm={setForm}
          isEdit={false}
        />
      </CardComponent>
    </div>
  );
}