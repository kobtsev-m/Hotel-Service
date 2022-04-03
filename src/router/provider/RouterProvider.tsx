import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPage } from '../../pages/index/IndexPage';
import { LoginPage } from '../../pages/login/LoginPage';
import { AppRoutes } from '../routes/AppRoutes';
import { PrivateOutlet } from './PrivateOutlet/PrivateOutlet';

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route path={AppRoutes.Index} element={<PrivateOutlet />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
