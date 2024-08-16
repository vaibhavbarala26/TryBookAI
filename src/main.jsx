import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import Payment from './Page/Payment.jsx';
import FeaturesSection from './Components/FeaturesSection.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path: "/payment",
    element:<Payment></Payment>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
