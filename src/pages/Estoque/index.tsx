import React from 'react';

import Moto from '../../assets/moto_moto.jpg';
import './styles.scss';

import { ImPencil } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';
import { FiLink2 } from 'react-icons/fi';

import { GoSearch } from 'react-icons/go';

const Estoque: React.FC = () => {
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
        <span>
          <FaTrashAlt size={16} />
          excluir
        </span>
        <span>
          <FiLink2 size={16} />
          ativar anúncio
        </span>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>MOTO</td>
            <td>PREÇO ANUNCIADO</td>
            <td>STATUS ANÚNCIO</td>
            <td>CONFIGURAÇÃO</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div style={{width: "100%"}}>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="price">
                <p>R$40.000,00</p>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Publicado</span>
                <span>desativar anúncio</span>
              </div>
            </td>
            <td>
              <div className="buttons">
                <button type="submit">
                  <ImPencil size={14} />
                  editar
                </button>
                <button type="submit">
                  <FaTrashAlt size={14} />
                  excluir
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Estoque;
