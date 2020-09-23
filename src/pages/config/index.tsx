import React from 'react';

import './styles.scss';

const Config: React.FC = () => {
  return (
    <div className="contentConfig">
      <div className="data">
        <p>Dados da empresa</p>
        <span>Sua loja é:</span>
        <form action="" method="post">
          <div>
            <input type="radio" name="" id="" />
            <p>Concessionária</p>
          </div>
          <div>
            <input type="radio" name="" id="" />
            <p>MultiMarcas</p>
          </div>
        </form>
        <div>
          CNPJ
          <input type="text" name="" id="" placeholder="Digite o CNPJ" />
        </div>
        <div>
          Razão Social
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite o nome da loja"
          />
        </div>
        <div>
          Telefone
          <input type="text" name="" id="" placeholder="Digite o Telefone" />
        </div>
        <div>
          E-mail
          <input type="text" name="" id="" placeholder="Digite o e-mail" />
        </div>
        <div>
          Inscrição Estadual
          <input type="text" name="" id="" placeholder="Digite a inscrição" />
        </div>
        <div>
          Inscrição Municipal
          <input type="text" name="" id="" placeholder="Digite a inscrição" />
        </div>
        <div>
          Média de vendas por mês
          <input type="text" name="" id="" placeholder="Digite a média" />
        </div>
        <div>
          Estoque médio
          <input type="text" name="" id="" placeholder="Digite o estoque" />
        </div>
      </div>
      <div className="data">
        <p>Localização</p>
        <div>
          CEP
          <input type="text" name="" id="" placeholder="Digite CEP" />
        </div>
        <div>
          Estado
          <input type="text" name="" id="" placeholder="Estado" />
        </div>
        <div>
          Cidade
          <input type="text" name="" id="" placeholder="Cidade" />
        </div>
        <div>
          Endereço
          <input type="text" name="" id="" placeholder="Endereço da loja" />
        </div>
      </div>
      <div className="data">
        <p>Contatos</p>
        <div>
          Responsável pela loja
          <input type="text" name="" id="" placeholder="Nome do Responsável" />
        </div>
        <div>
          Telefone
          <input type="text" name="" id="" placeholder="Digite o telefone" />
        </div>
        <div>
          Email do responsável
          <input type="text" name="" id="" placeholder="Digite o e-mail" />
        </div>
      </div>
      <div className="data">
        <p>Telefone para Contato</p>
        <button>% excluir</button>
        <div>
          Telefone
          <span>(19) 99876-5432</span>
        </div>
        <div>
          Autoriza Whatsapp 
          <span>Sim</span>
        </div>
        <div>
          Disponível no anúncio
          <span>Não</span>
        </div>
        <div>
          Disponível para SMS
          <span>Não</span>
        </div>
      </div>
      <div className="data">
        <div>
          Telefone
          <input type="text" placeholder="Digite o telefone" />
        </div>
        <div className="checkboxinput">
          <input type="checkbox" name="" id="" />
          <span>Autoriza Whatsapp</span>
          <input type="checkbox" name="" id="" />
          <span>Disponível no Anuncio</span>
          <input type="checkbox" name="" id="" />
          <span>Disponível para SMS</span>
        </div>
        <button className="otherbutton">Adicionar Contato</button>
      </div>
      <div className="data">
        <p>Alterar Senha</p>
        <div>
          Senha Atual
          <input type="text" name="" id="" placeholder="Senha atual" />
        </div>
        <div>
          Nova Senha
          <input type="text" name="" id="" placeholder="Nova senha" />
        </div>
        <div>
          Confirme a nova Senha
          <input type="text" name="" id="" placeholder="Confirmar nova senha" />
        </div>
      </div>
      <button>Salvar</button>
    </div>
  );
};

export default Config;
