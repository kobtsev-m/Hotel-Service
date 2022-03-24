import React from 'react';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { MegaMenu } from './MegaMenu';
import { UserBox } from './UserBox';

interface Props {
  toggleIsSideBarOpen: () => void;
  toggleIsSideBarMobile: () => void;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div className='app-header header-shadow bg-dark header-text-light'>
      <Logo {...props} />
      <div className='app-header__content'>
        <div className='app-header-left'>
          <MegaMenu />
        </div>
        <div className='app-header-right'>
          <SearchBox />
          <UserBox />
        </div>
      </div>
    </div>
  );
};
