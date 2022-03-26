// @ts-ignore
import Tabs, { TabPane } from 'rc-tabs';
// @ts-ignore
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
// @ts-ignore
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';
import { RouteType } from '../../router';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { toast } from 'react-toastify';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
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
              <SignInForm callback={() => navigate(RouteType.Index)} />
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tab='Sign up' key='2'>
          <Card className='no-shadow'>
            <CardBody>
              <CardTitle tag='h4'>Sign Up</CardTitle>
              <hr />
              <SignUpForm
                callback={() => toast('Successfully registered!', { type: toast.TYPE.SUCCESS })}
              />
            </CardBody>
          </Card>
        </TabPane>
      </Tabs>
    </Container>
  );
};
