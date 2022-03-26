// @ts-ignore
import { Slider } from 'react-burgers';

import React, { Fragment, useState } from 'react';

interface Props {
  toggleIsSideBarOpen: () => void;
  toggleIsSideBarMobile: () => void;
}

export const Logo: React.FC<Props> = ({ toggleIsSideBarOpen }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive((prev) => !prev);
  return (
    <Fragment>
      <div className='app-header__logo p-0'>
        <div className='logo-src' />
        <div className='header__pane ml-auto'>
          <div onClick={toggleIsSideBarOpen}>
            <Slider
              width={26}
              lineHeight={2}
              lineSpacing={5}
              color='#6c757d'
              active={isActive}
              onClick={toggleIsActive}
            />
          </div>
        </div>
      </div>
      <MobileLogo toggleIsSideBarOpen={toggleIsSideBarOpen} />
    </Fragment>
  );
};

interface MobileProps {
  toggleIsSideBarOpen: () => void;
}

const MobileLogo: React.FC<MobileProps> = ({ toggleIsSideBarOpen }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive((prev) => !prev);
  return (
    <Fragment>
      <div className='app-header__mobile-menu'>
        <div onClick={toggleIsSideBarOpen}>
          <Slider
            width={26}
            lineHeight={2}
            lineSpacing={5}
            color='#6c757d'
            active={isActive}
            onClick={toggleIsActive}
          />
        </div>
      </div>
    </Fragment>
  );
};
