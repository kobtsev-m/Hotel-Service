import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { Col, Row } from 'reactstrap';
import { UserRole } from '../../../amplify/backend/function/api/src/app/db/constants';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useStores } from '../../store';
import { HotelItem } from './HotelItem/HotelItem';

export const IndexPage: React.FC = observer(() => {
  const { userStore, hotelStore } = useStores();

  useEffect(() => {
    hotelStore.getItems();
  }, []);

  return (
    <Fragment>
      <PageTitle />
      {userStore.user?.role === UserRole.ADMIN && <div>I am admin</div>}
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
