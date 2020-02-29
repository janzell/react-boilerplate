import React from 'react';
import { Menu, Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const QueueListActions = props => {
  const actions = () => {
    return (
      <Menu>
        {props.actions.map((v, i) => {
          //         console.log(v)
          return (
            <Menu.Item key={i}>
              <a onClick={() => v.action(props.record)}>{v.label}</a>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  return (
    <Dropdown overlay={actions}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Actions <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default QueueListActions;
