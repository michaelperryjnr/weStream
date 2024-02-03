import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories/Categories";
import Trending from "./Pages/Trending/Trending";
import Movie from "./Pages/Movies/[movieId]";
import Socials from "./components/Profile";
import Waitlist from "./Pages/WaitList";
import removeHeaderAndFooter from "./scripts/WaitListEvents";
/**import all compoments */

/** root routes*/
var showWaitlist = false;
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home></Home>,
  // },
  {
    path: "/",
    element: <Waitlist />,
  },

  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/categories",
    element: <Categories></Categories>,
  },
  {
    path: "/trending",
    element: <Trending></Trending>,
  },
  {
    path: "/[movieId]",
    element: <Movie></Movie>,
  },
]);

const App = () => {
  return (
    <StrictMode>
        <RouterProvider router={router}>
          <Header />
          {showWaitlist ? <Waitlist /> : router}
          <Footer />
        </RouterProvider>
      {/* <Analytics /> */}
    </StrictMode>
  );
};

export default App;

// Path: src/components/Header.js
