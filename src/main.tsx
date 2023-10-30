import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { UserAuthenticationContextProvider } from './context/UserAuthenticationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<UserAuthenticationContextProvider>
			<RouterProvider router={router} />
		</UserAuthenticationContextProvider>
	</React.StrictMode>
);
