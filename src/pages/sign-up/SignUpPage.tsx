import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { Row, Col } from 'reactstrap';
import { AppRoutes } from '../../routes';
import { SignUpForm } from './SignUpForm/SignUpForm';
import bg2 from '../../assets/images/pexels-valeria-boltneva-827528.jpg';

export const SignUpPage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 0,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: false,
    adaptiveHeight: true
  };
  return (
    <Row className='h-100 no-gutters'>
      <Col
        lg={7}
        md={12}
        className='h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center'
      >
        <Col lg={9} md={10} sm={12} className='mx-auto app-login-box'>
          <div className='app-logo' />
          <h4>
            <div>Welcome,</div>
            <span>
              It only takes a <span className='text-success'>few seconds</span> to create your
              account
            </span>
          </h4>
          <h6 className='mb-0'>
            Already have an account? <NavLink to={AppRoutes.SignIn}>Sign in</NavLink>
          </h6>
          <Row className='divider my-4' />
          <SignUpForm />
        </Col>
      </Col>
      <Col lg={5} className='d-lg-flex d-xs-none'>
        <div className='slider-light'>
          <Slider {...sliderSettings}>
            <div className='h-100 d-flex justify-content-center align-items-center bg-premium-dark'>
              <div className='slide-img-bg' style={{ backgroundImage: `url(${bg2})` }} />
              <div className='slider-content'>
                <h3>All services in one place</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus enim expedita
                  illo vel vero. A consectetur dicta earum magni maiores
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Col>
    </Row>
  );
};
