import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ProductList from "../components/Lists/ProductList";
import UserForm from "../components/Form/UserForm";
import UserTable from "../components/Tables/UserTable";
import ProductAdd from "../components/Form/ProductAdd";
import Dashboard from "../DashBoard/Dashboard";
import SignIn from "../authentication/SignIn";
import ProductDetails from "../components/Details/ProductDetails";
import ModalPro from "../components/Modal/ModalPro";
import ProductUpdate from "../components/Form/ProductUpdate";
import BuyForm from "../components/Form/BuyForm";
import SellForm from "../components/Form/SellForm";

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
                path: '/products',
                element: <ProductList />
            },
            {
                path: '/addProducts',
                element: <ProductAdd />
            },
            {
                path: '/product&Details/:id',
                element: <ProductDetails />,
                loader: (({params}) => fetch(`http://localhost:5000/products/${params.id}`))
            },
            {
                path: '/product&update/:id',
                element: <ProductUpdate />,
                loader: (({params}) => fetch(`http://localhost:5000/products/${params.id}`))
            },
            {
                path: '/buy/:id',
                element: <BuyForm />,
                loader: (({params}) => fetch(`http://localhost:5000/products/${params.id}`))
            },
            {
                path: '/sell/:id',
                element: <SellForm />,
                loader: (({params}) => fetch(`http://localhost:5000/products/${params.id}`))
            },
            {
                path: '/userForm',
                element: <UserForm />
            },

            {
                path: '/signIn',
                element: <SignIn />
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