import { Form, Formik, FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { DropdownList } from 'react-widgets';
import { Button, Card, CardBody, FormGroup } from 'reactstrap';
import {
  ApartmentField,
  apartmentFields
} from '../../../../amplify/backend/function/api/src/app/types';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { useStores } from '../../../store';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls='rc-slider-tooltip'
      overlay={value}
      visible={dragging}
      placement='top'
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

interface ApartmentFiltersParams {
  orderBy: [ApartmentField, 'ASC' | 'DESC'];
  priceRange: [number, number];
}

const minPriceRange = 0;
const maxPriceRange = 500;

export const ApartmentFilters: React.FC = observer(() => {
  const { apartmentStore } = useStores();
  const formRef = useRef<FormikProps<ApartmentFiltersParams>>(null);

  const clearFilters = () => {
    apartmentStore.getItems(0, null, null);
    formRef.current?.resetForm();
  };

  return (
    <Formik<ApartmentFiltersParams>
      innerRef={formRef}
      initialValues={{
        orderBy: apartmentStore.orderBy ?? ['name', 'ASC'],
        priceRange: apartmentStore.priceRange ?? [minPriceRange, maxPriceRange]
      }}
      onSubmit={(values) => {
        apartmentStore.getItems(0, ...Object.values(values));
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Card className='mt-3'>
            <CardBody>
              <FormGroup className='d-flex align-items-center'>
                <div className='text-nowrap' style={{ width: '8rem' }}>
                  Order by:
                </div>
                <div className='d-flex w-100'>
                  <DropdownList
                    className='mr-2'
                    data={apartmentFields}
                    value={values.orderBy[0]}
                    onChange={(value) => setFieldValue('orderBy', [value, values.orderBy[1]])}
                  ></DropdownList>
                  <DropdownList
                    data={['ASC', 'DESC']}
                    value={values.orderBy[1]}
                    onChange={(value) => setFieldValue('orderBy', [values.orderBy[0], value])}
                  ></DropdownList>
                </div>
              </FormGroup>
              <FormGroup className='d-flex align-items-center'>
                <div className='text-nowrap' style={{ width: '8rem' }}>
                  Price:
                </div>
                <div className='d-flex w-100'>
                  <Range
                    handle={handle}
                    min={minPriceRange}
                    max={maxPriceRange}
                    value={values.priceRange}
                    onChange={(range) => setFieldValue('priceRange', range)}
                  />
                </div>
              </FormGroup>
              <div className='d-flex justify-content-end'>
                <Button
                  type='button'
                  color='danger'
                  className='btn-sm btn-wide btn-shadow mr-2'
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
                <Button type='submit' color='success' className='btn-sm btn-wide btn-shadow'>
                  Apply
                </Button>
              </div>
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  );
});
