import React from 'react';
import './styles.scss';

const Nitro: React.FC = () => 
    <>
        <div className='grid'>
            <div className='red'>
                <div className='conteudo'>
                    <div>
                        <div><span>Sua Loja</span></div>
                        <div className='divisor' />
                        <div><span>Nitro</span></div>
                    </div>
                    <div><span>15 dias</span></div>
                    <button>Ativar Nitro</button>
                </div>
            </div>
            <div className='green' style={{ alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <div className='conteudo'>
                    <h1>Verde</h1>
                </div>
            </div>
            <div className='blue'>
                <div className='conteudo'>
                    <table>
                        <thead>
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
                    <h1>Amarelo</h1>
                </div>
            </div>
        </div>
    </>
;

export default Nitro;
