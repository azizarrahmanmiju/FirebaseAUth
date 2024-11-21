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
import RegisterForm from './Form/RegisterForm';
import ForgetPassword from './ForgetPassword/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      }, {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
