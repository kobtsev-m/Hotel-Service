import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from '../../pages/about/AboutPage';
import { ApartmentsPage } from '../../pages/apartments/ApartmentsPage';
import { IndexPage } from '../../pages/index/IndexPage';
import { ServicesPage } from '../../pages/services/ServicesPage';
import { SignInPage } from '../../pages/sign-in/SignInPage';
import { SignUpPage } from '../../pages/sign-up/SignUpPage';
import { AppRoutes } from '../../routes';
import { GuestOutlet } from './GuestOutlet/GuestOutlet';

export const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.SignIn} element={<GuestOutlet />}>
          <Route index element={<SignInPage />} />
        </Route>
        <Route path={AppRoutes.SignUp} element={<GuestOutlet />}>
          <Route index element={<SignUpPage />} />
        </Route>
        <Route path={AppRoutes.Index} element={<GuestOutlet />}>
          <Route index element={<IndexPage />} />
        </Route>
        <Route path={AppRoutes.Apartments} element={<GuestOutlet />}>
          <Route index element={<ApartmentsPage />} />
        </Route>
        <Route path={AppRoutes.Services} element={<GuestOutlet />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path={AppRoutes.About} element={<GuestOutlet />}>
          <Route index element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
