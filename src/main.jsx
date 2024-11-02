import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './AllComponents/Layout/Layout.jsx';
import ErrorPage from './AllComponents/ErrorPage/ErrorPage.jsx';
import Home from './AllComponents/Navbar/Home/Home.jsx';
import ListBook from './AllComponents/ListBook/ListBook.jsx';
import PagesToRead from './AllComponents/PagesToRead/PagesToRead.jsx';
import BookDetails from './AllComponents/Navbar/Home/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      }
      ,
      {
        path:'/listBook',
        element:<ListBook></ListBook>,
        loader:()=> fetch('/booksData.json')

      },
      {
        path:'/PagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/books/:BookId',
        loader:()=> fetch('/booksData.json'),
        element:<BookDetails></BookDetails>
            }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
