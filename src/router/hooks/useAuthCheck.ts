import { useEffect, useState } from 'react';
import { UserRole } from '../../../amplify/backend/function/api/src/app/db/constants';
import { useStores } from '../../store';

export const useAuthCheck = () => {
  const { userStore } = useStores();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
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
  }, []);

  return { isCheckingAuth, isAuth, isAdmin };
};
