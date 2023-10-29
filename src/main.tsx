import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import LoginPage from './pages/LoginPage/LoginPage';
import './style/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LoginPage />
	</React.StrictMode>
);
