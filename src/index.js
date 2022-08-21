import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './css/styles.css'
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Dashboard/Error';
import AsideBar from './components/AsideBar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Header/>
    <AsideBar/>
    <Routes>
      <Route path="/user/:id" element={<Dashboard/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
 
);
