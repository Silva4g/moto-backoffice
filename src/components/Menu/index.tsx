import React from 'react';

import { Link } from 'react-router-dom';

import {
  BiDollarCircle,
  BiTachometer,
  BiCommentDetail,
  BiTrendingUp,
  BiLogIn,
} from 'react-icons/bi';
import { FaRegListAlt, FaMotorcycle, FaFireAlt } from 'react-icons/fa';
import { GoMegaphone, GoGear } from 'react-icons/go';

import './styles.scss';

const Menu: React.FC = () => {
  // const list = ()
  // let list = 'list';
  // if (this.props.isActive) {
  //   list += ' clickbutton';
  // }

  return (
    <div className="container">
      <h1>Logo</h1>
      <div style={{ borderBottom: '1px solid #a6a9b8' }}>
        <button type="button">
          <BiDollarCircle size={24} />
          <span>Anunciar</span>
        </button>
      </div>
      <div className="list">
        <Link to="/dashboard/">
          <BiTachometer size={24} />
          <span>Dashboard</span>
        </Link>
        <Link to="/dashboard/proposta">
          <BiCommentDetail size={24} />
          <span>Propostas</span>
          <div>3</div>
        </Link>
        <Link to="/dashboard/anuncio">
          <GoMegaphone size={24} />
          <span>Anúncios</span>
        </Link>
        <Link to="/dashboard/estoque">
          <FaMotorcycle size={24} />
          <span>Estoque</span>
        </Link>
        <Link to="/dashboard/relatorio">
          <BiTrendingUp size={24} />
          <span>Relatórios</span>
        </Link>
        <Link to="/dashboard/planos">
          <FaRegListAlt size={24} />
          <span>Planos/Produtos</span>
        </Link>
        <Link to="/dashboard/nitro">
          <FaFireAlt size={24} />
          <span>Nitro</span>
        </Link>
        <Link to="/dashboard/config">
          <GoGear size={24} />
          <span>Minha Conta</span>
        </Link>
      </div>
      <span className="logOut">
        <BiLogIn size={24} color="#A6A9B8" />
        <span>Sair</span>
      </span>
    </div>
  );
};

export default Menu;
