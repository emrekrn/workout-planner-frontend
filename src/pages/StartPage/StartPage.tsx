import React from 'react';
import './startPage.scss';
import siteName from '../../images/workoutplanner.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const StartPage = () => {
	return (
		<div className='start-page d-sm-flex'>
			<Navbar expand='lg' className='nav-bar bg-secondary d-sm-none'>
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
			<div className='nav-bar-large bg-secondary'></div>
			<div className='content-field bg-primary'>test</div>
		</div>
	);
};

export default StartPage;
