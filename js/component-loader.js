/**
 * Component Loader
 * Script para carregar componentes HTML dinamicamente
 * Versão alternativa que não usa fetch para evitar problemas de CORS
 */

// Componentes pré-carregados para evitar problemas de CORS quando aberto diretamente no navegador
const componentsContent = {
  // Componente Header
  'header': `<div class="header-container">
  <div class="logo">
    <img src="images/logo.png" alt="PontoCom Logo" height="40">
  </div>
  <div class="nav-container">
    <a href="#inicio">Home</a>
    <a href="#servicos" class="icon-dropdown">Landings</a>
    <a href="#blocks">Blocks</a>
    <a href="#dashboard">Dashboard</a>
    <a href="#pages" class="icon-dropdown">Pages</a>
    <a href="#docs" class="icon-external">Docs</a>
  </div>
  <div class="nav-buttons">
    <button class="btn-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </button>
    <button class="btn-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
    </button>
    <button class="btn-primary">Promoções</button>
  </div>
</div>`,

  // Componente Hero
  'hero': `<div class="hero-container">
  <div class="kit-tag">One Kit, Endless <span class="possibilities">Possibilities</span></div>
  <h1>Multipurpose UI Kit and<br>Dashboard Template</h1>
  <div class="hero-divider"></div>
  <p>Design marketing pages and powerful admin dashboards with<br>ease using our UI Kit, built following Material 3 guidelines.</p>
  <div class="hero-buttons">
    <button class="btn-primary">Explore Blocks</button>
  </div>
  <div class="tech-icons">
    <div class="tech-icon">
      <img src="images/logo.png" alt="React" width="20">
      React 19
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="Next.js" width="20">
      Next.js
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="Material UI" width="20">
      Material UI v7
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="TypeScript" width="20">
      TypeScript
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="JavaScript" width="20">
      JavaScript
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="Material 3" width="20">
      Material 3
    </div>
    <div class="tech-icon">
      <img src="images/logo.png" alt="Figma" width="20">
      Figma
    </div>
  </div>
</div>`,

  // Componente About
  'about': `<h2>1. Sobre a Empresa</h2>
<p>A PontoCom é uma empresa moçambicana que atua desde 2021 com soluções em informática e design gráfico, promovendo marcas por meios digitais.</p>

<h3>1.1 Missão</h3>
<p>Prestar serviços com qualidade e conquistar a confiança dos nossos clientes.</p>

<h3>1.2 Visão</h3>
<p>Ser referência nacional em design e tecnologia.</p>

<h3>1.3 Valores</h3>
<ul>
  <li>Criatividade</li>
  <li>Inovação</li>
  <li>Comprometimento</li>
  <li>Pontualidade</li>
</ul>`,

  // Componente Services
  'services': `<h2>2. Nossos Serviços</h2>
<ul>
  <li><strong>Design Gráfico:</strong> Logotipos, identidade visual, banners, redes sociais</li>
  <li><strong>Marketing Digital:</strong> Redes sociais, anúncios, SEO, email marketing</li>
  <li><strong>Websites:</strong> Institucionais, blogs, lojas online, landing pages</li>
  <li><strong>Vídeo:</strong> Reels, motion graphics, animações (em breve)</li>
</ul>`,

  // Componente Plans
  'plans': `<h2>3. Planos Mensais</h2>
<p>Oferecemos pacotes a partir de <strong>3.000 MT/mês</strong> com conteúdos, agendamento, relatórios e gestão de anúncios.</p>`,

  // Componente Contact
  'contact': `<h2>4. Fale Connosco</h2>
<p><strong>Email:</strong> pcommoz@gmail.com</p>
<p><strong>WhatsApp:</strong> +258 877 185 421</p>
<p><strong>Redes Sociais:</strong> @pcommoz</p>
<p><strong>Localização:</strong> Maputo e Beira</p>`,

  // Componente Footer
  'footer': `© 2025 PontoCom - Informática e Design Gráfico. Todos os direitos reservados.`
};

document.addEventListener('DOMContentLoaded', () => {
  const componentElements = document.querySelectorAll('[data-component]');
  
  componentElements.forEach((element) => {
    const componentName = element.getAttribute('data-component');
    
    if (componentsContent[componentName]) {
      element.innerHTML = componentsContent[componentName];
    } else {
      console.error(`Componente não encontrado: ${componentName}`);
      element.innerHTML = `<p>Erro: Componente não encontrado: ${componentName}</p>`;
    }
  });

  // Sticky Navbar on Scroll
  const navContainer = document.querySelector('.nav-container');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navContainer.classList.add('sticky');
    } else {
      navContainer.classList.remove('sticky');
    }
    
    lastScrollTop = scrollTop;
  });
});