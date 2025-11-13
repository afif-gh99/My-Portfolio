import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root'
import MainPage from './pages/MainPage'
import DashStack from './pages/DashStack'
import Trippy from './pages/Trippy'
import Fingo from './pages/Fingo'
import MyDash from './pages/MyDash'
import Kasper from './pages/Kasper'
import Leon from './pages/Leon'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'dashstack',
        element: <DashStack />
      },
      {
        path: 'trippy',
        element: <Trippy />
      },
      {
        path: 'fingo',
        element: <Fingo />
      },
      {
        path: 'mydash',
        element: <MyDash />
      },
      {
        path: 'kasper',
        element: <Kasper />
      },
      {
        path: 'leon',
        element: <Leon />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
