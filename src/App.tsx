// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/Home/MainPage.tsx';
import AuthPage from "./views/Auth/AuthPage.tsx";
import { Layout } from "./components/layout/Layout/Layout.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
