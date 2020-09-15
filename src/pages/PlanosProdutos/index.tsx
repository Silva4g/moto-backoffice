import React from 'react';

import { MdStars } from 'react-icons/md';
import { AiTwotoneCrown } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';

import './styles.scss';

const PlanosProdutos: React.FC = () => {
  return (
    <div className="content-planos">
      <div className="container-planos">
        <div className="title-planos">
          <div style={{ backgroundColor: '#d3ebe0' }}>
            <ImFire size={25} color="#1A9C60" />
          </div>
          <span>Nitro</span>
        </div>
        <div className="info-planos">
          <p>40</p>restantes
        </div>
        <span className="span-planos">
          Ao usar o nitro sua top oferta ganha destaque <br /> na home do
          Moto.com.br
        </span>
        <div className="option-planos">
          <button className="activate-planos" type="submit">
            Ativar
          </button>
          <button className="buy-planos" type="submit">
            Comprar
          </button>
        </div>
      </div>
      <div className="container-planos">
        <div className="title-planos">
          <div style={{ backgroundColor: '#e1ecf8' }}>
            <MdStars size={30} color="#1c6bc7" />
          </div>
          <span>Destaques</span>
        </div>
        <div className="info-planos">
          <p>Ilimitado</p>
        </div>
        <span className="span-planos">
          Ao colocar um anúncio em Destaque ele aparecerá <br /> antes dos
          comuns!
        </span>
        <div className="option-planos">
          <button className="activate-planos" type="submit">
            Ativar
          </button>
        </div>
      </div>
      <div className="container-planos">
        <div className="title-planos">
          <div style={{ backgroundColor: '#fff1d6' }}>
            <AiTwotoneCrown size={25} color="#febb32" />
          </div>
          <span>Super Destaques</span>
        </div>
        <div className="info-planos">
          <p>30</p>restantes
        </div>
        <span className="span-planos">
          Ao colocar um anúncio em super destaque ele terá <br /> prioridade
          máxima!
        </span>
        <div className="option-planos">
          <button className="activate-planos" type="submit">
            Ativar
          </button>
          <button className="buy-planos" type="submit">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanosProdutos;
