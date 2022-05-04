import cn from 'classnames';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

interface Props {
  title: string;
  subtitle: string;
  icon?: string;
}

export const PageTitle: React.FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <div className='app-page-title bg-premium-light'>
      <div className='page-title-wrapper'>
        <div className='page-title-heading'>
          <div className='page-title-icon'>
            <i className={cn('icon-gradient bg-amy-crisp', icon ?? 'pe-7s-bandaid')} />
          </div>
          <div>
            {title}
            <div className='page-title-subheading'>{subtitle}</div>
          </div>
        </div>
        <div className='page-title-actions'>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href='https://colorlib.com/' onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faHome} />
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>{title}</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};
