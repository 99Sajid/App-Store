import React from 'react';
import App from '../../App'
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../../Body/Home'
import Apps from '../Apps/Apps'
import Installation from '../Installation/Installation';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
      {  index: true,
        path: "/",
        loader : ()=>fetch('/HomeBodyDataApp.json'),
        Component: Home,},
       {
        path:"/app",
        Component:Apps,
       },
       {
        path:"/Installation",
        Component:Installation,
       },
  
    ]
  },
]);

