import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);
