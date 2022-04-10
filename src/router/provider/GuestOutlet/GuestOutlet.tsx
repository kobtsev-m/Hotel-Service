import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../../components/Layout/Layout';
import { AppRoutes } from '../../../routes';
import { useAuthCheck } from '../../hooks/useAuthCheck';

export const GuestOutlet: React.FC = () => {
  const { isCheckingAuth, isAuth } = useAuthCheck();
  const { pathname: path } = useLocation();

  if (isCheckingAuth) {
    return (
      <div className='layout-loading-overlay'>
        <ScaleLoader />
      </div>
    );
  }

  return (path === AppRoutes.SignIn || path === AppRoutes.SignUp) && isAuth ? (
    <Navigate to={AppRoutes.Index} />
  ) : path === AppRoutes.SignIn || path === AppRoutes.SignUp ? (
    <Outlet />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};
