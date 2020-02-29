import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

const IconFont = props => {
  const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1747554_dvkaxfknbtq.js'
  });
  return <Icon className="icons" {...props} />;
};

export default IconFont;
