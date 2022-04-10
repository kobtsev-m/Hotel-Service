import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <PageTitle title='About' subtitle='Some description' />
      <Row>About</Row>
    </Fragment>
  );
};
