import { useState } from 'react';
import { componentProps } from '../constants/path'

type Props = {
  form: Omit<componentProps['todo'], "id" | "completed">;
  setForm: React.Dispatch<React.SetStateAction<Omit<componentProps['todo'], "id" | "completed">>>;
  onSubmit: (form: Omit<componentProps['todo'], "id" | "completed">) => void;
  isEdit?: boolean;
  isLoading?: boolean;
};

export default function TodoFormComponent({
  onSubmit,
  form,
  setForm,
  isEdit,
  isLoading = false,
}: Props) {
  const [errors, setErrors] = useState({
    title: "",
    priority: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      title: form.title.trim() ? "" : "Title is required",
      priority: form.priority ? "" : "Please select a priority"
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title *
        </label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter Todo title"
          value={form.title}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter Todo description"
          value={form.description}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
          Priority *
        </label>
        <select
          id="priority"
          name="priority"
          value={form.priority}
          onChange={handleInputChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            errors.priority ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {errors.priority && <p className="mt-1 text-sm text-red-600">{errors.priority}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isEdit ? "Update Todo" : "Add Todo"}
        {isLoading && <span className="ml-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
      </button>
    </form>
  );
}