import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { Layout } from '../../components/Layout/Layout';
import { AppRoutes } from '../../routes';
import { useAuthCheck } from '../hooks/useAuthCheck';

export enum OutletType {
  Guest = 'guest',
  Auth = 'auth',
  Admin = 'admin'
}

interface Props {
  type: OutletType;
}

const authorizationRoutes: string[] = [AppRoutes.SignIn, AppRoutes.SignUp];

export const RouterOutlet: React.FC<Props> = observer(({ type }) => {
  const { pathname: path } = useLocation();
  const { isCheckingAuth, isAuth, isAdmin } = useAuthCheck();

  if (isCheckingAuth) {
    return (
      <div className='layout-loading-overlay'>
        <ScaleLoader />
      </div>
    );
  }

  if (
    (type === OutletType.Admin && isAdmin) ||
    (type === OutletType.Auth && isAuth) ||
    (type === OutletType.Guest && !authorizationRoutes.includes(path))
  ) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else if (type === OutletType.Admin && !isAdmin) {
    return <Navigate to={AppRoutes.Index} />;
  } else if (type === OutletType.Auth && !isAuth) {
    return <Navigate to={AppRoutes.SignUp} />;
  } else if (type === OutletType.Guest && authorizationRoutes.includes(path) && isAuth) {
    return <Navigate to={AppRoutes.Index} />;
  } else {
    return <Outlet />;
  }
});
