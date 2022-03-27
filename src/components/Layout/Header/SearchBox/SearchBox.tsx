import React, { Fragment, useState } from 'react';
import cx from 'classnames';

export const SearchBox: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Fragment>
      <div
        className={cx('search-wrapper', {
          active: isActive
        })}
      >
        <div className='input-holder'>
          <input type='text' className='search-input' placeholder='Type to search' />
          <button onClick={() => setIsActive((prev) => !prev)} className='search-icon'>
            <span />
          </button>
        </div>
        <button onClick={() => setIsActive((prev) => !prev)} className='close' />
      </div>
    </Fragment>
  );
};
