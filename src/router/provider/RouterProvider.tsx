import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPage } from '../../pages/index/IndexPage';
import { LoginPage } from '../../pages/login/LoginPage';
import { RoutesEnum } from '../routes/RoutesEnum';
import { PrivateOutlet } from './PrivateOutlet/PrivateOutlet';

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutesEnum.Index} element={<PrivateOutlet />}>
          <Route index element={<IndexPage />} />
        </Route>
        <Route path={RoutesEnum.Login} element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
