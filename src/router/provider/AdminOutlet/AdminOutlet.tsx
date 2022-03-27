import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../../components/Layout/Layout';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { RoutesEnum } from '../../routes/RoutesEnum';

export const AdminOutlet: React.FC = () => {
  const { isCheckingAuth, isAuth, isAdmin } = useAuthCheck();

  if (isCheckingAuth) {
    return (
      <div className='layout-loading-overlay'>
        <ScaleLoader />
      </div>
    );
  }

  return isAuth && isAdmin ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={RoutesEnum.Login} />
  );
};
