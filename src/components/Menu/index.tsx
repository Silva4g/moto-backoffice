import React from 'react';

import { Link, useLocation, useRouteMatch } from 'react-router-dom';

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

interface MenuSubItem {
  to: string;
}

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();

  function isCurrentRoute(route: string): boolean {
    return pathname === route;
  }

  return (
    <div className="container">
      <img
        src="https://lojista.moto.com.br/static/media/logo.ee6b8bd7.png"
        alt="MOTO.com.br"
        style={{ width: 120, padding: '20px 0' }}
      />
      <div
        style={{
          borderBottom: '1px solid #a6a9b8',
          borderTop: '1px solid #a6a9b8',
        }}
      >
        <button type="button">
          <BiDollarCircle size={24} />
          <span>Anunciar</span>
        </button>
      </div>
      <div className="list">
        <Link
          to="/dashboard/"
          className={isCurrentRoute('/dashboard/') ? 'is-active' : ''}
        >
          <BiTachometer size={24} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/proposta"
          className={isCurrentRoute('/dashboard/proposta') ? 'is-active' : ''}
        >
          <BiCommentDetail size={24} />
          <span>Propostas</span>
          <div>3</div>
        </Link>
        <Link
          to="/dashboard/anuncio"
          className={isCurrentRoute('/dashboard/anuncio') ? 'is-active' : ''}
        >
          <GoMegaphone size={24} />
          <span>Anúncios</span>
        </Link>
        <Link
          to="/dashboard/estoque"
          className={isCurrentRoute('/dashboard/estoque') ? 'is-active' : ''}
        >
          <FaMotorcycle size={24} />
          <span>Estoque</span>
        </Link>
        <Link
          to="/dashboard/relatorio"
          className={isCurrentRoute('/dashboard/relatorio') ? 'is-active' : ''}
        >
          <BiTrendingUp size={24} />
          <span>Relatórios</span>
        </Link>
        <Link
          to="/dashboard/planos"
          className={isCurrentRoute('/dashboard/planos') ? 'is-active' : ''}
        >
          <FaRegListAlt size={24} />
          <span>Planos/Produtos</span>
        </Link>
        <Link
          to="/dashboard/nitro"
          className={isCurrentRoute('/dashboard/nitro') ? 'is-active' : ''}
        >
          <FaFireAlt size={24} />
          <span>Nitro</span>
        </Link>
        <Link
          to="/dashboard/config"
          className={isCurrentRoute('/dashboard/config') ? 'is-active' : ''}
        >
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
