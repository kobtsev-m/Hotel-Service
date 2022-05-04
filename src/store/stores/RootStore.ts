import { ApartmentStore } from './ApartmentStore';
import { HotelStore } from './HotelStore';
import { UserStore } from './UserStore';

export class RootStore {
  userStore = new UserStore(this);
  hotelStore = new HotelStore(this);
  apartmentStore = new ApartmentStore(this);
}
