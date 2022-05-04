import React, { Fragment } from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <PageTitle title='About' subtitle='Some description' icon='pe-7s-info' />
      <div className='border rounded p-4'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem dolorem esse eum
          molestiae obcaecati quam, quisquam reprehenderit sapiente sequi. Asperiores dicta eius est
          eveniet necessitatibus odio, qui. Est, repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sint unde ut. Aut culpa
          deserunt dicta eaque explicabo inventore neque nostrum odit omnis pariatur quaerat sed
          sint, tempora tempore voluptatum.
        </p>
      </div>
    </Fragment>
  );
};
