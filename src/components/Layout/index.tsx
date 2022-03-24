import React, { useState } from 'react';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { ToastContainer } from 'react-toastify';
import cx from 'classnames';
import ResizeDetector from 'react-resize-detector';

export const Layout: React.FC = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSideBarMobile, setIsSideBarMobile] = useState(false);
  const toggleIsSideBarOpen = () => setIsSideBarOpen((prev) => !prev);
  const toggleIsSideBarMobile = () => setIsSideBarMobile((prev) => !prev);
  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <div
          className={cx(
            'app-container app-theme-dark fixed-header fixed-sidebar',
            { 'closed-sidebar': (!isSideBarMobile && !isSideBarOpen) || (width ?? 0) < 1250 },
            { 'closed-sidebar-mobile': (isSideBarMobile && !isSideBarOpen) || (width ?? 0) < 1250 },
            { 'sidebar-mobile-open': isSideBarMobile && isSideBarOpen }
          )}
        >
          <Header
            toggleIsSideBarOpen={toggleIsSideBarOpen}
            toggleIsSideBarMobile={toggleIsSideBarMobile}
          />
          <div className='app-main'>
            <SideBar
              toggleIsSideBarOpen={toggleIsSideBarOpen}
              toggleIsSideBarMobile={toggleIsSideBarMobile}
            />
            <div className='app-main__outer'>
              <div className='app-main__inner'>
                {children}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
