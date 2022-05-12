import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { IApartmentRequired } from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';
import { ApartmentForm } from '../ApartmentForm/ApartmentForm';

interface Props {
  toggleAdditionMode: () => void;
}

export const ApartmentCreate: React.FC<Props> = observer(({ toggleAdditionMode }) => {
  const { apartmentStore } = useStores();
  const [isCreating, setIsCreating] = useState(false);

  const createItem = async (data: IApartmentRequired) => {
    setIsCreating(true);
    await apartmentStore.createItem(data);
    await apartmentStore.getItems(0);
    setIsCreating(false);
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
          disabled={isCreating}
        >
          Create
        </Button>
      </div>
    </div>
  );
});
