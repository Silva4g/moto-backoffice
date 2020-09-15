import React from 'react';
import './styles.scss';

import Moto from '../../assets/moto_moto.jpg';

import { GoSearch } from 'react-icons/go';

const Anuncio: React.FC = () => {
  return (
    <div className="content">
      <header className="header">
        <div className="input">
          <GoSearch size={20} />
          <input
            type="text"
            name=""
            placeholder="Marca, Modelo, placa ou Código do anúncio"
            id=""
            style={{ border: 'none', width: '100%' }}
          />
        </div>
        <div>
          <span>Filtrar por</span>
          <select name="" id="">
            <option value="" selected>
              Menor preço
            </option>
            <option value="">Maior preço</option>
            <option value="">Mais visitados</option>
          </select>
        </div>
      </header>
      <div className="selectTable">
        <div>
          <input type="checkbox" name="" id="" />
          <span>Selecionar todos</span>
        </div>
        <span>Trocar Prioridade &gt;</span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>MOTO</td>
            <td>PREÇO ANUNCIADO</td>
            <td>ENGAJAMENTO</td>
            <td>TOP OFERTA</td>
            <td>PRIORIDADE</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={119} alt="" />
                <div>
                  <span>
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </span>
                  <p>ABC-123</p>
                  <p>1000km</p>
                  <p>Azul</p>
                  <p>Criado em 12/08/2020</p>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p>R$40.000,00</p>
              </div>
            </td>
            <td>
              <div className="flexcolumn-td">
                <span>
                  Vizualizações
                  <span>753</span>
                </span>
                <span>
                  Propostas
                  <span>10</span>
                </span>
              </div>
            </td>
            <td>
              <div className="flexcolumn-td">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="flexcolumn-td">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
            <td>
              <button type="submit">editar</button>
              <button type="submit">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Anuncio;
