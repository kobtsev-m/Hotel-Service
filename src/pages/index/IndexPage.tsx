import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import { Col, Row } from 'reactstrap';
import { useStores } from '../../store';
import { HotelItem } from './HotelItem/HotelItem';

export const IndexPage: React.FC = observer(() => {
  const { hotelStore } = useStores();

  useEffect(() => {
    hotelStore.getItems();
  }, []);

  return (
    <Row>
      {hotelStore.isLoading ? (
        <FadeLoader />
      ) : (
        <Fragment>
          {hotelStore.hotels.map((hotel, i) => (
            <Col key={i} lg='4' sm='6'>
              <HotelItem hotel={hotel} />
            </Col>
          ))}
        </Fragment>
      )}
    </Row>
  );
});
