//StatementSection.jsx
import "../styles/StatementSection.css";

/**
 * Componente que renderiza uma seção de depoimento.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.container - A classe CSS para o container da seção.
 * @param {string} props.mainText - A classe CSS para o texto principal (depoimento).
 * @param {string} props.subText - A classe CSS para o texto secundário (informação adicional).
 * @returns {JSX.Element} A seção de depoimento renderizada.
 */
export default function StatementSection({ container, mainText, subText }) {
  return (
    // Seção principal do componente com a classe CSS fornecida
    <section className={container}>
      {/* Texto principal do depoimento com a classe CSS fornecida */}
      <h3 className={mainText}>
        "Uma Instituição que tem todo o meu respeito e que sem dúvidas poderá
        contar com o meu apoio, a fim de que outras crianças e adolescentes
        possam também sentir-se acolhidas e motivadas. Desejo que o Senhor
        continue abençoando todos aqueles que fazem parte do Lar São Domingos,
        são seres iluminados, sem dúvidas!"
      </h3>
      {/* Texto secundário com informações adicionais e a classe CSS fornecida */}
      <p className={subText}>
        Depoimento de Francisca, que contribui todos os meses para o Lar.
      </p>
    </section>
  );
}
