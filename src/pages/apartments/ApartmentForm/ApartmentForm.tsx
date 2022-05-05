import { Field, Form, Formik, FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { DropdownList } from 'react-widgets';
import { FormGroup, Input, Label } from 'reactstrap';
import { ApartmentRequired } from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';

interface Props {
  id: string;
  initialValues: ApartmentRequired;
  onSubmit: (values: ApartmentRequired) => void;
}

export const ApartmentForm: React.FC<Props> = observer(({ id, initialValues, onSubmit }) => {
  const { hotelStore } = useStores();
  const formRef = useRef<FormikProps<ApartmentRequired>>(null);

  useEffect(() => {
    if (hotelStore.isFetched) {
      return;
    }
    (async () => {
      await hotelStore.getItems();
      formRef.current?.resetForm();
    })();
  }, []);

  return (
    <Formik<ApartmentRequired> innerRef={formRef} initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue }) => (
        <Form id={`apartment-edit-form-${id}`} autoComplete='off'>
          <FormGroup>
            <Label>Name</Label>
            <Input tag={Field} id='name-apartment' name='name' type='text' required={true} />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              tag={Field}
              id='description-apartment'
              name='description'
              type='textarea'
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price per day ($)</Label>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos harum natus nihil obcaecati
            <Input
              tag={Field}
              id='pricePerDay-apartment'
              name='pricePerDay'
              type='number'
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Rooms total</Label>
            <Input
              tag={Field}
              id='roomsTotal-apartment'
              name='roomsTotal'
              type='number'
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Floor</Label>
            <Input tag={Field} id='floor-apartment' name='floor' type='number' required={true} />
          </FormGroup>
          <FormGroup>
            <Label>Available count</Label>
            <Input
              tag={Field}
              id='availableCount-apartment'
              name='availableCount'
              type='number'
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label>Hotel</Label>
            <DropdownList
              dropUp
              busy={hotelStore.isLoading}
              data={hotelStore.hotels}
              dataKey='id'
              textField='name'
              value={values.hotelId || hotelStore.hotels[0]?.id}
              onChange={(hotel) => setFieldValue('hotelId', hotel['id'])}
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
});
