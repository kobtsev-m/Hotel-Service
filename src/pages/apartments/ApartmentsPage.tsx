import React, { Fragment, useState } from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ApartmentCreate } from './ApartmentCreate/ApartmentCreate';
import { ApartmentList } from './ApartmentList/ApartmentList';

export const ApartmentsPage: React.FC = () => {
  const [isAdditionMode, setIsAdditionMode] = useState(false);
  const toggleAdditionMode = () => setIsAdditionMode((prev) => !prev);
  return (
    <Fragment>
      <PageTitle title='Apartments' subtitle='Some description' icon='pe-7s-graph' />
      {isAdditionMode ? (
        <ApartmentCreate toggleAdditionMode={toggleAdditionMode} />
      ) : (
        <ApartmentList toggleAdditionMode={toggleAdditionMode} />
      )}
    </Fragment>
  );
};
