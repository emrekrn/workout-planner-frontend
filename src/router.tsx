import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProtectedRoute from './services/ProtectedRoute';
import StartPage from './pages/StartPage/StartPage';

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
	{
		path: '/dashboard',
		element: (
			<ProtectedRoute>
				<StartPage />
			</ProtectedRoute>
		),
	},
]);
