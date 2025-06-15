import { Client, Databases, Account } from "appwrite";


const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_PROJECT_ENDPOINT) // Replace with your Appwrite endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
