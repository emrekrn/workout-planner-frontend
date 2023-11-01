import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Login from './components/LoginPage/Login/Login';
import Register from './components/LoginPage/Register/Register';
import ProtectedRoute from './services/ProtectedRoute';
import StartPage from './pages/StartPage/StartPage';
import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';

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
		path: '/',
		element: (
			<ProtectedRoute>
				<StartPage />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'my-workouts',
				element: <WorkoutsPage />,
			},
		],
	},
]);
