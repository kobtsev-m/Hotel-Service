import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ProgressButton } from '../../../components/Buttons';
import { AppRoutes } from '../../../routes';
import { useStores } from '../../../store';
import { SignInParams } from '../../../store/stores/UserStore';
import { Alert, Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SignInForm: React.FC = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();
  return (
    <Formik<SignInParams>
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setSubmitting(true);
          await userStore.signIn(values);
          navigate(AppRoutes.Index);
        } catch (e) {
          setStatus((e as Error).message);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for='email-sign-in'>Email</Label>
                <Input
                  tag={Field}
                  id='email-sign-in'
                  name='email'
                  placeholder='email@example.com'
                  type='email'
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for='password-sign-in'>Password</Label>
                <Input
                  tag={Field}
                  id='password-sign-in'
                  name='password'
                  placeholder='********'
                  type='password'
                  required={true}
                />
              </FormGroup>
            </Col>
          </Row>
          {status && <Alert color='danger'>{status}</Alert>}
          <Row className='divider' />
          <div className='d-flex justify-content-between'>
            <Button color='secondary' size='lg' onClick={() => navigate(AppRoutes.Index)}>
              <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
              Back to site
            </Button>
            <ProgressButton isSubmit={true} color='primary' isLoading={isSubmitting} text='Login' />
          </div>
        </Form>
      )}
    </Formik>
  );
});
