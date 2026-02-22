import React from 'react';
import App from '../../App'
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../../Body/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
      {  index: true,
        path: "/",
        Component: Home,},
       
  
    ]
  },
]);

