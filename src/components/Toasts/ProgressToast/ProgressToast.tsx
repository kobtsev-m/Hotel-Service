import React from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'reactstrap';

const ProgressToast: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='position-relative d-flex justify-content-center align-items-center'>
      <Spinner className='position-absolute' size='sm' style={{ left: '0.5rem' }}>
        {' '}
      </Spinner>
      <span className='ml-2'>{text}...</span>
    </div>
  );
};

export const createProgressToast = (text = 'Processing') => {
  return toast(<ProgressToast text={text} />, {
    position: 'bottom-center',
    autoClose: false,
    closeButton: false
  });
};
