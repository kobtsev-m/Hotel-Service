import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  UncontrolledButtonDropdown,
  UncontrolledDropdown
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useStores } from '../../../../store';

export const MegaMenu = observer(() => {
  const { userStore } = useStores();
  const user = userStore.user;

  if (!user) {
    return null;
  }

  return (
    <Nav className='header-megamenu'>
      {/*<NavItem>*/}
      {/*  <NavLink href='#' onClick={toggle} id='PopoverMegaMenu'>*/}
      {/*    <i className='nav-link-icon pe-7s-keypad'> </i>*/}
      {/*    Menu*/}
      {/*    <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />*/}
      {/*  </NavLink>*/}
      {/*</NavItem>*/}
      {/*<Popover*/}
      {/*  className='rm-max-width'*/}
      {/*  placement='bottom-start'*/}
      {/*  offset={[0, 18, 0, 0]}*/}
      {/*  fade={false}*/}
      {/*  trigger='legacy'*/}
      {/*  isOpen={isPopoverOpen}*/}
      {/*  target='PopoverMegaMenu'*/}
      {/*  toggle={toggle}*/}
      {/*>*/}
      {/*  <div className='dropdown-mega-menu'>*/}
      {/*    <div className='grid-menu'>*/}
      {/*      <Row className='no-gutters'>*/}
      {/*        <Col md='6'>*/}
      {/*          <Nav vertical>*/}
      {/*            <NavItem className='nav-item-header'>Hotels</NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                <span>Horizon Patio</span>*/}
      {/*                <div className='ml-auto badge badge-success'>*/}
      {/*                  5 <i className='pe-7s-star ml-1'> </i>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                <span>Metropolis</span>*/}
      {/*                <div className='ml-auto badge badge-success'>*/}
      {/*                  5 <i className='pe-7s-star ml-1'> </i>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                <span>Sunset Lodge</span>*/}
      {/*                <div className='ml-auto badge badge-warning'>*/}
      {/*                  4 <i className='pe-7s-star ml-1'> </i>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                <span>Crowne Plaza</span>*/}
      {/*                <div className='ml-auto badge badge-primary'>*/}
      {/*                  3 <i className='pe-7s-star ml-1'> </i>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*          </Nav>*/}
      {/*        </Col>*/}
      {/*        <Col md='6'>*/}
      {/*          <Nav vertical>*/}
      {/*            <NavItem className='nav-item-header'>Services</NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                Spa*/}
      {/*                <div className='ml-auto badge badge-pill badge-danger'>*/}
      {/*                  <small>Popular</small>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>Gym</NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>*/}
      {/*                Aquapark*/}
      {/*                <div className='ml-auto badge badge-pill badge-danger'>*/}
      {/*                  <small>Popular</small>*/}
      {/*                </div>*/}
      {/*              </NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>Bar</NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>Surfing</NavLink>*/}
      {/*            </NavItem>*/}
      {/*            <NavItem>*/}
      {/*              <NavLink href='#'>Riding</NavLink>*/}
      {/*            </NavItem>*/}
      {/*          </Nav>*/}
      {/*        </Col>*/}
      {/*      </Row>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Popover>*/}
      <UncontrolledButtonDropdown nav inNavbar>
        <DropdownToggle nav>
          <i className='nav-link-icon pe-7s-star'> </i>
          Popular
          <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />
        </DropdownToggle>
        <DropdownMenu className='rm-pointers mt-3'>
          <div className='dropdown-menu-header'>
            <div className='dropdown-menu-header-inner bg-danger'>
              <div className='menu-header-image opacity-5' />
              <div className='menu-header-content'>
                <h5 className='menu-header-title'>Popular</h5>
                <h6 className='menu-header-subtitle'>Description provided</h6>
              </div>
            </div>
          </div>
          <div className='scroll-area-xs' style={{ height: '230px' }}>
            <PerfectScrollbar>
              <DropdownItem header>Services</DropdownItem>
              <DropdownItem>
                <div className='mr-4'>Spa</div>
                <div className='ml-auto badge badge-primary'>101</div>
              </DropdownItem>
              <DropdownItem>
                <div className='mr-4'>Aquapark</div>
                <div className='ml-auto badge badge-primary'>23</div>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>Apartments</DropdownItem>
              <DropdownItem>
                <div className='mr-4'>President Lux - Hotel Patio</div>
                <div className='ml-auto badge badge-primary'>56</div>
              </DropdownItem>
              <DropdownItem>
                <div className='mr-4'>Loft - Sunset Lodge</div>
                <div className='ml-auto badge badge-primary'>10</div>
              </DropdownItem>
            </PerfectScrollbar>
          </div>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <i className='nav-link-icon pe-7s-credit'> </i>
          My Rents
          <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />
        </DropdownToggle>
        <DropdownMenu className='dropdown-menu-rounded dropdown-menu-lg rm-pointers mt-3'>
          <div className='dropdown-menu-header'>
            <div className='dropdown-menu-header-inner bg-success'>
              <div className='menu-header-image opacity-1' />
              <div className='menu-header-content text-left px-3'>
                <h5 className='menu-header-title'>Current rent</h5>
                <h6 className='menu-header-subtitle'>Description provided</h6>
                <div className='menu-header-btn-pane'>
                  <Button size='sm' color='light' className='w-100 mt-2'>
                    Check-in date: 12:00, 25.03.2022
                  </Button>
                  <Button size='sm' color='dark' className='w-100 mt-2'>
                    Check-out date: 16:00, 28.03.2022
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DropdownItem>President Lux - Hotel Patio</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
});
