import { makeAutoObservable, runInAction } from 'mobx';
import { IStatistic } from '../../../amplify/backend/function/api/src/app/types';
import { apiService } from '../../api';
import { RootStore } from './RootStore';

export class StatisticStore {
  private rootStore: RootStore;

  statistic: IStatistic | null = null;
  isLoading = false;
  isFetched = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async getItem() {
    try {
      this.isLoading = true;
      const statistic = await apiService.getStatistic();

      runInAction(() => {
        this.statistic = statistic;
        this.isFetched = true;
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
