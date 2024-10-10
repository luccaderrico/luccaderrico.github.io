import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import CV from './pages/CV.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path:"/",
              element: <Home />
            },
            {
              path:"/cv",
              element: <CV />
            }
          ]
        }
      ]
    }
  ]);

  export default router;