import React from 'react';
import './startPage.scss';
import siteName from '../../images/workoutplanner.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClockRotateLeft,
	faDumbbell,
	faHouse,
} from '@fortawesome/free-solid-svg-icons';

const StartPage = () => {
	return (
		<div className='start-page d-sm-flex'>
			<Navbar
				expand='lg'
				className='nav-bar bg-secondary d-sm-none'
				data-bs-theme='dark'
			>
				<Container>
					<Navbar.Brand className='nav-left' href='#'>
						<img className='page-icon' src={siteName} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#'>Link1</Nav.Link>
							<Nav.Link href='#'>Link2</Nav.Link>
							<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='nav-bar-large bg-secondary d-none d-sm-flex flex-column align-items-center pt-5 gap-5'>
				<a className='nav-icon' href='#'>
					<OverlayTrigger
						key='top'
						placement='right'
						overlay={<Tooltip id={`tooltip-top`}>Homepage</Tooltip>}
					>
						<FontAwesomeIcon icon={faHouse} className='text-white' size='xl' />
						{/* History */}
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
						{/* History */}
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
			<div className='content-field bg-primary'>test</div>
		</div>
	);
};

export default StartPage;
