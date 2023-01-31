import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import Bookmark from './Bookmark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          
          <Route path="bookmark" element={<Bookmark />} />
           <Route  exact path="/" element={<App />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

