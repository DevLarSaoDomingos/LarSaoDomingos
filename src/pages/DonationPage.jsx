//DonationPage.jsx
import React from "react";
import "../styles/DonationPage.css";

/**
 * Componente DonationPage
 *
 * Este componente renderiza a página de doações para a instituição Lar São Domingos.
 * Ele fornece várias opções de doação, incluindo PIX, transferência bancária, telemarketing
 * e doações internacionais. Além disso, informa sobre o programa Nota Fiscal Cidadã e
 * como os usuários podem contribuir sem gastar nada.
 *
 * @component
 * @example
 * return (
 *   <DonationPage />
 * )
 *
 * @returns {JSX.Element} A página de doações com várias opções de contribuição.
 */
const DonationPage = () => {
  return (
    <div className="donation-page">
      {/* Seção de informações de doação */}
      <div className="donation-section donation-info">
        <h1>Faça sua Doação</h1>
        
        {/* Doação via PIX */}
        <div id="qr-code" className="info-section-account">
          <h3>Doe via PIX</h3>
          <img
            src="assets/img/qrcodepix.jpg"
            alt="QR Code para Doação"
          />
        </div>
        
        {/* Doação via Transferência Bancária */}
        <div id="bank-details" className="info-section-account">
          <h3>Doe via Transferência Bancária</h3>
          <p>
            <strong>Banco:</strong> 001 | Banco do Brasil - Instituição Lar São
            Domingos
          </p>
          <p>
            <strong>CNPJ:</strong> 12.183.760/0001-60
          </p>
          <p>
            <strong>Agência:</strong> 1523-7
          </p>
          <p>
            <strong>Conta:</strong> 126000-6
          </p>
        </div>
        
        {/* Doação via Telemarketing */}
        <div id="telemarketing" className="info-section-account">
          <h3>Doe via Telemarketing</h3>
          <p>
            Ligue para: <a href="tel:+558298221211300">(82) 2121-1300</a>
          </p>
        </div>
        
        {/* Doações internacionais */}
        <div id="doacao-internacional" className="info-section-account">
          <h3>Para doações internacionais:</h3>
          <p>
            <strong>Banco:</strong> 001 | Banco do Brasil - Instituição Lar São
            Domingos
          </p>
          <p>
            <strong>Agência:</strong> 1523-7
          </p>
          <p>
            <strong>Conta:</strong> 126000-6
          </p>
          <p title="International Bank Account Number">
            <strong>IBAN:</strong> BBR9400000000015230001260006C1
          </p>
        </div>
      </div>
      
      {/* Seção de instruções sobre Nota Fiscal Cidadã */}
      <div className="donation-section instructions">
        <h1>Lar São Domingos no Nota Fiscal Cidadã</h1>
        <div className="instruction-description">
          <p>
            Você sabia que é possível ajudar o Lar São Domingos sem gastar nada?
          </p>
          <p>
            Através do programa{" "}
            <a
              href="https://nfa.sefaz.al.gov.br/nfa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nota Fiscal Cidadã
            </a>
            , você pode doar parte do valor de suas compras para a instituição.
          </p>
          <p id="chamada-video">
            Assista o vídeo abaixo e descubra como pode nos apoiar!
          </p>
        </div>
        
        {/* Vídeo tutorial sobre Nota Fiscal Cidadã */}
        <video id="nfcidada-tutorial" controls>
          <source
            src="/assets/videos/LarSaoDomingoNFCidada.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta a tag de vídeo.
        </video>
        
        {/* Lista de instruções para cadastrar Nota Fiscal Cidadã */}
        <div className="listagem-tutorial">
          <ul>
            <li>Acesse o site da Nota Fiscal Cidadã.</li>
            <li>Faça login com seu CPF e senha.</li>
            <li>Escolha a opção para vincular uma instituição.</li>
            <li>
              Selecione nossa instituição de caridade LAR SÃO DOMINGOS na lista.
            </li>
            <li>
              Cliquem em salvar e pronto! Sua doação será direcionada
              automaticamente.
            </li>
          </ul>
          <a
            href="https://nfa.sefaz.al.gov.br/nfa/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Cadastrar Nota Fiscal Cidadã
          </a>
        </div>
        
        {/* Mensagem de agradecimento */}
        <p id="agradecimento">
          O Lar São Domingos agradece toda forma de apoio!
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
