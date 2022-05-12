import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import {
  Button,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  UncontrolledCollapse
} from 'reactstrap';
import { useStores } from '../../../store';
import { ApartmentFilters } from '../ApartmentFilters/ApartmentFilters';
import { ApartmentItem } from '../ApartmentItem/ApartmentItem';

interface Props {
  toggleAdditionMode: () => void;
}

export const ApartmentList: React.FC<Props> = observer(({ toggleAdditionMode }) => {
  const { apartmentStore, userStore } = useStores();
  const isUserAdmin = userStore.isAdmin();

  useEffect(() => {
    if (apartmentStore.isFetched) {
      return;
    }
    apartmentStore.getItems(0);
  }, []);

  const nextPage = () => apartmentStore.getItems(apartmentStore.page + 1);
  const prevPage = () => apartmentStore.getItems(apartmentStore.page - 1);
  const setPage = (page: number) => apartmentStore.getItems(page);

  return (
    <Fragment>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          <h5>Apartment list:</h5>
        </div>
        {isUserAdmin && (
          <div className='flex-grow-0'>
            <Button color='primary' onClick={toggleAdditionMode}>
              Add +
            </Button>
          </div>
        )}
      </div>
      <hr />
      <Button
        color='light'
        className='btn-shadow w-100'
        id='apartmentsFilters'
        disabled={!apartmentStore.apartments.length}
      >
        Search filters
      </Button>
      <UncontrolledCollapse toggler='#apartmentsFilters'>
        <ApartmentFilters />
      </UncontrolledCollapse>
      <hr />
      {apartmentStore.isLoading ? (
        <div className='w-100 d-flex justify-content-center my-5'>
          <BarLoader />
        </div>
      ) : (
        <Fragment>
          <Row>
            {apartmentStore.apartments.map((apartment) => (
              <Col key={apartment['id']} md={6}>
                <ApartmentItem apartment={apartment} isUserAdmin={isUserAdmin} />
              </Col>
            ))}
          </Row>
          <Row className='justify-content-end m-0'>
            <Pagination>
              <PaginationItem disabled={apartmentStore.page === 0}>
                <PaginationLink previous href='#' onClick={prevPage}>
                  {' '}
                </PaginationLink>
              </PaginationItem>
              {Array.from({ length: apartmentStore.totalPages }).map((_, i) => (
                <PaginationItem
                  key={`pagination-btn-${i}`}
                  active={i === apartmentStore.page}
                  onClick={() => setPage(i)}
                >
                  <PaginationLink href='#'>{i + 1}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={apartmentStore.page === apartmentStore.totalPages - 1}>
                <PaginationLink next href='#' onClick={nextPage}>
                  {' '}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
});
