import { useState } from 'react'
import { RouterProvider, BrowserRouter, createBrowserRouter } from "react-router-dom";

import './App.css'
import Home from './composants/Home'
import About from './composants/About'
import Connexion from './composants/Connexion';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
      path: "/home/:login",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    }
    ,
    {
      path: "/connexion",
      element: <Connexion />,
    }
  ]);

  return (
    <>
      {/* <h1>Exercice 1 </h1>
      <RouterProvider router={router} /> */}

      <h1>Exercice 2 & 3 </h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
