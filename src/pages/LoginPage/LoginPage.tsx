import './loginPage.scss';
import mainImg from '../../images/mainimg.jpg';
import siteName from '../../images/workoutplanner.png';

const LoginPage = () => {
	return (
		<div className='login-page bg-primary'>
			<div className='left-part'>
				<img className='main-image' src={mainImg} />
				<img className='site-name' src={siteName} />
			</div>
			<div className='right-part bg-main'>test</div>
		</div>
	);
};

export default LoginPage;
