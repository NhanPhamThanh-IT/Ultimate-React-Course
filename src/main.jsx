import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import UsersPage from './pages/users.jsx'
import ProductsPage from './pages/products.jsx'
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
