import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import BestSeller from "./pages/BestSeller";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage from "./pages/Athentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
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
