import React from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'reactstrap';

const ProgressToast: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='d-flex align-items-center'>
      <Spinner size='sm' className='ml-2 mr-3'>
        {' '}
      </Spinner>
      <span className='display-6'>{text}...</span>
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
