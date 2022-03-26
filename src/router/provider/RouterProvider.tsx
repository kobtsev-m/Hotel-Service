import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPage } from '../../pages/index/index-page';
import { LoginPage } from '../../pages/login/login-page';
import { RouteType } from '../routes';
import { PrivateOutlet } from './PrivateOutlet';

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteType.Index} element={<PrivateOutlet />}>
          <Route index element={<IndexPage />} />
        </Route>
        <Route path={RouteType.Login} element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
