import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sum from "@/test"

const total = sum(1,3)
console.log(total)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 嚴格模式的節點,造成某些代碼執行兩次
  // <React.StrictMode>
    <App />
  // {/* </React.StrictMode> */}
);



