import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analytics from './pages/client/Analytics';
import Applications from './pages/client/Applications';
import Listings from './pages/client/Listings';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/applications",
    element: <Applications />,
  },
  {
    path: "/listings",
    element: <Listings />,
  },
])


const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement )
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
