import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { createBrowserRouter,Outlet } from "react-router-dom";
import "./App.css";
import Assessment from "./components/Assessment";

const AppLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen px-24">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/assessment" , 
        element: <Assessment/>
      }
    ],
  },
]);

