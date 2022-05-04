import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const ServicesPage: React.FC = () => {
  return (
    <Fragment>
      <PageTitle title='Services' subtitle='Some description' icon='pe-7s-gleam' />
      <Row>Services</Row>
    </Fragment>
  );
};
