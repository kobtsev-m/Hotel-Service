import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FormikStatus } from '../../../types/utils/forms';
import { Alert, Button, FormGroup, Input, Spinner } from 'reactstrap';
import { signIn, SignInParams } from '../../../utils/aws/auth';

interface Props {
  callback?: (...args: any[]) => void;
}

export const SignInForm: React.FC<Props> = ({ callback }) => {
  return (
    <Formik<SignInParams>
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setStatus }) => {
        try {
          setStatus(FormikStatus.Loading);
          const token = await signIn(values);
          callback && callback(token);
          setStatus(FormikStatus.Success);
        } catch (e) {
          setStatus(FormikStatus.Invalid);
        }
      }}
    >
      {({ status }) => (
        <Form>
          <FormGroup>
            <Input tag={Field} id='email-sign-in' name='email' placeholder='Email' type='email' />
          </FormGroup>
          <FormGroup>
            <Input
              tag={Field}
              id='password-sign-in'
              name='password'
              placeholder='Password'
              type='password'
            />
          </FormGroup>
          {status === FormikStatus.Invalid && (
            <Alert color='danger'>Incorrect email or password</Alert>
          )}
          <div className='d-flex justify-content-end'>
            <Button
              type='submit'
              color='primary'
              disabled={status === FormikStatus.Loading}
              style={{ width: '8rem' }}
            >
              {status === FormikStatus.Loading ? <Spinner size='sm' /> : 'Submit'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
