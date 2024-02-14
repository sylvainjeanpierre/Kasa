import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Article from "./Article";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Article />,
      },
      {
        path: "a-propos",
        element: <p>A propos</p>,
      },
    ],
  },
]);

function Root() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
