import { makeAutoObservable, runInAction } from 'mobx';
import { Hotel } from '../../../amplify/backend/function/api/src/app/db/entities';
import { apiService } from '../../api';
import { RootStore } from './RootStore';

export class HotelStore {
  private rootStore: RootStore;

  hotels: Hotel[] = [];
  isLoading = false;
  isFetched = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async getItems() {
    try {
      this.isLoading = true;
      this.hotels = await apiService.getHotels();
      this.isFetched = true;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
