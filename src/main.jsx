import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//=====================================
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import LogIn from './LogIn/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
        element: <LogIn></LogIn>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
