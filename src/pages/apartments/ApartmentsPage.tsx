import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const ApartmentsPage: React.FC = () => {
  return (
    <Fragment>
      <PageTitle title='Apartments' subtitle='Some description' />
      <Row>Apartments</Row>
    </Fragment>
  );
};
