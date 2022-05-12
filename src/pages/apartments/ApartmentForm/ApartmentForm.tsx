import { Field, Form, Formik, FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { DropdownList } from 'react-widgets';
import { FormGroup, Input, Label } from 'reactstrap';
import { IApartmentRequired } from '../../../../amplify/backend/function/api/src/app/types';
import { useStores } from '../../../store';

interface Props {
  id: string;
  initialValues: IApartmentRequired;
  onSubmit: (values: IApartmentRequired) => void;
}

export const ApartmentForm: React.FC<Props> = observer(({ id, initialValues, onSubmit }) => {
  const { hotelStore } = useStores();
  const formRef = useRef<FormikProps<IApartmentRequired>>(null);

  useEffect(() => {
    (async () => {
      if (!hotelStore.isFetched) {
        await hotelStore.getItems();
      }
      if (formRef.current) {
        formRef.current.initialValues.hotelId =
          formRef.current.initialValues.hotelId || hotelStore.hotels[0]?.id;
        formRef.current.resetForm();
      }
    })();
  }, []);

  return (
    <Formik<IApartmentRequired>
      innerRef={formRef}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form id={`apartment-edit-form-${id}`} autoComplete='off'>
          <FormGroup>
            <Label>Name</Label>
            <Input tag={Field} id='name-apartment' name='name' type='text' required={true} />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              tag={(args) => Field({ ...args, as: 'textarea' })}
              id='description-apartment'
              name='description'
              type='textarea'
              required={true}
              rows={3}
            />
          </FormGroup>
          <FormGroup>
            <Label>Price per day ($)</Label>
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
              busy={!values.hotelId}
              data={hotelStore.hotels}
              dataKey='id'
              textField='name'
              value={values.hotelId}
              onChange={(hotel) => setFieldValue('hotelId', hotel.id)}
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
});
