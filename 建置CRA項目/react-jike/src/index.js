import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom'
import  router  from './router';
import { Provider } from 'react-redux';
import store from './store';
import "normalize.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 嚴格模式會渲染兩次
  // <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);



