import React, { useEffect, useRef } from 'react';
import './styles.scss';

import { GoSearch } from 'react-icons/go';
import Moto from '../../assets/moto_moto.jpg';

const Anuncio: React.FC = () => {
  const buscaInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    buscaInputRef.current?.focus();
  }, []);

  return (
    <div className="content">
      <header className="header">
        <div className="input">
          <GoSearch size={20} />
          <input
            type="text"
            ref={buscaInputRef}
            name=""
            placeholder="Marca, Modelo, placa ou Código do anúncio"
            id=""
            style={{ border: 'none', width: '100%' }}
          />
        </div>
        <div>
          <span>Filtrar por</span>
          <select name="" id="">
            <option value="cheaperPrice" selected>
              Menor preço
            </option>
            <option value="expancivePrice">Maior preço</option>
            <option value="newer">Mais novas</option>
            <option value="older">Mais antigas</option>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p>- 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                    <span className="informations">Criado em 12/08/2020</span>
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
              <div className="engagement">
                <div>Vizualizações Propostas</div>
                <div>753 10</div>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                    <span className="informations">Criado em 12/08/2020</span>
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
              <div className="engagement">
                <div>Vizualizações Propostas</div>
                <div>753 10</div>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                    <span className="informations">Criado em 12/08/2020</span>
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
              <div className="engagement">
                <div>Vizualizações Propostas</div>
                <div>753 10</div>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                    <span className="informations">Criado em 12/08/2020</span>
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
              <div className="engagement">
                <div>Vizualizações Propostas</div>
                <div>753 10</div>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto">
                <input type="checkbox" name="" id="" />
                <img src={Moto} width={100} alt="" />
                <div>
                  <p className="informations">
                    <p>KAWASAKI ER 5</p> - 2013/2014
                  </p>
                  <div>
                    <span className="informations textbackground">ABC-123</span>
                    <span className="informations">1000km</span>
                    <span className="informations">Azul</span>
                    <span className="informations">Criado em 12/08/2020</span>
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
              <div className="engagement">
                <div>Vizualizações Propostas</div>
                <div>753 10</div>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>R$39.000,00</span>
                <span>Definir Top Oferta &gt;</span>
              </div>
            </td>
            <td>
              <div className="bestoffert">
                <span>Super Destaque</span>
                <span>Trocar Prioridade &gt;</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Anuncio;
