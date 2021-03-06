import React, { Fragment } from 'react';
import { Logo } from '../Header/Logo/Logo';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Nav } from './Nav/Nav';

interface Props {
  toggleIsSideBarOpen: () => void;
  toggleIsSideBarMobile: () => void;
}

export const SideBar: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <div className='sidebar-mobile-overlay' />
      <div className='app-sidebar sidebar-shadow bg-white'>
        <Logo {...props} />
        <PerfectScrollbar>
          <div className='app-sidebar__inner'>
            <Nav />
          </div>
        </PerfectScrollbar>
        <div className='app-sidebar-bg opacity-8' />
      </div>
    </Fragment>
  );
};
