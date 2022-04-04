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
  Spinner,
  TabContent,
  TabPane
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hotel, Service } from '../../../../amplify/backend/function/api/src/app/db/entities';
import { useProgressiveImageMultiple } from '../../../hooks';
import cn from 'classnames';

interface Props {
  hotel: Hotel;
}

export const HotelItem: React.FC<Props> = ({ hotel }) => {
  const [activeTab, setActiveTab] = useState<'1' | '2'>('1');
  const [imageSources, isImagesLoading] = useProgressiveImageMultiple(`hotels/${hotel['id']}`);

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
          className='dropdown-menu-header-inner bg-dark d-flex align-items-end'
          style={{ height: '16rem' }}
        >
          <div
            className='menu-header-image'
            style={{ backgroundImage: imageSources ? `url(${imageSources[0]})` : 'none' }}
          />
          {isImagesLoading && (
            <Spinner className='image-loader' size='sm'>
              {' '}
            </Spinner>
          )}
          <div className='menu-header-content text-left'>
            <h5 className='menu-header-title'>{hotel['name']}</h5>
            <h6 className='menu-header-subtitle'>
              {hotel['stars']} <i className='pe-7s-star ml-1'> </i>
            </h6>
            <div className='menu-header-btn-pane'>
              <Button size='sm' className='mr-2' color='light'>
                Open
                <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2' />
              </Button>
              <Button size='sm' color='primary'>
                View apartments
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
                color='dark'
                className={cn('btn-pill pl-3', {
                  active: activeTab === '1'
                })}
                onClick={() => setActiveTab('1')}
              >
                Description
              </Button>
              <Button
                color='dark'
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
            <p className='mt-2'>{hotel['description']}</p>
          </CardBody>
        </TabPane>
        <TabPane tabId='2'>
          <CardBody>
            <h6 className='text-muted text-uppercase font-size-md opacity-5 font-weight-normal'>
              Services
            </h6>
            <ListGroup className='rm-list-borders' flush>
              {hotel['services'].map((service, i) => (
                <ServiceItem key={i} service={service} />
              ))}
            </ListGroup>
          </CardBody>
        </TabPane>
      </TabContent>
    </Card>
  );
};

interface ServiceProps {
  service: Service;
}

const ServiceItem: React.FC<ServiceProps> = ({ service }) => {
  return (
    <ListGroupItem>
      <div className='widget-content p-0'>
        <div className='widget-content-wrapper'>
          <div className='widget-content-left mr-3'>
            <div className='rounded-circle bg-dark' style={{ width: '42px', height: '42px' }} />
          </div>
          <div className='widget-content-left'>
            <div className='widget-heading'>{service['name']}</div>
            <div className='widget-subheading'>
              {service['isAdditional'] ? 'Not included' : 'Included'}
            </div>
          </div>
          {service['isAdditional'] && (
            <div className='widget-content-right'>
              <div className='font-size-xlg text-muted'>
                <small className='opacity-5 pr-1'>$</small>
                <CountUp
                  start={0}
                  end={service['totalPrice']}
                  separator=''
                  decimals={0}
                  decimal='.'
                  prefix=''
                  duration={1}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </ListGroupItem>
  );
};
