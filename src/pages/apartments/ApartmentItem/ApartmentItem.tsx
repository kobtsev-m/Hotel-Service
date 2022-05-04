import { observer } from 'mobx-react-lite';
import React, { Fragment, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Apartment } from '../../../../amplify/backend/function/api/src/app/db/entities';
import { ApartmentPartial } from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';
import { ApartmentForm } from '../ApartmentForm/ApartmentForm';

interface Props {
  apartment: Apartment;
  isUserAdmin: boolean;
}

export const ApartmentItem: React.FC<Props> = observer(({ apartment, isUserAdmin }) => {
  const { apartmentStore } = useStores();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const updateItem = async (data: ApartmentPartial) => {
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

  const getApartmentValues = (apartment: Apartment) => {
    return {
      name: apartment['name'],
      description: apartment['description'],
      pricePerDay: apartment['pricePerDay'],
      availableCount: apartment['availableCount'],
      roomsTotal: apartment['roomsTotal'],
      floor: apartment['floor'],
      hotelId: apartment['hotel']['id']
    };
  };

  return (
    <Card className='main-card mb-3'>
      <CardHeader>
        <i className='header-icon pe-7s-home icon-gradient bg-happy-itmeo'> </i>
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
            id={apartment['id']}
            initialValues={getApartmentValues(apartment)}
            onSubmit={updateItem}
          />
        ) : (
          <Fragment>
            <h6>
              <b>Hotel:</b> {apartment['hotel']['name']}, {apartment['hotel']['stars']}{' '}
              <i className='pe-7s-star' />
            </h6>
            <h6>
              <b>Price:</b> {apartment['pricePerDay']}$
            </h6>
            <h6>
              <b>Floor:</b> {apartment['floor']}
            </h6>
            <p>{apartment['description']}</p>
          </Fragment>
        )}
      </CardBody>
      <CardFooter className='d-block text-right'>
        {isEditMode ? (
          <Fragment>
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
              form={`apartment-edit-form-${apartment['id']}`}
              disabled={isUpdating}
            >
              Save
            </Button>
          </Fragment>
        ) : (
          <Button className='btn-wide shadow-sm' color='outline-primary'>
            Open
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});
