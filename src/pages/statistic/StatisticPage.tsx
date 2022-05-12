import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useStores } from '../../store';

export const StatisticPage: React.FC = observer(() => {
  const { statisticStore } = useStores();

  useEffect(() => {
    statisticStore.getItem();
  }, []);

  return (
    <Fragment>
      <PageTitle title='Statistic' subtitle='Some description' icon='pe-7s-display1' />
      Statistic
    </Fragment>
  );
});
