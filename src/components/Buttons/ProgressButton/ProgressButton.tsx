import React from 'react';
import { Button } from 'reactstrap';
import { BarLoader } from 'react-spinners';

type Color = 'primary' | 'danger' | 'warning' | 'success' | 'secondary' | 'info' | 'dark';

interface Props {
  text: string;
  color?: Color;
  isLoading: boolean;
  isSubmit?: boolean;
  onClick?: (() => void) | (() => Promise<void>);
  className?: string;
  sm?: boolean;
}

export const ProgressButton: React.FC<Props> = ({
  text,
  color,
  isLoading,
  isSubmit,
  onClick,
  className,
  sm
}) => {
  const initialClassName = 'd-flex justify-content-center align-items-center';
  const targetStyle = sm ? { minWidth: '4rem' } : { minWidth: '8rem' };
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      color={color ?? 'primary'}
      disabled={isLoading}
      className={className ? `${initialClassName} ${className}` : initialClassName}
      style={targetStyle}
      onClick={onClick ?? (() => {})}
      size={sm ? 'sm' : 'lg'}
    >
      {isLoading ? <BarLoader width={sm ? 40 : 90} color='#fff' /> : text}
    </Button>
  );
};
