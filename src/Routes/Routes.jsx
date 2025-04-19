import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Root/ErrorPage/ErrorPage';
import Home from '../pages/Root/Home/Home';
import About from '../pages/Root/About/About';
import BookDetails from '../pages/Root/BookDetails/BookDetails';
import ReadList from '../pages/Root/ReadList/ReadList';
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            loader:()=>fetch('booksData.json'),
            path:'/',
            Component:Home
        },
        {
            path:'/about',
            Component:About,
        },
        {
        path:'readList',
        loader:()=>fetch('booksData.json'),
        Component:ReadList,
        },
        {
            path:'/bookDetails/:id',
            loader:()=>fetch('booksData.json'),
            Component:BookDetails,
        }
      ]
    },
  ]);