import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'portfolio', element: <Portfolio /> },
      // Add more routes here as needed
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
