import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import PostDetail from './components/PostDetail';
import Search from './components/Search';
import Create from './components/admin/Create';
import Edit from './components/admin/Edit';
// import AllPosts from './components/admin/AllPosts'
import Delete from './components/admin/Delete'
import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/edit/:id" element={<Edit />} />
        <Route path="/admin/delete/:id" element={<Delete />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
