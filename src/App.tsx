// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/global.css'
import './components/layout/Header/Header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/Home/MainPage.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
