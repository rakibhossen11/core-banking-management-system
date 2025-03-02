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
import CustomerDetail from "../Client/CustomerDetail";
import TransactionForm from "../Client/Transaction/TransactionForm";
import Expenses from "../Expenses/Expenses";
import AddExpenses from "../Expenses/AddExpenses";
import Product from "../components/Lists/Product";

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
                element: <Product />
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
                path: '/usertable',
                element: <UserTable />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/customer&details/:id',
                element: <CustomerDetail />,
                loader: (({params}) => fetch(`http://localhost:5000/users/${params.id}`))
            },
            {
                path: '/transactionform/:id',
                element: <TransactionForm />,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            // expenses related api 
            {
                path: '/expenses',
                element: <Expenses />,
                // loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            {
                path: '/addExpenses',
                element: <AddExpenses />,
                // loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
        ]
    }
]);

export default router;