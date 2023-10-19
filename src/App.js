import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import BestSeller from "./pages/BestSeller";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/Athentication";
import ProductDetailPage, { loader as productDetailLoader } from "./pages/ProductDetail";
import NewProductPage from "./pages/NewProduct";
import EditProductPage from "./pages/EditProduct";
import ProductsRootLayout from "./pages/ProductsRoot";

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
          { path: ":productId", element: <ProductDetailPage />, loader: productDetailLoader },
          { path: "new", element: <NewProductPage /> },
          { path: ":productId/edit", element: <EditProductPage /> },
        ],
      },
      { path: "BestSeller", element: <BestSeller /> },
      { path: "About", element: <About /> },
      { path: "auth", element: <AuthenticationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
