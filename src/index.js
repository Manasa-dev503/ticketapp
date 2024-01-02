import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './user/Login';
import Register from './user/Register';
import Manager from './features/dashboard/Manager';
import Customer from './features/dashboard/Customer';
import Employee from './features/dashboard/Employee';
import RaiseTicket from './features/dashboard/RaiseTicket';
import ListTickets from './features/dashboard/ListTickets';
import TicketsData from './features/dashboard/TicketsData';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Login></Login>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registerForm",
        element:<Register></Register>
      },
      {
        path:"/Manager/:username/:id",
        element:<Manager></Manager>
      },
      {
        path:"/Customer/:username/:id",
        element:<Customer></Customer>,
        children:[
          {
            path:"/Customer/:username/:id/RaiseTicket",
            element:<RaiseTicket></RaiseTicket>
          },
          {
            path:'/Customer/:username/:id/ticketslist',
            element:<TicketsData></TicketsData>
          },
          {
            path:`/Customer/:username/:id/RaiseTicket/ListTickets`,
            element:<ListTickets></ListTickets>
          }
        ]
      },
      {
        path:"/Employee/:username/:id",
        element:<Employee></Employee>
      },
      
    ],
  },
  
  
  
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
