import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Lander from "./pages/lander/Lander";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Monitors from "./pages/monitors/Monitors";
import Billing from "./pages/billing/Billing";
import Cron from "./pages/cron/Cron";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Lander /> },
    { path: "/sign-in", element: <Signin /> },
    { path: "/sign-up", element: <Signup /> },
    {
      path: "/",
      children: [
        { path: "/dashboard", element: <Home /> },
        { path: "/monitors", element: <Monitors /> },
        { path: "/cron", element: <Cron /> },
        { path: "/billing", element: <Billing /> },
      ],
      element: <Layout />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
