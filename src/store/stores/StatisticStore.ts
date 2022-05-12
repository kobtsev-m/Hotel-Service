import { makeAutoObservable } from 'mobx';
import { apiService } from '../../api';
import { RootStore } from './RootStore';

export class StatisticStore {
  private rootStore: RootStore;

  statistic = null;
  isLoading = false;
  isFetch = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async getItem() {
    try {
      this.isLoading = true;
      await apiService.getStatistic();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
