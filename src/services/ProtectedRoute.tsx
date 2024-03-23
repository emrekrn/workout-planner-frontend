import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserToken } from '../features/auth/authSlice.ts';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
	const userToken = useSelector(getUserToken);

	if (!userToken) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;
