import { observer } from 'mobx-react-lite';
import React, { Fragment, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Apartment } from '../../../../amplify/backend/function/api/src/app/db/entities';
import {
  IApartmentPartial,
  IApartment
} from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';
import { ApartmentForm } from '../ApartmentForm/ApartmentForm';

interface Props {
  apartment: IApartment;
  isUserAdmin: boolean;
}

export const ApartmentItem: React.FC<Props> = observer(({ apartment, isUserAdmin }) => {
  const { apartmentStore } = useStores();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const updateItem = async (data: IApartmentPartial) => {
    setIsUpdating(true);
    await apartmentStore.updateItem(apartment['id'], data);
    setIsUpdating(false);
    setIsEditMode(false);
  };

  const deleteItem = async () => {
    setIsDeleting(true);
    await apartmentStore.deleteItem(apartment['id']);
    setIsDeleting(false);
  };

  const getApartmentValues = (apartment: IApartment) => {
    const { hotel } = apartment;
    return { ...apartment, hotelId: hotel.id };
  };

  return (
    <Card className='main-card mb-3'>
      <CardHeader>
        <i className='header-icon pe-7s-photo'> </i>
        {isEditMode ? 'edit' : apartment['name']}
        {isUserAdmin && (
          <div className='btn-actions-pane-right actions-icon-btn'>
            <Button
              color='secondary'
              size='sm'
              className='mr-1'
              disabled={isUpdating || isDeleting}
              onClick={() => setIsEditMode((prev) => !prev)}
            >
              <i className='pe-7s-note' />
            </Button>
            <Button
              color='danger'
              size='sm'
              disabled={isUpdating || isDeleting}
              onClick={deleteItem}
            >
              <i className='pe-7s-trash' />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardBody>
        {isEditMode ? (
          <ApartmentForm
            id={apartment.id}
            initialValues={getApartmentValues(apartment)}
            onSubmit={updateItem}
          />
        ) : (
          <Fragment>
            <h6>
              <b>Hotel:</b> {apartment.hotel.name}, {apartment.hotel.stars}{' '}
              <i className='pe-7s-star' />
            </h6>
            <h6>
              <b>Price:</b> {apartment.pricePerDay}$
            </h6>
            <h6>
              <b>Rooms:</b> {apartment.roomsTotal}
            </h6>
            <h6>
              <b>Floor:</b> {apartment.floor}
            </h6>
            <hr className='my-4' />
            <p>{apartment.description}</p>
          </Fragment>
        )}
      </CardBody>
      <CardFooter>
        {isEditMode ? (
          <div className='w-100 d-flex align-items-center justify-content-end'>
            <Button
              type='button'
              className='btn-wide btn-shadow mr-2'
              color='secondary'
              onClick={() => setIsEditMode(false)}
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='btn-wide btn-shadow'
              color='success'
              form={`apartment-edit-form-${apartment.id}`}
              disabled={isUpdating}
            >
              Save
            </Button>
          </div>
        ) : (
          <div className='w-100 d-flex align-items-center justify-content-between'>
            <span className='display-6'>
              <b>Available:</b> {apartment.availableCount}
            </span>
            <Button className='btn-wide shadow-sm' color='outline-primary'>
              Open
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
});
