import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ProductList from "../components/Lists/ProductList";
import UserForm from "../components/Form/UserForm";
import UserTable from "../components/Tables/UserTable";
import ProductAdd from "../components/Form/ProductAdd";
import Dashboard from "../DashBoard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/addProducts',
                element: <ProductAdd />
            },
            {
                path: '/userForm',
                element: <UserForm />
            },
            {
                path: '/usertable',
                element: <UserTable />,
                loader: () => fetch('http://localhost:5000/users')
            },
        ]
    }
]);

export default router;