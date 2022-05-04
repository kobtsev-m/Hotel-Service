import { makeAutoObservable, runInAction } from 'mobx';
import { toast } from 'react-toastify';
import { Apartment } from '../../../amplify/backend/function/api/src/app/db/entities';
import {
  ApartmentPartial,
  ApartmentRequired
} from '../../../amplify/backend/function/api/src/app/types';
import { apiService } from '../../api';
import { createProgressToast } from '../../components/Toasts';
import { RootStore } from './RootStore';

export class ApartmentStore {
  private rootStore: RootStore;

  apartments: Apartment[] = [];
  isLoading = false;
  isFetched = false;

  itemsPerPage = 4;
  totalPages = 0;
  page = 0;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async getItems(page: number) {
    try {
      this.isLoading = true;
      const [apartments, total] = await apiService.getApartments(
        page * this.itemsPerPage,
        this.itemsPerPage
      );
      runInAction(() => {
        this.apartments = apartments;
        this.isFetched = true;
        this.totalPages = Math.ceil(total / this.itemsPerPage);
        this.page = page;
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async createItem(data: ApartmentRequired) {
    const toastId = createProgressToast();
    try {
      const apartment = await apiService.createApartment(data);
      runInAction(() => {
        if (this.apartments.length < this.itemsPerPage) {
          this.apartments.push(apartment);
        }
      });
    } catch (e) {
      console.log(e);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async updateItem(id: string, data: ApartmentPartial) {
    const toastId = createProgressToast();
    try {
      const apartment = await apiService.updateApartment(id, data);
      runInAction(() => {
        const index = this.apartments.findIndex((a) => a.id === id);
        index !== -1 && (this.apartments[index] = apartment);
      });
    } catch (e) {
      console.log(e);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async deleteItem(id: string) {
    const toastId = createProgressToast();
    try {
      await apiService.deleteApartment(id);
    } catch (e) {
      console.log(e);
    } finally {
      toast.dismiss(toastId);
      setTimeout(() => this.getItems(this.page), 500);
    }
  }
}
