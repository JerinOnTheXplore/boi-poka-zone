import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Root/ErrorPage/ErrorPage';
import Home from '../pages/Root/Home/Home';
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            path:'/',
            Component:Home
        }
      ]
    },
  ]);