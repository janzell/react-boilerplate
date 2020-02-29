import React from 'react';
import '../../index.less';
import 'components/QueueStatus/queue-status.less';

const QueueStatus = ({ status, ...props }) => {
  return (
    <div className="queue-status">
      <p>
        Status: <span className="pull-right">{status}</span>
      </p>
      <div className="clearfix" />
    </div>
  );
};

export default QueueStatus;
