import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export const PageTitle: React.FC = () => {
  return (
    <div className='app-page-title bg-premium-light'>
      <div className='page-title-wrapper'>
        <div className='page-title-heading'>
          <div className='page-title-icon'>
            <i className='pe-7s-bandaid icon-gradient bg-amy-crisp' />
          </div>
          <div>
            Hotels
            <div className='page-title-subheading'>Some description</div>
          </div>
        </div>
        <div className='page-title-actions'>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href='https://colorlib.com/' onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faHome} />
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Hotels</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};
