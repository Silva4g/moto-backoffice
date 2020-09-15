import React from 'react';

import './styles.scss';

import { MdMenu } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <div className="head">
      <MdMenu color="#999fa4" size={35} />
    </div>
  );
};

export default Header;
