import React from "react";
import "../styles/DonationPage.css";

const DonationPage = () => {
  return (
    <div className="donation-page">
      <div className="donation-section instructions">
        <h1>Como cadastrar a instituição na Nota Fiscal Cidadã</h1>
        <img
          style={{ marginBottom: "1rem" }}
          src="../assets/img/NotaFiscal.png"
          alt="Logo"
        />
        <p>1. Acesse o site da Nota Fiscal Cidadã.</p>
        <p>2. Faça login com seu CPF e senha.</p>
        <p>3. Escolha a opção para vincular uma instituição.</p>
        <p>4. Selecione nossa instituição de caridade na lista.</p>
        <p>
          5. Confirme e pronto! Sua doação será direcionada automaticamente.
        </p>
        <button
          onClick={() =>
            window.open("https://nfa.sefaz.al.gov.br/nfa/", "_blank")
          }
          style={{
            backgroundColor: "#0099ff",
            color: "white",
            padding: "20px 40px",
            fontSize: "1.5rem",
            border: "none",
            borderRadius: "100px",
            cursor: "pointer",
            marginTop: "1rem",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0099ff")}
        >
          Cadastrar Nota Fiscal Cidadã
        </button>
      </div>
      <div className="donation-section donation-info">
        <h1>Faça sua Doação</h1>
        <div className="qr-code">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://exemplo.com/doacao"
            alt="QR Code para Doação"
          />
        </div>
        <div className="bank-details">
          <p>Banco: 000 - Instituição XYZ</p>
          <p>Agência: 1234</p>
          <p>Conta: 56789-0</p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
