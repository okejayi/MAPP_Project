import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'
import Home_Page from './Pages/Home_page/Index'
import Login_Page from './Pages/Login_Page/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Home_Page/>
<Login_Page/>
  </StrictMode>,
)
