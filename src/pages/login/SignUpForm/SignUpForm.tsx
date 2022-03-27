import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useStores } from '../../../store';
import { SignUpParams } from '../../../store/stores/UserStore';
import { Alert, FormGroup, Input } from 'reactstrap';
import { ProgressButton } from '../../../components/Buttons';

interface Props {
  callback?: (...args: any[]) => void;
}

export const SignUpForm: React.FC<Props> = observer(({ callback }) => {
  const { userStore } = useStores();
  return (
    <Formik<SignUpParams>
      initialValues={{ email: '', password: '', name: '', surname: '' }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setSubmitting(true);
          await userStore.signUp(values);
          callback && callback();
        } catch (e) {
          setStatus((e as Error).message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
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
          {status && <Alert color='danger'>{status}</Alert>}
          <div className='d-flex justify-content-end'>
            <ProgressButton text='Submit' isSubmit={true} isLoading={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
});
