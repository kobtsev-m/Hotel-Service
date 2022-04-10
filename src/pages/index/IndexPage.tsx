import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useStores } from '../../store';
import { HotelItem } from './HotelItem/HotelItem';

export const IndexPage: React.FC = observer(() => {
  const { hotelStore } = useStores();

  useEffect(() => {
    if (hotelStore.hotels.length) {
      return;
    }
    hotelStore.getItems();
  }, []);

  return (
    <Fragment>
      <PageTitle title='Hotels' subtitle='Some description' />
      {hotelStore.isLoading ? (
        <Row className='w-100 justify-content-center my-4'>
          <BarLoader />
        </Row>
      ) : (
        <Row>
          {hotelStore.hotels.map((hotel, i) => (
            <Col key={i} lg='4' sm='6'>
              <HotelItem hotel={hotel} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
});
