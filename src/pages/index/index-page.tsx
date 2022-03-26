import React from 'react';
import { Col, Row } from 'reactstrap';
import { HotelItem } from './HotelItem';
import hotelBg1 from '../../assets/images/hotelBg1.png';
import hotelBg2 from '../../assets/images/hotelBg2.jpg';
import hotelBg3 from '../../assets/images/hotelBg3.jpg';
import hotelBg4 from '../../assets/images/hotelBg4.jpg';
import hotelBg5 from '../../assets/images/hotelBg5.jpg';

export const IndexPage: React.FC = () => {
  const hotels = [
    { name: 'Horizon Patio', img: hotelBg1 },
    { name: 'Metropolis', img: hotelBg2 },
    { name: 'Sunset Lodge', img: hotelBg3 },
    { name: 'Crowne Plaza', img: hotelBg4 },
    { name: 'Mounty', img: hotelBg5 }
  ];
  return (
    <Row>
      {hotels.map((hotel) => (
        <Col lg='4' sm='6'>
          <HotelItem {...hotel} />
        </Col>
      ))}
    </Row>
  );
};
