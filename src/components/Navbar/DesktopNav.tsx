import '../../assets/style/desktopNav.scss';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClockRotateLeft,
	faDumbbell,
	faGear,
	faHouse,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice.ts';

const DesktopNav = () => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOut({}));
	};
	return (
		<div className='nav-bar-large bg-secondary d-none d-sm-flex flex-column align-items-center justify-content-between pt-5 gap-5'>
			<div className='nav-top d-flex flex-column align-items-center gap-5'>
				{/*<Link className='nav-icon' to='/'>*/}
				{/*	<OverlayTrigger*/}
				{/*		key='top'*/}
				{/*		placement='right'*/}
				{/*		overlay={<Tooltip id={`tooltip-top`}>Homepage</Tooltip>}*/}
				{/*	>*/}
				{/*		<FontAwesomeIcon icon={faHouse} className='text-white' size='xl' />*/}
				{/*	</OverlayTrigger>*/}
				{/*	/!* homepage *!/*/}
				{/*</Link>*/}
				<Link className='nav-icon' to='my-workouts'>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Workouts</Tooltip>}
					>
						<FontAwesomeIcon
							icon={faDumbbell}
							className='text-white'
							size='xl'
						/>
					</OverlayTrigger>
					{/* workouts */}
				</Link>
				{/*<Link className='nav-icon' to='#'>*/}
				{/*	<OverlayTrigger*/}
				{/*		key='top'*/}
				{/*		placement='right'*/}
				{/*		overlay={<Tooltip id={`tooltip-top`}>Workout history</Tooltip>}*/}
				{/*	>*/}
				{/*		<FontAwesomeIcon*/}
				{/*			icon={faClockRotateLeft}*/}
				{/*			className='text-white'*/}
				{/*			size='xl'*/}
				{/*		/>*/}
				{/*		/!* History *!/*/}
				{/*	</OverlayTrigger>*/}
				{/*</Link>*/}
			</div>
			<div className='nav-bottom d-flex flex-column align-items-center gap-5 mb-5'>
				{/*<Link className='nav-icon' to='#'>*/}
				{/*	<OverlayTrigger*/}
				{/*		key='top'*/}
				{/*		placement='right'*/}
				{/*		overlay={<Tooltip id={`tooltip-top`}>Settings</Tooltip>}*/}
				{/*	>*/}
				{/*		<FontAwesomeIcon icon={faGear} className='text-white' size='xl' />*/}
				{/*	</OverlayTrigger>*/}
				{/*	/!* workouts *!/*/}
				{/*</Link>*/}
				<div className='nav-icon' onClick={handleLogOut}>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Logout</Tooltip>}
					>
						<FontAwesomeIcon
							icon={faRightFromBracket}
							className='text-white'
							size='xl'
						/>
					</OverlayTrigger>
					{/* History */}
				</div>
			</div>
		</div>
	);
};

export default DesktopNav;
