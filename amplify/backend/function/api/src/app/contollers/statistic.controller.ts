import db from '../db';
import { Apartment, Hotel } from '../db/entities';
import { attachUser, checkAdmin } from '../middlewares';
import { ApiRoutes, BaseController, StatisticGetRes } from '../types';

export class StatisticController extends BaseController {
  initRoutes() {
    this.app.get(ApiRoutes.Statistic, attachUser, checkAdmin, this.getItem);
  }

  private async getItem(_, res: StatisticGetRes) {
    await db.connect();
    const hotelsApartmentsCount = await Apartment.createQueryBuilder('apartment')
      .select('apartment.hotelId')
      .addSelect('SUM(apartment.availableCount)')
      .groupBy('apartment.hotelId')
      .getRawMany();
    const hotelsWithAtLeastTenApartments = await Apartment.createQueryBuilder('apartment')
      .select('apartment.hotelId')
      .addSelect('SUM(apartment.availableCount)')
      .groupBy('apartment.hotelId')
      .having('SUM(apartment.availableCount) >= 10')
      .getRawMany();
    const servicesForHotels = await Hotel.createQueryBuilder('hotel')
      .innerJoinAndSelect('hotel.services', 'service')
      .loadRelationCountAndMap('hotel.servicesCount', 'hotel.services')
      .getManyAndCount();
    // const apartmentsWithSpa = await Apartment.createQueryBuilder('apartment')
    //   .select('apartment.id')
    //   .addSelect('apartment.name')
    //   .innerJoin(Hotel, 'hotel', 'hotel.id = apartment.hotelId')
    //   .where('hotel.services');

    const serviceCountForHotels = servicesForHotels[0].map((hotel: any) => ({
      id: hotel.id,
      servicesCount: hotel!.servicesCount
    }));

    console.log(hotelsApartmentsCount);
    console.log(hotelsWithAtLeastTenApartments);
    console.log(serviceCountForHotels);

    res.json({});
  }
}
