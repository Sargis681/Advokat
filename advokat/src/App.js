import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from './componnents/HomePage/HomePage';
import Layout from './componnents/Layout';

const Blog = React.lazy(() => import('./componnents/Blog/Blog'));
const ErrorPage = React.lazy(() => import('./componnents/ErrorPage/ErrorPage'));
const AboutUs = React.lazy(() => import(`./componnents/AboutUs/AboutUs`))


function App() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='blog' element={<Blog />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
