import "../styles/AboutSection.css";

export default function AboutSection({ container, mainText, subText }) {
  return (
    <section className={container}>
      <h3 className={mainText}>
        "Uma Instituição que tem todo o meu respeito e que sem dúvidas poderá
        contar com o meu apoio, a fim de que outras crianças e adolescentes
        possam também sentir-se acolhidas e motivadas. Desejo que o Senhor
        continue abençoando todos aqueles que fazem parte do Lar São Domingos,
        são seres iluminados, sem dúvidas!"
      </h3>
      <p className={subText}>
        Depoimento de Francisca, que contribui todos os meses para o Lar.
      </p>
    </section>
  );
}
