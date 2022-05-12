import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/about/AboutPage';
import { ApartmentsPage } from '../../pages/apartments/ApartmentsPage';
import { IndexPage } from '../../pages/index/IndexPage';
import { ServicesPage } from '../../pages/services/ServicesPage';
import { SignInPage } from '../../pages/sign-in/SignInPage';
import { SignUpPage } from '../../pages/sign-up/SignUpPage';
import { StatisticPage } from '../../pages/statistic/StatisticPage';
import { AppRoutes } from '../../routes';
import { RouterOutlet, OutletType } from '../outlet/RouterOutlet';

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.SignIn} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<SignInPage />} />
        </Route>
        <Route path={AppRoutes.SignUp} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<SignUpPage />} />
        </Route>
        <Route path={AppRoutes.Index} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<IndexPage />} />
        </Route>
        <Route path={AppRoutes.Apartments} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<ApartmentsPage />} />
        </Route>
        <Route path={AppRoutes.Services} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path={AppRoutes.About} element={<RouterOutlet type={OutletType.Guest} />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path={AppRoutes.Statistic} element={<RouterOutlet type={OutletType.Admin} />}>
          <Route index element={<StatisticPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
