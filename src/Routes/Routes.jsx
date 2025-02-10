import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ProductList from "../components/Lists/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <ProductList />
            },
        ]
    }
]);

export default router;