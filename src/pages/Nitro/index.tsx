import React from 'react';
import './styles.scss';
import { Whatshot, StarTwoTone } from '@material-ui/icons';

const Nitro: React.FC = () => 
    <>
        <div className='grid'>
            <div className='red'>
                <div className='conteudo'>
                    <div>
                        <div><StarTwoTone /><span>Sua Loja</span></div>
                        <div className='divisor' />
                        <div><Whatshot /><span>Nitro</span></div>
                    </div>
                    <div><span><strong>15 dias</strong> para renovação</span></div>
                    <button>Ativar Nitro</button>
                </div>
            </div>
            <div className='green' style={{ alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <div className='conteudo'>
                    <h3 style={{ textAlign: 'left' }}>Visualizações da Loja</h3>
                    <h1>Verde</h1>
                </div>
            </div>
            <div className='blue'>
                <div className='conteudo'>
                    <h3 style={{ textAlign: 'left' }}>Extrato de Nitros</h3>
                    <strong>Sistema de Busca</strong>
                    <table>
                        <thead style={{ backgroundColor: '#c7c7c7' }}>
                            <tr>
                                <td>Data</td>
                                <td>Hora</td>
                                <td>Valor</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25/08/2020</td>
                                <td>12:30</td>
                                <td>R$ 0,00</td>
                            </tr>
                            <tr>
                                <td>25/08/2020</td>
                                <td>12:30</td>
                                <td>R$ 0,00</td>
                            </tr>
                            <tr>
                                <td>25/08/2020</td>
                                <td>12:30</td>
                                <td>R$ 0,00</td>
                            </tr>
                            <tr>
                                <td>25/08/2020</td>
                                <td>12:30</td>
                                <td>R$ 0,00</td>
                            </tr>
                            <tr>
                                <td>25/08/2020</td>
                                <td>12:30</td>
                                <td>R$ 0,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='yellow'>
                <div className='conteudo'>
                    <h3 style={{ textAlign: 'left' }}>Top Ofertas</h3>
                    <h1>Amarelo</h1>
                </div>
            </div>
        </div>
    </>
;

export default Nitro;
