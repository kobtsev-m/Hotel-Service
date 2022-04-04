import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
  UncontrolledButtonDropdown
} from 'reactstrap';
import { UserRole } from '../../../../../amplify/backend/function/api/src/app/db/constants';
import { useStores } from '../../../../store';

export const UserBox: React.FC = observer(() => {
  const { userStore } = useStores();

  const user = userStore.user;

  const handleLogOut = async () => {
    await userStore.signOut();
  };

  return (
    <Fragment>
      <div className='header-btn-lg ml-2 pr-0'>
        <div className='widget-content p-0'>
          <div className='widget-content-wrapper'>
            {user && (
              <div className='widget-content-left mr-3 header-user-info'>
                <div className='widget-heading'>
                  {user.firstName} {user.lastName}
                  {user.role === UserRole.ADMIN && ' (admin)'}
                </div>
                <div className='widget-subheading'>{user.email}</div>
              </div>
            )}
            <div className='widget-content-left'>
              <UncontrolledButtonDropdown disabled={!user}>
                <DropdownToggle color='link' className='d-flex align-items-center p-0'>
                  <div
                    className='rounded-circle bg-dark'
                    style={{ width: '42px', height: '42px' }}
                  />
                  <FontAwesomeIcon className='ml-2 opacity-8' icon={faAngleDown} />
                </DropdownToggle>
                <DropdownMenu end className='rm-pointers dropdown-menu-lg mt-3'>
                  <div className='dropdown-menu-header'>
                    <div className='dropdown-menu-header-inner'>
                      <div className='menu-header-image opacity-2' />
                      <div className='menu-header-content text-left'>
                        <div className='widget-content p-0'>
                          <div className='widget-content-wrapper'>
                            <div className='widget-content-left mr-3'>
                              <div
                                className='rounded-circle bg-dark'
                                style={{ width: '42px', height: '42px' }}
                              />
                            </div>
                            {user && (
                              <div className='widget-content-left'>
                                <div className='widget-heading'>
                                  {user.firstName} {user.lastName}
                                </div>
                                <div className='widget-subheading opacity-8'>{user.email}</div>
                              </div>
                            )}
                            <div className='widget-content-right mr-2'>
                              <Button
                                className='btn-pill btn-shadow btn-shine'
                                color='dark'
                                onClick={handleLogOut}
                              >
                                Logout
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='mt-0' />
                  <div className='scroll-area-xs' style={{ height: '200px' }}>
                    <PerfectScrollbar>
                      <Nav vertical>
                        <NavItem className='nav-item-header'>Activity</NavItem>
                        <NavItem>
                          <NavLink href='#'>
                            Rents
                            <div className='ml-auto badge badge-pill badge-info'>1</div>
                          </NavLink>
                          <NavLink href='#'>
                            Service Debt
                            <div className='ml-auto badge badge-pill badge-info'>100$</div>
                          </NavLink>
                        </NavItem>
                        <NavItem className='nav-item-header'>My Account</NavItem>
                        <NavItem>
                          <NavLink href='#'>Change Password</NavLink>
                        </NavItem>
                      </Nav>
                    </PerfectScrollbar>
                  </div>
                  <Nav vertical>
                    <NavItem className='nav-item-divider mb-0' />
                  </Nav>
                  <div className='grid-menu grid-menu-2col'>
                    <Row className='no-gutters'>
                      <Col sm='6'>
                        <Button
                          className='btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2'
                          outline
                          color='primary'
                        >
                          <i className='pe-7s-portfolio btn-icon-wrapper mb-2'> </i>
                          Organisations
                        </Button>
                      </Col>
                      <Col sm='6'>
                        <Button
                          className='btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2'
                          outline
                          color='primary'
                        >
                          <i className='pe-7s-info btn-icon-wrapper mb-2'> </i>
                          <b>Support</b>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});
