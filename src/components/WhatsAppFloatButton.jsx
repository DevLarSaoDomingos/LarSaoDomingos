import React from 'react';

// Estilo para o ícone flutuante
const floatingButtonStyle = {
  position: 'fixed', // Fixa o botão na tela
  bottom: '20px', // Distância da parte inferior da tela
  right: '20px', // Distância da parte direita da tela
  backgroundColor: '#25D366',  // Cor do WhatsApp
  color: 'white', // Cor do ícone
  borderRadius: '50%', // Torna o botão circular
  padding: '15px', // Espaçamento interno do botão
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra do botão
  cursor: 'pointer', // Cursor de ponteiro ao passar o mouse
  fontSize: '24px', // Tamanho da fonte do ícone
  display: 'flex', // Usa flexbox para centralizar o ícone
  justifyContent: 'center', // Centraliza horizontalmente
  alignItems: 'center', // Centraliza verticalmente
  zIndex: 1000, // Garante que o botão fique acima de outros elementos
};

/**
 * Componente de botão flutuante do WhatsApp.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.phoneNumber - Número de telefone no formato internacional (com código do país) para o qual a mensagem será enviada.
 *
 * @returns {JSX.Element} Um link que abre uma conversa no WhatsApp com o número de telefone fornecido.
 */

const WhatsAppFloatButton = ({ phoneNumber }) => {
  // Certifique-se de que o número de telefone tenha o formato correto para WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}`; // Link para abrir o WhatsApp com o número fornecido

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> {/* Abre o link em uma nova aba */}
      <div style={floatingButtonStyle}>
        <i className="fab fa-whatsapp"></i>  {/* Aqui é utilizado o ícone do WhatsApp */}
      </div>
    </a>
  );
};

export default WhatsAppFloatButton;
