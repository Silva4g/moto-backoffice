import React from 'react';

import Moto from '../../assets/moto_moto.jpg';
import './styles.scss';

const Relatorios: React.FC = () => {
  return (
    <div className="content">
      <header className="header2">
        <div className="header-report">
          <span>Vizualizações</span>
          <p>753</p>
        </div>
        <div className="header-report">
          <span>Propostas</span>
          <p>100</p>
        </div>
        <div className="header-report">
          <span>Whatsapp</span>
          <p>35</p>
        </div>
        <div className="header-report">
          <span>Ligação</span>
          <p>15</p>
        </div>
        <div className="header-report">
          <span>Filtrar de</span>
          <input type="date" name="" id="" />
          <span>Até</span>
          <input type="date" name="" id="" />
        </div>
      </header>
      <table className="table">
        <thead>
          <tr>
            <td>ANÚNCIO</td>
            <td>CRIADO EM</td>
            <td>VIZUALIZAÇÕES</td>
            <td>PROPSTAS</td>
            <td>WHATSAPP</td>
            <td>LIGAÇÃO</td>
            <td>PRIORIDADE</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>1º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>2º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>3º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>4º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>5º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>6º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>7º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>8º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="indexmoto2">
                <p>9º</p>
                <img src={Moto} width={100} alt="" />
                <div style={{ width: '100%' }}>
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
              <div className="price2">
                <p>20/08/2020</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>90</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>25</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>23</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>2</p>
              </div>
            </td>
            <td>
              <div className="price2">
                <p>Super Destaque</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Relatorios;
