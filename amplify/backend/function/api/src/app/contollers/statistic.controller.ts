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

    // Group By
    const hotelsApartmentsCount = await Apartment.createQueryBuilder('apartment')
      .select('apartment.hotelId')
      .addSelect('SUM(apartment.availableCount)')
      .groupBy('apartment.hotelId')
      .getRawMany();

    // Having
    const hotelsWithAtLeastTenApartments = await Apartment.createQueryBuilder('apartment')
      .select('apartment.hotelId')
      .addSelect('SUM(apartment.availableCount)')
      .groupBy('apartment.hotelId')
      .having('SUM(apartment.availableCount) >= 10')
      .getRawMany();

    // With SubQuery
    const servicesForHotels = await Hotel.createQueryBuilder('hotel')
      .innerJoinAndSelect('hotel.services', 'service')
      .loadRelationCountAndMap('hotel.servicesCount', 'hotel.services')
      .getManyAndCount();

    const serviceCountForHotels = servicesForHotels[0].map((hotel: any) => ({
      id: hotel.id,
      servicesCount: hotel!.servicesCount
    }));

    res.json({
      hotelsApartmentsCount,
      hotelsWithAtLeastTenApartments,
      serviceCountForHotels
    });
  }
}
