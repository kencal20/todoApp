import { useState } from "react";
import { useAuth, account } from "../constants/path";
import { ID } from "appwrite";

export function RegisterForm() {

  const { setUser } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    gender: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, phoneNumber, gender } = form;
    await account.create(ID.unique(), email, password);
    await account.createEmailPasswordSession(email, password);
    await account.updatePhone(phoneNumber, password);
    await account.updatePrefs({ gender });
    const accountData = await account.get();
    setUser(accountData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="fullname" type="text" placeholder="Name" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="phoneNumber" type="tel" placeholder="Phone Number" onChange={handleChange}  />
      <select name="gender" onChange={handleChange} >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}