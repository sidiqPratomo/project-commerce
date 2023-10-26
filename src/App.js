import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import BestSeller from "./pages/BestSeller";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/Athentication";
import ProductDetailPage, { loader as productDetailLoader, action as deleteProductAction } from "./pages/ProductDetail";
import NewProductPage from "./pages/NewProduct";
import EditProductPage from "./pages/EditProduct";
import ProductsRootLayout from "./pages/ProductsRoot";
import { action as productFormAction } from "./component/ProductForm";
import Login from "./component/SignIn";
import Home from "./component/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: productsLoader },
      {
        path: "products",
        element: <ProductsRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            id: "product-detail",
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <ProductDetailPage />,
                action: deleteProductAction,
              },
              {
                path: "edit",
                element: <EditProductPage />,
                action: productFormAction,
              },
            ],
          },
          { path: "new", element: <NewProductPage />, action: productFormAction },
        ],
      },
      { path: "bestSeller", element: <BestSeller /> },
      { path: "about", element: <About /> },
      { path: "auth", element: <AuthenticationPage /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
