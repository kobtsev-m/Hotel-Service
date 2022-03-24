import React, { Fragment } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  Col,
  Row,
  Button,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../assets/images/avatar.jpg';

export const UserBox: React.FC = () => {
  return (
    <Fragment>
      <div className='header-btn-lg ml-2 pr-0'>
        <div className='widget-content p-0'>
          <div className='widget-content-wrapper'>
            <div className='widget-content-left mr-3 header-user-info'>
              <div className='widget-heading'>Alina Mclourd</div>
              <div className='widget-subheading'>VP People Manager</div>
            </div>
            <div className='widget-content-left'>
              <UncontrolledButtonDropdown>
                <DropdownToggle color='link' className='d-flex align-items-center p-0'>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      background: `url(${avatar})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                    className='rounded-circle'
                  />
                  <FontAwesomeIcon className='ml-2 opacity-8' icon={faAngleDown} />
                </DropdownToggle>
                <DropdownMenu right className='rm-pointers dropdown-menu-lg mt-3'>
                  <div className='dropdown-menu-header'>
                    <div className='dropdown-menu-header-inner bg-secondary'>
                      <div className='menu-header-image opacity-2' />
                      <div className='menu-header-content text-left'>
                        <div className='widget-content p-0'>
                          <div className='widget-content-wrapper'>
                            <div className='widget-content-left mr-3'>
                              <div
                                style={{
                                  width: '42px',
                                  height: '42px',
                                  background: `url(${avatar})`,
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover'
                                }}
                                className='rounded-circle'
                              />
                            </div>
                            <div className='widget-content-left'>
                              <div className='widget-heading'>Alina Mcloughlin</div>
                              <div className='widget-subheading opacity-8'>
                                A short profile description
                              </div>
                            </div>
                            <div className='widget-content-right mr-2'>
                              <Button className='btn-pill btn-shadow btn-shine' color='focus'>
                                Logout
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='scroll-area-xs'
                    style={{
                      height: '150px'
                    }}
                  >
                    <PerfectScrollbar>
                      <Nav vertical>
                        <NavItem className='nav-item-header'>Activity</NavItem>
                        <NavItem>
                          <NavLink href='#'>
                            Chat
                            <div className='ml-auto badge badge-pill badge-info'>8</div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href='#'>Recover Password</NavLink>
                        </NavItem>
                        <NavItem className='nav-item-header'>My Account</NavItem>
                        <NavItem>
                          <NavLink href='#'>
                            Settings
                            <div className='ml-auto badge badge-success'>New</div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href='#'>
                            Messages
                            <div className='ml-auto badge badge-warning'>512</div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href='#'>Logs</NavLink>
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
                          color='warning'
                        >
                          <i className='pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2'>
                            {' '}
                          </i>
                          Message Inbox
                        </Button>
                      </Col>
                      <Col sm='6'>
                        <Button
                          className='btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2'
                          outline
                          color='danger'
                        >
                          <i className='pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2'>
                            {' '}
                          </i>
                          <b>Support Tickets</b>
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <Nav vertical>
                    <NavItem className='nav-item-divider' />
                    <NavItem className='nav-item-btn text-center'>
                      <Button size='sm' className='btn-wide' color='primary'>
                        Open Messages
                      </Button>
                    </NavItem>
                  </Nav>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
