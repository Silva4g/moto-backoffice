import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { FaBullhorn, FaMotorcycle } from 'react-icons/fa';
import { FiChevronRight, FiCamera } from 'react-icons/fi';
import { BiCommentDetail, BiTrendingUp } from 'react-icons/bi';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="profille">
        <div className="perfil">
          <div>
            <FiCamera size={30} color="#b8b8b8" />
          </div>
          <p>Nome da Loja</p>
        </div>
        <div className="banner">
          <FiCamera size={45} color="#b8b8b8" />
        </div>
      </div>
      <div className="menuDashboard">
        <Link to="/dashboard/proposta" className="option">
          <div>
            <div className="icon">
              <div>
                <BiCommentDetail color="#3e9d60" size={26} />
              </div>
              <p>Propostas</p>
            </div>
          </div>
          <div>
            <div>
              <div className="span">
                <p>15</p> Propostas
                <FiChevronRight />
              </div>
              <span>recebidas essa hoje</span>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/anuncio" className="option">
          <div>
            <div className="icon">
              <div>
                <FaBullhorn color="#3e9d60" size={26} />
              </div>
              <p>Anúncios</p>
            </div>
          </div>
          <div>
            <div>
              <div className="span">
                <p>26</p> Motos
                <FiChevronRight />
              </div>
              <span>recebidas essa hoje</span>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/estoque" className="option">
          <div>
            <div className="icon">
              <div>
                <FaMotorcycle color="#3e9d60" size={26} />
              </div>
              <p>Estoque</p>
            </div>
          </div>
          <div>
            <div>
              <div className="span">
                <p>30</p> Motos
                <FiChevronRight />
              </div>
              <span>em seu estoque</span>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/relatorio" className="option">
          <div>
            <div className="icon">
              <div>
                <BiTrendingUp color="#3e9d60" size={26} />
              </div>
              <p>Relatórios</p>
            </div>
          </div>
          <div>
            <div>
              <div className="span">
                <p>1600</p> vizualizações
                <FiChevronRight />
              </div>
              <span>de anúncios esse mês</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
