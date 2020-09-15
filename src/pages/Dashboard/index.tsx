import React from 'react';

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
        <div className="option">
          <div>
            <div className="icon">
              <BiCommentDetail color="#3e9d60" size={30} />
            </div>
            <p>Propostas</p>
          </div>
          <div>
            <div>
              <div className="span">
                <p>15</p> Propostas
              </div>
              <p>recebidas essa hoje</p>
            </div>
          </div>
          <FiChevronRight />
        </div>
        <div className="option">
          <div>
            <div className="icon">
              <FaBullhorn color="#3e9d60" size={30} />
            </div>
            <p>Anúncios</p>
          </div>
          <div>
            <div>
              <div className="span">
                <p>26</p> Motos
              </div>
              <p>recebidas essa hoje</p>
            </div>
          </div>
          <FiChevronRight />
        </div>
        <div className="option">
          <div>
            <div className="icon">
              <FaMotorcycle color="#3e9d60" size={30} />
            </div>
            <p>Estoque</p>
          </div>
          <div>
            <div>
              <div className="span">
                <p>30</p> Motos
              </div>
              <p>em seu estoque</p>
            </div>
          </div>
          <FiChevronRight />
        </div>
        <div className="option">
          <div>
            <div className="icon">
              <BiTrendingUp color="#3e9d60" size={30} />
            </div>
            <p>Relatórios</p>
          </div>
          <div>
            <div>
              <div className="span">
                <p>1600</p> vizualizações
              </div>
              <p>de anúncios esse mês</p>
            </div>
          </div>
          <FiChevronRight />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
