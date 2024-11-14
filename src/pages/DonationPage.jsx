import React from "react";
import "../styles/DonationPage.css";

const DonationPage = () => {
  return (
    <div className="donation-page">
      <div className="donation-section donation-info">
        <h1>Faça sua Doação</h1>
        <div id="qr-code" className="info-section-account">
          <h3>Doe via PIX</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://exemplo.com/doacao"
            alt="QR Code para Doação"
          />
        </div>
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
        <div id="telemarketing" className="info-section-account">
          <h3>Doe via Telemarketing</h3>
          <p>
            Ligue para: <a href="tel:+558298221211300">(82) 2121-1300</a>
          </p>
        </div>
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
        <video id="nfcidada-tutorial" controls>
          <source
            src="/assets/videos/LarSaoDomingoNFCidada.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta a tag de vídeo.
        </video>
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
        <p id="agradecimento">
          O Lar São Domingos agradece toda forma de apoio!
        </p>
        </div>
    </div>
  );
};

export default DonationPage;
