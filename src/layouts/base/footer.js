import React from 'react';
import { Layout } from 'antd';

const FooterPart = () => {
  const { Footer } = Layout;
  return (
    <Footer className="text-center">
      MediCenter+ ©{new Date().getFullYear()} Created by{' '}
      <a href="https://www.jwits.co" target="_blank" rel="noopener noreferrer">
        JWITS
      </a>
    </Footer>
  );
};

export default FooterPart;
