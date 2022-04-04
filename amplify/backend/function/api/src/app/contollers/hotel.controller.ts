import { ApiRoutes } from '../api-routes';
import { Hotel } from '../db/entities';
import { HotelsGetRes } from '../types/requests';
import { BaseController } from '../types/utils/controllers';

export class HotelController extends BaseController {
  initRoutes() {
    this.app.get(ApiRoutes.Hotels, this.getItems);
  }

  private async getItems(_, res: HotelsGetRes) {
    const hotels = await Hotel.find({ relations: ['services'] });
    res.json(hotels);
  }
}
