import { useContext } from 'react';
import { StoreContext } from '../provider/StoreProvider';
import { RootStore } from '../stores/RootStore';

export const useStores = (): RootStore => useContext(StoreContext);
