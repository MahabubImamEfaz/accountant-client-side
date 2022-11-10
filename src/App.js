import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Services from "./Pages/Services/Services";
import Service from "./Pages/Service/Service";
import AddReview from "./Pages/Review/AddReview";
import Reviews from "./Pages/Review/Reviews";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Blog from "./Pages/Blog/Blog";
import AlllReviews from "./Pages/Review/AlllReviews";
import AddServices from "./Pages/Service/AddServices";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/service/:id",
          element: <Service></Service>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/service/${params.id}`),
        },
        {
          path: "/addreview/:id",
          element: (
            <PrivateRoutes>
              <AddReview></AddReview>
            </PrivateRoutes>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/addreview/${params.id}`),
        },
        {
          path: "/reviews",
          element: (
            <PrivateRoutes>
              <Reviews></Reviews>
            </PrivateRoutes>
          ),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/allreviews",
          element: <AlllReviews></AlllReviews>,
        },
        {
          path: "/addservices",
          element: <AddServices></AddServices>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
