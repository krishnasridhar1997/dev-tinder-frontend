import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Content from "./components/content.jsx";
import Login from "./views/login.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Feed from "./views/feed.jsx";
import Profile from "./views/profile.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "feed",
        element: <Feed/>,
      },
       {
        path: "profile",
        element: <Profile/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
