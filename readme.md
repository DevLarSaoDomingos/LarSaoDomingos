# Site Lar São Domingos

O projeto **Lar São Domingos** foi desenvolvido com o objetivo de promover a instituição e suas atividades. O site oferece uma interface interativa para os usuários conhecerem as iniciativas do Lar, fazerem doações, participarem de eventos e aprenderem mais sobre a missão da organização.

Este site foi construído utilizando **React**, **Apollo Client** para integração com uma API GraphQL, **React Router** para o gerenciamento de rotas e **CSS** para a estilização dos componentes.

## Funcionalidades

- **Rotas e Navegação**: A navegação entre as páginas é gerenciada pelo **React Router**, permitindo que os usuários acessem seções como **Atividades**, **Institucional**, **Doações**, **Notícias** e muito mais.
- **Pop-up de Doação**: Um pop-up de doação aparece automaticamente após **5 segundos de inatividade** do usuário, incentivando a contribuição para a causa.
- **Consultas GraphQL**: A comunicação com a API GraphQL é feita utilizando o **Apollo Client**, que gerencia o estado e as consultas de dados para garantir um desempenho otimizado.
- **Carrossel de Imagens**: A página inicial conta com um carrossel de imagens utilizando **React Slick** e **Slick Carousel** para exibir fotos de eventos, atividades e outros aspectos importantes do Lar São Domingos.
- **Responsividade**: O layout do site é totalmente responsivo, garantindo uma experiência de navegação fluída tanto em desktops quanto em dispositivos móveis.

## Estrutura do Projeto

A estrutura de arquivos do projeto é organizada da seguinte maneira:

📦public
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┣ 📂img
 ┃ ┣ 📂videos
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt

📦src
 ┣ 📂components
 ┃ ┣ 📜AboutSection.jsx
 ┃ ┣ 📜ActivitiesList.jsx
 ┃ ┣ 📜DoacaoPopUp.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜InfoSection.jsx
 ┃ ┣ 📜LocationSection.jsx
 ┃ ┣ 📜MainSlider.jsx
 ┃ ┣ 📜NavBar.jsx
 ┃ ┣ 📜NavInstitucional.jsx
 ┃ ┣ 📜NewsSection.jsx
 ┃ ┗ 📜StatementSection.jsx
 ┣ 📂pages
 ┃ ┣ 📜ActivitiesPage.jsx
 ┃ ┣ 📜AuditoriumList.jsx
 ┃ ┣ 📜DonationPage.jsx
 ┃ ┣ 📜HomePage.jsx
 ┃ ┣ 📜HugPage.jsx
 ┃ ┣ 📜InstitucionalPage.jsx
 ┃ ┣ 📜NewsPage.jsx
 ┃ ┗ 📜PostPage.jsx
 ┣ 📂styles
 ┃ ┣ 📜AboutSection.css
 ┃ ┣ 📜ActivitiesList.css
 ┃ ┣ 📜ActivitiesPage.css
 ┃ ┣ 📜AuditoriumList.css
 ┃ ┣ 📜DoacaoPopUp.css
 ┃ ┣ 📜DonationPage.css
 ┃ ┣ 📜Footer.css
 ┃ ┣ 📜HomePage.css
 ┃ ┣ 📜InfoSection.css
 ┃ ┣ 📜InstitucionalPage.css
 ┃ ┣ 📜LocationSection.css
 ┃ ┣ 📜MainSlider.css
 ┃ ┣ 📜NavBar.css
 ┃ ┣ 📜NavInstitucional.css
 ┃ ┣ 📜NewsPage.css
 ┃ ┣ 📜NewsSection.css
 ┃ ┣ 📜PostPage.css
 ┃ ┗ 📜StatementSection.css
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

### Explicação das Pastas e Arquivos

- **public**: Contém arquivos estáticos como ícones, imagens e vídeos.
- **src**: Contém todo o código-fonte do site.
  - **components**: Componentes reutilizáveis que compõem a interface, como `AboutSection`, `NavBar`, `Footer`, entre outros.
  - **pages**: Contém as páginas do site, como `HomePage`, `ActivitiesPage`, `DonationPage`, entre outras.
  - **styles**: Arquivos CSS que definem os estilos para cada componente e página.
  - **App.js**: O ponto de entrada principal, onde as rotas e o Apollo Client são configurados.
  - **index.js**: Arquivo responsável por renderizar o aplicativo na DOM.

## Instalação

### Requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados em seu ambiente de desenvolvimento.

### Passos para Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/larsaodomingos.git
    cd larsaodomingos
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

Isso iniciará o servidor local e abrirá a aplicação no navegador.

## Funcionalidades Detalhadas

### **Roteamento com React Router**
A navegação entre as páginas é gerenciada pelo **React Router**. Ele permite que a aplicação tenha várias páginas, como:
- **HomePage**: Página inicial com informações gerais sobre o Lar.
- **ActivitiesPage**: Lista de atividades realizadas pela instituição.
- **DonationPage**: Página para realizar doações.
- **InstitucionalPage**: Página com informações sobre a missão e visão do Lar São Domingos.
- E muito mais!

### **Integração com GraphQL e Apollo Client**
A aplicação utiliza **Apollo Client** para se comunicar com uma API GraphQL. O Apollo Client facilita a obtenção de dados dinâmicos de maneira eficiente, com suporte a cache para melhorar o desempenho. As consultas GraphQL são feitas em componentes específicos utilizando o hook `useQuery` do Apollo, como em:

```javascript
const { data, loading, error } = useQuery(GET_ACTIVITIES);
```

### **Pop-up de Doação**
Após 5 segundos de inatividade do usuário, o componente `DoacaoPopUp` é ativado para exibir um pop-up com informações sobre como realizar uma doação. Este comportamento é controlado através de um `setTimeout`, que monitora a atividade do usuário.

### **Carrossel de Imagens**
A página inicial conta com um **carrossel de imagens** (usando **React Slick** e **Slick Carousel**) que exibe fotos de eventos e atividades realizadas pelo Lar São Domingos. Esse componente proporciona uma maneira visualmente atrativa de destacar a atuação da instituição.

### **Responsividade**
A aplicação foi desenvolvida para ser totalmente responsiva, ou seja, ela se adapta automaticamente a diferentes tamanhos de tela, garantindo uma boa experiência de navegação em dispositivos móveis, tablets e desktops.

---

## **Tecnologias Usadas**
- **React** (v18.3.1)
- **Apollo Client** (v3.11.8)
- **React Router** (v6.27.0)
- **Slick Carousel** (v1.8.1)
- **React Slick** (v0.30.2)
- **CSS** (modular, por componente)
- **JavaScript** (ES6+)

## **Contribuindo**
Se você deseja contribuir para este projeto, por favor, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações (`git checkout -b feature/novos-recurso`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando novo recurso'`).
4. Envie sua branch para o repositório remoto (`git push origin feature/novos-recurso`).
5. Abra um Pull Request.

## **Licença**
Este projeto é licenciado sob a [MIT License](LICENSE).

