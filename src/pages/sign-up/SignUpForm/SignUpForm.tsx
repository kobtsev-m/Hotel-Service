import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppRoutes } from '../../../routes';
import { useStores } from '../../../store';
import { SignUpParams } from '../../../store/stores/UserStore';
import { Alert, Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ProgressButton } from '../../../components/Buttons';

interface FormParams extends SignUpParams {
  passwordRepeat: string;
  terms: boolean;
}

export const SignUpForm: React.FC = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();

  const showSuccessToast = () => {
    toast('Successfully created new user!', {
      type: toast.TYPE.SUCCESS,
      icon: <i className='nav-link-icon pe-7s-user'> </i>,
      onClick: () => navigate(AppRoutes.SignIn)
    });
  };

  return (
    <Formik<FormParams>
      initialValues={{
        email: '',
        name: '',
        surname: '',
        password: '',
        passwordRepeat: '',
        terms: false
      }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        const { password, passwordRepeat, terms, ...restValues } = values;
        if (password !== passwordRepeat) {
          setStatus('Passwords do not match');
          return;
        }
        if (!terms) {
          setStatus('Terms and conditions are required for accepting');
          return;
        }
        try {
          setSubmitting(true);
          await userStore.signUp({ password, ...restValues });
          showSuccessToast();
        } catch (e) {
          setStatus((e as Error).message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form autoComplete='off'>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for='email-sign-up'>
                  <span className='text-danger'>*</span> Email
                </Label>
                <Input
                  tag={Field}
                  type='email'
                  name='email'
                  id='email-sign-up'
                  placeholder='email@example.com'
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='name-sign-up'>Name</Label>
                <Input tag={Field} type='text' name='name' id='name-sign-up' placeholder='John' />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='surname-sign-up'>Surname</Label>
                <Input
                  tag={Field}
                  type='text'
                  name='surname'
                  id='surname-sign-up'
                  placeholder='Smith'
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='pwd-sign-up'>
                  <span className='text-danger'>*</span> Password
                </Label>
                <Input
                  tag={Field}
                  type='password'
                  name='password'
                  id='pwd-sign-up'
                  placeholder='***********'
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='pwd-sign-up-repeat'>
                  <span className='text-danger'>*</span> Repeat Password
                </Label>
                <Input
                  tag={Field}
                  type='password'
                  name='passwordRepeat'
                  id='pwd-sign-up-repeat'
                  placeholder='***********'
                  required={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className='mt-3' check>
            <Input tag={Field} type='checkbox' name='terms' id='terms-sign-up' />
            <Label for='terms-sign-up' check>
              Accept our{' '}
              <a href='#' onClick={(e) => e.preventDefault()}>
                Terms and Conditions
              </a>
              .
            </Label>
          </FormGroup>
          {status && (
            <Alert className='mt-3' color='danger'>
              {status}
            </Alert>
          )}
          <Row className='divider my-4' />
          <div className='d-flex justify-content-between'>
            <Button color='secondary' size='lg' onClick={() => navigate(AppRoutes.Index)}>
              <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
              Back to site
            </Button>
            <div className='ml-auto'>
              <ProgressButton
                isSubmit={true}
                color='primary'
                isLoading={isSubmitting}
                text='Create Account'
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
});
