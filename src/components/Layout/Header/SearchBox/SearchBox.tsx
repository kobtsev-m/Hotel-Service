import React, { Fragment, useRef, useState } from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../../../routes';

export const SearchBox: React.FC = () => {
  const { pathname } = useLocation();

  const [isActive, setIsActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    if (!pathname.includes(AppRoutes.Apartments)) {
      return;
    }
    if (!searchInputRef.current) {
      return;
    }
    const query = searchInputRef.current.value ?? '';
    console.log('Your query:', query);
  };

  return (
    <Fragment>
      <div
        className={cx('search-wrapper', {
          active: isActive
        })}
      >
        <div className='input-holder'>
          <input
            ref={searchInputRef}
            type='text'
            className='search-input'
            placeholder='Type to search'
            onKeyDown={(e) => e.code === 'Enter' && search()}
          />
          <button onClick={() => setIsActive((prev) => !prev)} className='search-icon'>
            <span />
          </button>
        </div>
        <button onClick={() => setIsActive((prev) => !prev)} className='close' />
      </div>
    </Fragment>
  );
};
