// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles/global.css";
import { BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutesAdmin } from "./routes/AppRoutesAdmin.tsx";
import { AppRoutesCustomer } from "./routes/AppRoutesCustomer.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {AppRoutesCustomer}
        {AppRoutesAdmin}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
