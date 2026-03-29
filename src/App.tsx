// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/Home/MainPage.tsx';
import { Layout } from "./components/layout/Layout/Layout.tsx";
import LoginPage from "./views/Auth/Login/LoginPage.tsx";
import RegisterPage from "./views/Auth/Register/RegisterPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
