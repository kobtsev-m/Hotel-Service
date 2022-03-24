import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FormikStatus } from '../../../types/utils/forms';
import { Alert, FormGroup, Input } from 'reactstrap';
import { signUp, SignUpParams } from '../../../utils/aws/auth';
import { ProgressButton } from '../../../components/Buttons/ProgressButton';

interface Props {
  callback?: (...args: any[]) => void;
}

export const SignUpForm: React.FC<Props> = ({ callback }) => {
  return (
    <Formik<SignUpParams>
      initialValues={{ email: '', password: '', name: '', surname: '' }}
      onSubmit={async (values, { setStatus }) => {
        try {
          setStatus(FormikStatus.Loading);
          const cognitoId = await signUp(values);
          callback && callback(cognitoId);
          setStatus(FormikStatus.Success);
        } catch (e) {
          setStatus(FormikStatus.Invalid);
        }
      }}
    >
      {({ status }) => (
        <Form autoComplete='off'>
          <FormGroup>
            <Input tag={Field} id='email-sign-up' name='email' placeholder='Email' type='email' />
          </FormGroup>
          <FormGroup>
            <Input
              tag={Field}
              id='pwd-sign-up'
              name='password'
              placeholder='Password'
              type='password'
            />
          </FormGroup>
          <FormGroup>
            <Input tag={Field} id='name-sign-up' name='name' placeholder='Name' type='text' />
          </FormGroup>
          <FormGroup>
            <Input
              tag={Field}
              id='surname-sign-up'
              name='surname'
              placeholder='Surname'
              type='text'
            />
          </FormGroup>
          {status === FormikStatus.Invalid && (
            <Alert color='danger'>Some error occurred on registration</Alert>
          )}
          <div className='d-flex justify-content-end'>
            <ProgressButton
              text='Submit'
              isSubmit={true}
              isLoading={status === FormikStatus.Loading}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
