import { useEffect, useState } from 'react';
import { UserRole } from '../../../amplify/backend/function/api/src/app/db/constants';
import apiProvider from '../../api/provider/ApiProvider';
import { useStores } from '../../store';

export const useAuthCheck = () => {
  const { userStore } = useStores();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const headers = apiProvider.getHeaders();

  useEffect(() => {
    if (headers['Authorization']) {
      return;
    }
    (async () => {
      try {
        await userStore.authUserByJWT();
        setIsAuth(true);
        setIsAdmin(userStore.user?.role === UserRole.ADMIN);
      } catch (e) {
      } finally {
        setIsCheckingAuth(false);
      }
    })();
  }, [headers]);

  return { isCheckingAuth, isAuth, isAdmin };
};
