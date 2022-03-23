import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { User } from '../../../amplify/backend/function/api/src/app/db/entities';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import api from '../../api';

export const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const toggleIsRegister = () => {
    setIsRegister((prev) => !prev);
  };

  const handleGetUser = async () => {
    setUser(await api.getUser());
  };

  return (
    <Container className='py-3'>
      <Nav justified={true} pills={true} tabs={true} className='mb-2'>
        <NavItem>
          <NavLink active={!isRegister} onClick={toggleIsRegister} href='#'>
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={isRegister} onClick={toggleIsRegister} href='#'>
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
      <Card className='mb-2'>
        <CardBody>
          {isRegister ? (
            <>
              <CardTitle tag='h4'>Sign Up</CardTitle>
              <hr />
              <SignUpForm
                callback={(cognitoId: string) => {
                  console.log(cognitoId);
                }}
              />
            </>
          ) : (
            <>
              <CardTitle tag='h4'>Sign In</CardTitle>
              <hr />
              <SignInForm callback={() => setLoggedIn(true)} />
            </>
          )}
        </CardBody>
      </Card>
      {!isRegister && loggedIn && (
        <Button color='success' className='w-100 mt-2' onClick={handleGetUser}>
          Get user
        </Button>
      )}
      {!isRegister && user && (
        <Card className='mt-2'>
          <CardBody>
            <pre>{JSON.stringify(user, null, 4)}</pre>
          </CardBody>
        </Card>
      )}
    </Container>
  );
};
