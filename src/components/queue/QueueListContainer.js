import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import QueueList from './QueueList';

import { QUEUES_TOTAL, QUEUE_LIST } from 'queries/queue';

const QueueTotal = () => {
  const { data } = useQuery(QUEUES_TOTAL);

  return data ? data.queue_patients_aggregate.aggregate.count : 0;
};

const QueueListContainer = () => {
  const { loading, error, data, fetchMore } = useQuery(QUEUE_LIST, {
    variables: {
      offset: 0,
      limit: 10
    },
    fetchPolicy: 'cache-and-network'
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {
        offset: data.queue_patients.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          queue_patients: [
            ...prev.queue_patients,
            ...fetchMoreResult.queue_patients
          ]
        });
      }
    });
  };

  const props = {
    fetchMoreData,
    loading,
    error,
    data,
    count: QueueTotal(),
    fetchMore
  };

  console.log(data);

  return <QueueList {...props} />;
};

export default QueueListContainer;
