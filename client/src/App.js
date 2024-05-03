import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories/Categories";
import Trending from "./Pages/Trending/Trending";
import Movie from "./Pages/Movies/[movieId]";
// import Socials from "./components/Profile";
// import Waitlist from "./Pages/WaitList";

/** root routes*/
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/trending", element: <Trending /> },
      { path: "/[movieId]", element: <Movie /> },
    ],
  },
]);

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  );
};

export default App;

// Path: src/components/Header.js
