import { Fragment, useState } from 'react';
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Popover,
  Row,
  UncontrolledButtonDropdown,
  UncontrolledDropdown
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export const MegaMenu = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const toggle = () => setIsPopoverOpen((prev) => !prev);

  return (
    <Fragment>
      <Nav className='header-megamenu'>
        <NavItem>
          <NavLink href='#' onClick={toggle} id='PopoverMegaMenu'>
            <i className='nav-link-icon pe-7s-gift'> </i>
            Menu
            <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />
          </NavLink>
        </NavItem>
        <Popover
          className='rm-max-width'
          placement='bottom-start'
          offset={[0, 18, 0, 0]}
          fade={false}
          trigger='legacy'
          isOpen={isPopoverOpen}
          target='PopoverMegaMenu'
          toggle={toggle}
        >
          <div className='dropdown-mega-menu'>
            <div className='grid-menu grid-menu-3col'>
              <Row className='no-gutters'>
                <Col xl='4' sm='6'>
                  <Nav vertical>
                    <NavItem className='nav-item-header'>Overview</NavItem>
                    <NavItem>
                      <NavLink href='#'>
                        <span>Contacts</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>
                        <span>Incidents</span>
                        <div className='ml-auto badge badge-pill badge-danger'>5</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>
                        <span>Companies</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href='#'>
                        <span>Dashboards</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xl='4' sm='6'>
                  <Nav vertical>
                    <NavItem className='nav-item-header'>Favourites</NavItem>
                    <NavItem>
                      <NavLink href='#'>Reports Conversions</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>
                        Quick Start
                        <div className='ml-auto badge badge-success'>New</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>Users &amp; Groups</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>Proprieties</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xl='4' sm='6'>
                  <Nav vertical>
                    <NavItem className='nav-item-header'>Sales &amp; Marketing</NavItem>
                    <NavItem>
                      <NavLink href='#'>Queues</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>Resource Groups</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>
                        Goal Metrics
                        <div className='ml-auto badge badge-warning'>3</div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='#'>Campaigns</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </div>
          </div>
        </Popover>
        <UncontrolledButtonDropdown nav inNavbar>
          <DropdownToggle nav>
            <i className='nav-link-icon pe-7s-star'> </i>
            Popular
            <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />
          </DropdownToggle>
          <DropdownMenu className='rm-pointers mt-3'>
            <div className='dropdown-menu-header'>
              <div className='dropdown-menu-header-inner bg-secondary'>
                <div className='menu-header-image opacity-5' />
                <div className='menu-header-content'>
                  <h5 className='menu-header-title'>Overview</h5>
                  <h6 className='menu-header-subtitle'>Dropdown menus for everyone</h6>
                </div>
              </div>
            </div>
            <div className='scroll-area-xs' style={{ height: '150px' }}>
              <PerfectScrollbar>
                <DropdownItem header>Key Figures</DropdownItem>
                <DropdownItem>Service Calendar</DropdownItem>
                <DropdownItem>Knowledge Base</DropdownItem>
                <DropdownItem>Accounts</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Products</DropdownItem>
                <DropdownItem>Rollup Queries</DropdownItem>
              </PerfectScrollbar>
            </div>
            <Nav vertical>
              <NavItem className='nav-item-divider' />
              <NavItem className='nav-item-btn'>
                <Button size='sm' className='btn-wide btn-shadow' color='danger'>
                  Cancel
                </Button>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <i className='nav-link-icon pe-7s-credit'> </i>
            Rents
            <FontAwesomeIcon className='ml-2 opacity-5' icon={faAngleDown} />
          </DropdownToggle>
          <DropdownMenu className='dropdown-menu-rounded dropdown-menu-lg rm-pointers mt-3'>
            <div className='dropdown-menu-header'>
              <div className='dropdown-menu-header-inner bg-success'>
                <div className='menu-header-image opacity-1' />
                <div className='menu-header-content text-left'>
                  <h5 className='menu-header-title'>Overview</h5>
                  <h6 className='menu-header-subtitle'>Unlimited options</h6>
                  <div className='menu-header-btn-pane'>
                    <Button size='sm' color='dark' className='mr-2'>
                      Settings
                    </Button>
                    <Button size='sm' className='btn-icon btn-icon-only' color='warning'>
                      <i className='pe-7s-config btn-icon-wrapper'> </i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DropdownItem>Graphic Design</DropdownItem>
            <DropdownItem>App Development</DropdownItem>
            <DropdownItem>Icon Design</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Miscellaneous</DropdownItem>
            <DropdownItem>Frontend Dev</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Fragment>
  );
};
