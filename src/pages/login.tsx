import { useState } from "react";
import { useAuth ,account } from "../constants/path";

export function LoginForm() {
  const { setUser, setIsAuthenticated } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await account.createEmailPasswordSession(form.email, form.password);
    const accountData = await account.get();
    setUser(accountData);
    if (setIsAuthenticated) {
      setIsAuthenticated(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}
