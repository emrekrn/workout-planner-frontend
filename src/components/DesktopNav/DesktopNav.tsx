import React from 'react';

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

const DesktopNav = () => {
	return (
		<div className='nav-bar-large bg-secondary d-none d-sm-flex flex-column align-items-center justify-content-between pt-5 gap-5'>
			<div className='nav-top d-flex flex-column align-items-center gap-5'>
				<a className='nav-icon' href='#'>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Homepage</Tooltip>}
					>
						<FontAwesomeIcon icon={faHouse} className='text-white' size='xl' />
					</OverlayTrigger>
					{/* homepage */}
				</a>
				<a className='nav-icon' href='#'>
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
				</a>
				<a className='nav-icon' href='#'>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Workout history</Tooltip>}
					>
						<FontAwesomeIcon
							icon={faClockRotateLeft}
							className='text-white'
							size='xl'
						/>
						{/* History */}
					</OverlayTrigger>
				</a>
			</div>
			<div className='nav-bottom d-flex flex-column align-items-center gap-5 mb-5'>
				<a className='nav-icon' href='#'>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Settings</Tooltip>}
					>
						<FontAwesomeIcon icon={faGear} className='text-white' size='xl' />
					</OverlayTrigger>
					{/* workouts */}
				</a>
				<a className='nav-icon' href='#'>
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
				</a>
			</div>
		</div>
	);
};

export default DesktopNav;
