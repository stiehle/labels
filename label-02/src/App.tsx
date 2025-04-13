import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error/ErrorPage";
import Main from "./routes/Main/Main";
import labelManagementReducer from "./hooks/labelManagementReducer";
import { useReducer } from "react";
import { LabelContext } from "./context/LabelContext";

import PrintView from "./routes/PrintView/PrintView";

function App() {
  const [label, labelDispatch] = useReducer(labelManagementReducer, []);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
      },
      {
        path: "printview",
        element: <PrintView />,
      },
    ],
    { basename: "/labels/" }
  );

  return (
    <>
      <LabelContext.Provider value={{ label, labelDispatch }}>
        <RouterProvider router={router} />
      </LabelContext.Provider>
    </>
  );
}

export default App;
