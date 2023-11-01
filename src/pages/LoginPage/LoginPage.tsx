import './loginPage.scss';
import mainImg from '../../images/mainimg.jpg';
import siteName from '../../images/workoutplanner.png';
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserAuthenticationContext } from '../../context/UserAuthenticationContext';

const LoginPage = () => {
	const { userToken } = useContext(UserAuthenticationContext);
	if (userToken) {
		return <Navigate to='/' replace />;
	}
	return (
		<div className='login-page bg-primary row m-0'>
			<div className='left-part d-none d-md-flex align-items-center justify-content-center col-md-6'>
				<img className='main-image' src={mainImg} />
				<img className='site-name' src={siteName} />
			</div>
			<div className='right-part d-flex align-items-center justify-content-center col-12 col-md-6 bg-main'>
				<img className='mobile-site-name d-md-none' src={siteName} />
				<Outlet />
			</div>
		</div>
	);
};

export default LoginPage;
