import React from 'react';
import { Button } from 'reactstrap';
import { BarLoader } from 'react-spinners';

type Color = 'primary' | 'danger' | 'warning' | 'success' | 'secondary' | 'info';

interface Props {
  text: string;
  color?: Color;
  isLoading: boolean;
  isSubmit?: boolean;
  onClick?: (() => void) | (() => Promise<void>);
  className?: string;
}

export const ProgressButton: React.FC<Props> = ({
  text,
  color,
  isLoading,
  isSubmit,
  onClick,
  className
}) => {
  const initialCN = 'd-flex justify-content-center align-items-center';
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      color={color ?? 'primary'}
      disabled={isLoading}
      style={{ width: '8rem', height: '2.2rem' }}
      className={className ? `${initialCN} ${className}` : initialCN}
      onClick={onClick ?? (() => {})}
    >
      {isLoading ? <BarLoader color='#fff' /> : text}
    </Button>
  );
};
