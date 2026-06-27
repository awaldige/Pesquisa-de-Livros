# 📚 Pesquisa de Livros — Front-End Premium

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge" alt="Status Concluído">
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel" alt="Deploy Vercel">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

Uma aplicação web moderna, responsiva e performática desenvolvida para pesquisar livros em tempo real utilizando a **Google Books API**. O projeto conta com uma interface de alta fidelidade visual baseada em conceitos de **Glassmorphism** (efeito de vidro jateado) e modo escuro nativo.

Desenvolvido com foco em boas práticas de JavaScript assíncrono, tratamento seguro de dados e portfólio de engenharia front-end.

---

## 🌐 Acesse o Projeto Online

🔗 **[https://pesquisa-de-livros.vercel.app/](https://pesquisa-de-livros.vercel.app/)**

---

## 🚀 Funcionalidades Principais

* **Busca Inteligente:** Pesquisa avançada combinando ou isolando os filtros de título (`intitle:`) e autor (`inauthor:`).
* **UI/UX Premium:** Design imersivo estilo *Tech Dashboard* com microinterações suaves, efeitos hover dinâmicos e carregamento animado (*Pulse Loading*).
* **Cards Dinâmicos:** Exibição da capa da obra com efeito de profundidade, título, autores, data de publicação e resumo truncado de forma elegante.
* **Segurança de Conteúdo:** Tratamento forçado de URLs de imagens para HTTPS, prevenindo bloqueios de *mixed content* em navegadores modernos.
* **Tratamento de Rate Limit:** Arquitetura preparada com validações específicas para o status HTTP `429` (Too Many Requests), melhorando a experiência do usuário em caso de sobrecarga.
* **Limpeza Nativa:** Botão de reset rápido que restaura o estado inicial do DOM e do formulário nativamente.
* **Responsividade Total:** Interface adaptável para uma experiência perfeita em dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** — Estruturação semântica e acessível da aplicação.
* **CSS3 (Custom Properties)** — Estilização moderna via variáveis globais, Flexbox, CSS Grid nativo e efeitos de desfoque (`backdrop-filter`).
* **JavaScript (ES6+)** — Lógica assíncrona baseada em `async/await`, manipulação precisa do DOM com templates literais e processamento de dados (`map`, `join`, `slice`).
* **Google Books API** — Integração com o ecossistema de dados públicos do Google.

---

## 📸 Prévia do Projeto

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e3e38d0-7f99-40d9-a55a-d50ddb23f424" alt="Interface de Pesquisa" width="100%">
</p>

---

## 🎯 Conceitos de Engenharia Aplicados

Este projeto foi construído para simular um cenário real de desenvolvimento front-end, aplicando conceitos como:
* **Consumo de APIs RESTful** de forma otimizada.
* **Tratamento de Erros e Exceções** em requisições de rede utilizando blocos `try/catch`.
* **Performance de Carregamento:** Uso de atributos modernos como `loading="lazy"` nas imagens injetadas.
* **Manutenibilidade:** Separação rígida de responsabilidades em arquivos limpos e organizados de CSS e JS.

---

## ▶️ Como Executar o Projeto Localmente

1. Clone este repositório em sua máquina:
   ```bash
   git clone [https://github.com/awaldige/Pesquisa-de-Livros.git](https://github.com/awaldige/Pesquisa-de-Livros.git)
Entre na pasta do projeto:

Bash
cd Pesquisa-de-Livros
Abra o projeto utilizando um servidor local para evitar bloqueios de políticas de CORS do navegador.

No VS Code, você pode usar a extensão Live Server (clicando com o botão direito no index.html e selecionando Open with Live Server).

Ou utilizando o Node.js:

Bash
npx serve .
🔮 Evoluções Futuras
[ ] Implementação de paginação infinita ou baseada em botões de resultados.

[ ] Filtros refinados por idioma, categoria ou relevância de ordenação.

[ ] Funcionalidade de "Favoritar Livro" persistida no localStorage do navegador.

[ ] Esqueleto de carregamento (Skeleton Screens) substituindo a mensagem de texto atual.

👨‍💻 Autor
Desenvolvido por André Waldige Se você gostou deste projeto ou quer trocar uma ideia sobre desenvolvimento web, entre em contato!

LinkedIn: andre-waldige-dev

GitHub: @awaldige

Developed with 💻, ☕ and Clean Code.
