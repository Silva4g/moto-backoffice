import React from 'react';

import './styles.scss';

import Conversa from '../../components/Conversas';

import { Link } from 'react-router-dom';

const Proposta: React.FC = () => {
  return (
    <div className="content-proposal">
      <div className="container-proposal">
        <div className="options-proposal">
          <Link to="/dashboard/proposta/vendendo">Vendendo</Link>
          <Link to="/dashboard/proposta/comprado">Comprando</Link>
          <Link to="/dashboard/proposta/arquivado">Arquivando</Link>
        </div>
        <Conversa />
      </div>
      <div className="container-proposal"></div>
    </div>
  );
};

export default Proposta;
