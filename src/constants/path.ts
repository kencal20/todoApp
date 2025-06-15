import NavbarComponent from "../../src/components/navbarComponent";
import HomeScreen from "../../src/pages/homeScreen";
import CardComponent from "../../src/components/cardComponent";
import AddTodo from "../../src/pages/addTodo";
import TodoFormComponent from "../components/todoFormComponent";
import EditTodo from "../pages/editTodo";
import CompletedTodo from "../pages/completedTodo";
import {LoginForm} from "../pages/login";
import {RegisterForm} from "../pages/register";
import { AuthProvider,useAuth } from "../context/authContext";
import { databases,account } from "../lib/appwrite";
import RouterComponent from "../components/routes/routerComponent";


export{
    NavbarComponent,
    HomeScreen,
    CardComponent,
    AddTodo,
    TodoFormComponent,
    EditTodo,
    CompletedTodo,
    LoginForm,
    RegisterForm,
    AuthProvider,
    useAuth,
    databases,
    account,
    RouterComponent
    
    
}

export type { componentProps } from "../components/types";