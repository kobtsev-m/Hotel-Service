import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../../components/Layout/Layout';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { AppRoutes } from '../../routes/AppRoutes';

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
    <Navigate to={AppRoutes.Login} />
  );
};
