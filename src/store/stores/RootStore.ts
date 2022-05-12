import { ApartmentStore } from './ApartmentStore';
import { HotelStore } from './HotelStore';
import { StatisticStore } from './StatisticStore';
import { UserStore } from './UserStore';

export class RootStore {
  userStore = new UserStore(this);
  hotelStore = new HotelStore(this);
  apartmentStore = new ApartmentStore(this);
  statisticStore = new StatisticStore(this);
}
