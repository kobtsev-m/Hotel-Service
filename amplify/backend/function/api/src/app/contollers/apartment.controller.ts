import { Apartment, Hotel } from '../db/entities';
import { attachUser, checkAdmin } from '../middlewares';
import {
  ApartmentDelReq,
  ApartmentDelRes,
  ApartmentGetReq,
  ApartmentGetRes,
  ApartmentPostReq,
  ApartmentPostRes,
  ApartmentPutReq,
  ApartmentPutRes,
  ApiRoutes,
  BaseController
} from '../types';

export class ApartmentController extends BaseController {
  initRoutes() {
    this.app.get(ApiRoutes.Apartments, this.getItems);
    this.app.post(ApiRoutes.Apartments, attachUser, checkAdmin, this.createItem);
    this.app.put(ApiRoutes.ApartmentItem, attachUser, checkAdmin, this.updateItem);
    this.app.delete(ApiRoutes.ApartmentItem, attachUser, checkAdmin, this.deleteItem);
  }

  private async getItems(req: ApartmentGetReq, res: ApartmentGetRes) {
    const { offset, limit } = req.query;
    const [apartments, total] = await Apartment.findAndCount({
      skip: offset,
      take: limit,
      relations: ['hotel']
    });
    res.json([apartments, total]);
  }

  private async createItem(req: ApartmentPostReq, res: ApartmentPostRes) {
    const { hotelId, ...apartmentData } = req.body;
    const apartment = Apartment.create(apartmentData);
    apartment.hotel = await Hotel.findOne(hotelId);
    await apartment.save();
    res.json(apartment);
  }

  private async updateItem(req: ApartmentPutReq, res: ApartmentPutRes) {
    const apartment = await Apartment.findOne(req.params.id);
    const { hotelId } = req.body;
    if (hotelId) {
      apartment.hotel = await Hotel.findOne(req.body.hotelId);
    }
    Object.entries(req.body).forEach(([key, value]) => {
      apartment[key] = value;
    });
    await apartment.save();
    res.json(apartment);
  }

  private async deleteItem(req: ApartmentDelReq, res: ApartmentDelRes) {
    await Apartment.delete(req.params.id);
    res.json(true);
  }
}
