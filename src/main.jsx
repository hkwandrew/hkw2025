import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'

import './index.scss'

const router = createBrowserRouter([
  {
    basename: 'hkw2025',
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/work',
        element: <Work />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
