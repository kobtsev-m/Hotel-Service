import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { Row, Col, Button } from 'reactstrap';
import { AppRoutes } from '../../routes';
import { SignInForm } from './SignInForm/SignInForm';
import bg1 from '../../assets/images/pexels-pixabay-53464.jpg';
import bg2 from '../../assets/images/pexels-valeria-boltneva-827528.jpg';
import bg3 from '../../assets/images/pexels-zachary-debottis-1838640.jpg';

export const SignInPage: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true
  };
  return (
    <Row className='h-100 no-gutters position-relative'>
      <Col lg={4} className='d-none d-lg-block'>
        <div className='slider-light'>
          <Slider {...sliderSettings}>
            <div className='h-100 d-flex justify-content-center align-items-center bg-premium-dark'>
              <div className='slide-img-bg' style={{ backgroundImage: `url(${bg1})` }} />
              <div className='slider-content'>
                <h3>Easy to find</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus enim expedita
                  illo vel vero. A consectetur dicta earum magni maiores
                </p>
              </div>
            </div>
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
            <div className='h-100 d-flex justify-content-center align-items-center bg-premium-dark'>
              <div className='slide-img-bg opacity-6' style={{ backgroundImage: `url(${bg3})` }} />
              <div className='slider-content'>
                <h3>Rent apartment online</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus enim expedita
                  illo vel vero. A consectetur dicta earum magni maiores
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Col>
      <Col
        lg={8}
        md={12}
        className='h-100 d-flex bg-white justify-content-center align-items-center'
      >
        <Col lg={9} md={10} sm={12} className='mx-auto app-login-box'>
          <div className='app-logo' />
          <h4 className='mb-0'>
            <div>Welcome,</div>
            <span>Please sign in to your account</span>
          </h4>
          <h6 className='mt-3'>
            No account? <NavLink to={AppRoutes.SignUp}>Sign up now</NavLink>
          </h6>
          <Row className='divider' />
          <SignInForm />
        </Col>
      </Col>
    </Row>
  );
};
