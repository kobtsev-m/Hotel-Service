import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';
import { User } from '../../../amplify/backend/function/api/src/app/db/entities';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import api from '../../api';

// @ts-ignore
import Tabs, { TabPane } from 'rc-tabs';
// @ts-ignore
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
// @ts-ignore
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { ProgressButton } from '../../components/Buttons/ProgressButton';

export const LoginPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleGetUser = async () => {
    setIsLoadingUser(true);
    setUser(await api.getUser());
    setIsLoadingUser(false);
  };

  return (
    <Container className='py-3'>
      <Tabs
        defaultActiveKey='1'
        renderTabBar={() => <ScrollableInkTabBar />}
        renderTabContent={() => <TabContent />}
      >
        <TabPane tab='Sign in' key='1'>
          <Card className='no-shadow'>
            <CardBody>
              <CardTitle tag='h4'>Sign In</CardTitle>
              <hr />
              <SignInForm callback={() => setLoggedIn(true)} />
            </CardBody>
          </Card>
          {loggedIn && (
            <div className='mx-3 mt-2'>
              <ProgressButton
                text='Get user'
                color='success'
                className='w-100 mt-2'
                onClick={handleGetUser}
                isLoading={isLoadingUser}
              />
            </div>
          )}
          {loggedIn && user && (
            <Card className='m-3'>
              <CardBody>
                <pre>{JSON.stringify(user, null, 4)}</pre>
              </CardBody>
            </Card>
          )}
        </TabPane>
        <TabPane tab='Sign up' key='2'>
          <Card className='no-shadow'>
            <CardBody>
              <CardTitle tag='h4'>Sign Up</CardTitle>
              <hr />
              <SignUpForm
                callback={(cognitoId: string) => {
                  console.log(cognitoId);
                }}
              />
            </CardBody>
          </Card>
        </TabPane>
      </Tabs>
    </Container>
  );
};
