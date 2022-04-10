import cn from 'classnames';
import React, { Fragment } from 'react';
import MetisMenu from 'react-metismenu';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../../routes';

const MenuNav = [
  {
    icon: 'pe-7s-graph2',
    label: 'Hotels',
    to: AppRoutes.Index
  },
  {
    icon: 'pe-7s-graph',
    label: 'Apartments',
    to: AppRoutes.Apartments
  },
  {
    icon: 'pe-7s-gleam',
    label: 'Services',
    to: AppRoutes.Services
  }
];

const AboutNav = [
  {
    icon: 'pe-7s-info',
    label: 'About Us',
    to: AppRoutes.About
  }
];

const CustomNavLink = ({ label, to, children, className }) => {
  return <NavLink title={label} to={to} children={children} className={cn(className, 'mt-1')} />;
};

export const Nav: React.FC = () => {
  return (
    <Fragment>
      <h5 className='app-sidebar__heading'>Menu</h5>
      <MetisMenu
        content={MenuNav}
        onSelected={() => {}}
        activeLinkFromLocation
        className='vertical-nav-menu'
        iconNamePrefix=''
        classNameStateIcon='pe-7s-angle-down'
        LinkComponent={CustomNavLink}
      />
      <h5 className='app-sidebar__heading'>About</h5>
      <MetisMenu
        content={AboutNav}
        onSelected={() => {}}
        activeLinkFromLocation
        className='vertical-nav-menu mb-1'
        iconNamePrefix=''
        classNameStateIcon='pe-7s-angle-down'
        LinkComponent={CustomNavLink}
      />
    </Fragment>
  );
};
