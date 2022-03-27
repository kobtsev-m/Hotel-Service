import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

interface Props {
  name: string;
  img: string;
}

export const HotelItem: React.FC<Props> = ({ name, img }) => {
  const [activeTab, setActiveTab] = useState<'1' | '2'>('1');

  const services = [
    { name: 'Spa', price: 100 },
    { name: 'Gym', price: 50 },
    { name: 'Surfing', price: 45 },
    { name: 'Aquapark', price: 23 },
    { name: 'Bar', price: 59 }
  ];

  return (
    <Card className='main-card mb-3'>
      <div className='dropdown-menu-header'>
        <div
          className='dropdown-menu-header-inner bg-focus d-flex align-items-end'
          style={{ height: '16rem' }}
        >
          <div className='menu-header-image opacity-5' style={{ backgroundImage: `url(${img})` }} />
          <div className='menu-header-content text-left'>
            <h5 className='menu-header-title'>{name}</h5>
            <h6 className='menu-header-subtitle'>
              5 <i className='pe-7s-star ml-1'> </i>
            </h6>
            <div className='menu-header-btn-pane'>
              <Button size='sm' color='primary' className='mr-2'>
                View apartments
              </Button>
              <Button size='sm' className='btn-icon btn-icon-only' color='light'>
                Open
                <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2' />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CardHeader>
        <div className='actions-icon-btn mx-auto'>
          <div>
            <ButtonGroup size='lg'>
              <Button
                caret='true'
                color='focus'
                className={cn('btn-pill pl-3', {
                  active: activeTab === '1'
                })}
                onClick={() => setActiveTab('1')}
              >
                Description
              </Button>
              <Button
                color='focus'
                className={cn('btn-pill pr-3', {
                  active: activeTab === '2'
                })}
                onClick={() => setActiveTab('2')}
              >
                Services
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </CardHeader>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <CardBody>
            <h5 className='menu-header-title'>Description</h5>
            {/*<h6 className='menu-header-subtitle'>Total performance for this month</h6>*/}
            <p className='mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur ex in
              laboriosam maxime, minima reprehenderit sint voluptatibus. Accusamus aperiam at aut
              excepturi harum in nihil non saepe similique vel?
            </p>
          </CardBody>
        </TabPane>
        <TabPane tabId='2'>
          <CardBody>
            <h6 className='text-muted text-uppercase font-size-md opacity-5 font-weight-normal'>
              Services
            </h6>
            <ListGroup className='rm-list-borders' flush>
              {services.map((service, i) => (
                <ServiceItem key={i} {...service} />
              ))}
            </ListGroup>
          </CardBody>
        </TabPane>
      </TabContent>
    </Card>
  );
};

interface ServiceProps {
  name: string;
  price: number;
}

const ServiceItem: React.FC<ServiceProps> = ({ name, price }) => {
  return (
    <ListGroupItem>
      <div className='widget-content p-0'>
        <div className='widget-content-wrapper'>
          <div className='widget-content-left mr-3'>
            <div
              style={{ width: '42px', height: '42px', background: '#424242' }}
              className='rounded-circle'
            />
          </div>
          <div className='widget-content-left'>
            <div className='widget-heading'>{name}</div>
            <div className='widget-subheading'>Not included</div>
          </div>
          <div className='widget-content-right'>
            <div className='font-size-xlg text-muted'>
              <small className='opacity-5 pr-1'>$</small>
              <CountUp
                start={0}
                end={price}
                separator=''
                decimals={0}
                decimal='.'
                prefix=''
                duration={1}
              />
            </div>
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};
