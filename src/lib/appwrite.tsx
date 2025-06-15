import { Client, Databases, Account } from "appwrite";


const client = new Client();
client
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
