import React from 'react';
import './startPage.scss';

import MobileNav from '../../components/Layout/MobileNav/MobileNav';
import DesktopNav from '../../components/Layout/DesktopNav/DesktopNav';
import { Outlet } from 'react-router-dom';

const StartPage = () => {
	return (
		<div className='start-page d-sm-flex'>
			<MobileNav />
			<DesktopNav />
			<div className='content-field bg-primary'>
				<Outlet />
			</div>
		</div>
	);
};

export default StartPage;
