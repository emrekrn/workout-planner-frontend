import React, { ReactElement, useContext } from 'react';
import { UserAuthenticationContext } from '../context/UserAuthenticationContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
	const { userToken } = useContext(UserAuthenticationContext);

	if (!userToken) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default ProtectedRoute;
