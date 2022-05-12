import { useEffect, useState } from 'react';
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
        setIsAdmin(userStore.isAdmin());
      } catch (e) {
        setIsAuth(false);
        setIsAdmin(false);
      } finally {
        setIsCheckingAuth(false);
      }
    })();
  }, [userStore.user?.id]);

  return { isCheckingAuth, isAuth, isAdmin };
};
