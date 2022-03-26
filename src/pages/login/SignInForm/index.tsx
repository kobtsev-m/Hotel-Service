import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useStores } from '../../../store';
import { SignInParams } from '../../../store/stores/user';
import { Alert, FormGroup, Input } from 'reactstrap';
import { ProgressButton } from '../../../components/Buttons/ProgressButton';

interface Props {
  callback?: (...args: any[]) => void;
}

export const SignInForm: React.FC<Props> = observer(({ callback }) => {
  const { userStore } = useStores();
  return (
    <Formik<SignInParams>
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setSubmitting(true);
          await userStore.signIn(values);
          callback && callback();
        } catch (e) {
          setStatus((e as Error).message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
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
          {status && <Alert color='danger'>{status}</Alert>}
          <div className='d-flex justify-content-end'>
            <ProgressButton text='Submit' isSubmit={true} isLoading={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
});
