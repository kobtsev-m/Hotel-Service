import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../../components/Layout/Layout';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { AppRoutes } from '../../../routes';

export const AdminOutlet: React.FC = () => {
  const { isCheckingAuth, isAdmin } = useAuthCheck();

  if (isCheckingAuth) {
    return (
      <div className='layout-loading-overlay'>
        <ScaleLoader />
      </div>
    );
  }

  return isAdmin ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={AppRoutes.Index} />
  );
};
