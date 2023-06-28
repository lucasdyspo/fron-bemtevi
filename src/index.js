import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/page_home';
// import Profile from './pages/page_profile';
// import Search_page from './pages/page_search';
// import Art_page from './pages/page_art';




// const router = createBrowserRouter([{
//   path:'/home',
//   element:<Home/>,
// },
// {
//   path:'/profile',
//   element: <Profile/>
// },

// {
//   path: '/post/:id',
//   element: <Art_page/>
// },

// {
//   path: '/search/',
//   element: <Search_page/>
// },







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div> */}
   <App/>
   {/* </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();