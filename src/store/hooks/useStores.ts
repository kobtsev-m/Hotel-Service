import { useContext } from 'react';
import { StoreContext } from '../provider/StoreProvider';
import { RootStore } from '../stores/root';

export const useStores = (): RootStore => useContext(StoreContext);
