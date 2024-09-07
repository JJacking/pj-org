import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
  </BrowserRouter>
)
