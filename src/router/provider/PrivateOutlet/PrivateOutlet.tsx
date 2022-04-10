import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../../components/Layout/Layout';
import { AppRoutes } from '../../../routes';
import { useAuthCheck } from '../../hooks/useAuthCheck';

export const PrivateOutlet: React.FC = () => {
  const { isCheckingAuth, isAuth } = useAuthCheck();

  if (isCheckingAuth) {
    return (
      <div className='layout-loading-overlay'>
        <ScaleLoader />
      </div>
    );
  }

  return isAuth ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={AppRoutes.SignIn} />
  );
};
