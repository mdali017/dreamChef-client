import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Blog from './components/Blog/Blog.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import AllChefInfo from './components/AllChefInfo/AllChefInfo.jsx';
import ChefRecipepage from './components/Chef Recipe page/ChefRecipepage.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'allchefrecipe',
        element: <PrivateRoute><ChefRecipepage></ChefRecipepage></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allChef',
        element: <AllChefInfo></AllChefInfo>
      },
      {
        path: '/allChef/:id',
        element: <ChefDetails></ChefDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
