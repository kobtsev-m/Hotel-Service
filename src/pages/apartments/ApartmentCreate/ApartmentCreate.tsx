import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button } from 'reactstrap';
import { ApartmentRequired } from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';
import { ApartmentForm } from '../ApartmentForm/ApartmentForm';

interface Props {
  toggleAdditionMode: () => void;
}

export const ApartmentCreate: React.FC<Props> = observer(({ toggleAdditionMode }) => {
  const { apartmentStore } = useStores();

  const createItem = async (data: ApartmentRequired) => {
    await apartmentStore.createItem(data);
    toggleAdditionMode();
  };

  const getInitialValues = () => {
    return {
      name: '',
      description: '',
      pricePerDay: 10,
      availableCount: 1,
      roomsTotal: 1,
      floor: 1,
      hotelId: ''
    };
  };

  return (
    <div className='mb-4'>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          <h5>New apartment:</h5>
        </div>
        <div className='flex-grow-0'>
          <Button
            color='secondary'
            className='d-flex align-items-center'
            onClick={toggleAdditionMode}
          >
            Cancel
            <i className='pe-7s-close ml-1' />
          </Button>
        </div>
      </div>
      <hr />
      <ApartmentForm id='new' initialValues={getInitialValues()} onSubmit={createItem} />
      <hr />
      <div className='d-flex justify-content-end'>
        <Button
          type='submit'
          color='success'
          className='btn-wide btn-shadow'
          form='apartment-edit-form-new'
        >
          Create
        </Button>
      </div>
    </div>
  );
});
