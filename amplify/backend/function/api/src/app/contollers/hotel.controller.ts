import { Hotel } from '../db/entities';
import { BaseController, ApiRoutes, HotelsGetRes } from '../types';

export class HotelController extends BaseController {
  initRoutes() {
    this.app.get(ApiRoutes.Hotels, this.getItems);
  }

  private async getItems(_, res: HotelsGetRes) {
    const hotels = await Hotel.find({
      order: { stars: 'DESC' },
      relations: ['services']
    });
    res.json(hotels);
  }
}
