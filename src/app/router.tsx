import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import Login from '../components/LoginPage/LoginForm';
import Register from '../components/LoginPage/RegisterForm';
import ProtectedRoute from '../services/ProtectedRoute';
import StartPage from '../pages/StartPage/StartPage';
import WorkoutsPage from '../pages/WorkoutsPage/WorkoutsPage';
import Dashboard from '../pages/DashboardPage/Dashboard';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<StartPage />
			</ProtectedRoute>
		),
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/my-workouts',
				element: <WorkoutsPage />,
			},
		],
	},
	{
		path: '/',
		element: <LoginPage />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);
