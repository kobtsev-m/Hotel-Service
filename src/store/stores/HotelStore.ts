import { makeAutoObservable, runInAction } from 'mobx';
import { Hotel } from '../../../amplify/backend/function/api/src/app/db/entities';
import { apiService } from '../../api';
import { RootStore } from './RootStore';

export class HotelStore {
  private rootStore: RootStore;

  hotels: Hotel[] = [];
  isLoading: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async getItems() {
    try {
      this.isLoading = true;

      const hotels = await apiService.getHotels();

      runInAction(() => {
        this.hotels = hotels;
        this.isLoading = false;
      });
    } catch (e) {
      console.log(e);
    }
  }
}
