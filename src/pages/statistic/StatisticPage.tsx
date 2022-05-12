import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useStores } from '../../store';

export const StatisticPage: React.FC = observer(() => {
  const { statisticStore } = useStores();

  useEffect(() => {
    if (statisticStore.isFetched) {
      return;
    }
    statisticStore.getItem();
  }, []);

  return (
    <Fragment>
      <PageTitle title='Statistic' subtitle='Some description' icon='pe-7s-display1' />
      {statisticStore.isLoading ? (
        <div className='w-100 d-flex justify-content-center my-5'>
          <BarLoader />
        </div>
      ) : statisticStore.statistic ? (
        <Fragment>
          <h5 className='mb-3'>Hotels apartments count:</h5>
          {statisticStore.statistic.hotelsApartmentsCount.map((a) => (
            <div>
              <b>{a.hotelId}:</b> {a.sum}
            </div>
          ))}
          <hr />
          <h5 className='mb-3'>Hotels with at least 10 apartments count:</h5>
          {statisticStore.statistic.hotelsWithAtLeastTenApartments.map((a) => (
            <div>
              <b>{a.hotelId}:</b> {a.sum}
            </div>
          ))}
          <hr />
          <h5 className='mb-3'>Hotel services count:</h5>
          {statisticStore.statistic.serviceCountForHotels.map((a) => (
            <div>
              <b>{a.id}:</b> {a.servicesCount}
            </div>
          ))}
        </Fragment>
      ) : null}
    </Fragment>
  );
});
