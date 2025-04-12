import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";
import Main from "./routes/Main/Main";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
      },
      {
        path: "printview",
      },
    ],
    { basename: "/labels/" }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
