import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import Profile from './components/Profile.jsx'
import SignupPage from './components/SignupPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <>
          <LandingPage />
        </>
      },
    ]
  },
  {
    path: "/LoginPage",
    element: <><LoginPage /> </>
  },
  {
    path: "/SignupPage",
    element: <><SignupPage /> </>
  },
  {
    path: "/Profile",
    element: <><Profile /> </>
  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
