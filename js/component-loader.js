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
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#planos">Planos</a>
    <a href="#contato">Contato</a>
  </div>
  <div class="nav-buttons">
    <button class="btn-icon" title="Facebook">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>
    </button>
    <button class="btn-icon" title="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
    </button>
    <button class="btn-primary">Orçamento Grátis</button>
  </div>
</div>`,

  // Componente Hero
  'hero': `<div class="hero-container">
  <div class="kit-tag">Sua marca, nossa <span class="possibilities">Paixão</span></div>
  <h1>Simplifique sua Presença </br>Digital</h1>
 
  <div class="tech-icons">
    <div class="tech-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      Design Gráfico
    </div>
    <div class="tech-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
      Marketing Digital
    </div>
    <div class="tech-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
      Websites
    </div>
    <div class="tech-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      SEO
    </div>
    <div class="tech-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      Branding
    </div>
  </div>
</div>`,

  // Componente About
  'about': `<h2>Sobre a PontoCom</h2>
<p>A PontoCom é uma empresa moçambicana que atua desde 2021 com soluções em informática e design gráfico, promovendo marcas por meios digitais. Somos especialistas em transformar ideias em realidade digital.</p>

<div class="about-grid">
  <div class="card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
    <h3>Nossa Missão</h3>
    <p>Prestar serviços com qualidade e conquistar a confiança dos nossos clientes, oferecendo soluções digitais inovadoras que impulsionam o crescimento dos negócios.</p>
  </div>
  
  <div class="card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    </div>
    <h3>Nossa Visão</h3>
    <p>Ser referência nacional em design e tecnologia, reconhecida pela excelência e inovação em soluções digitais para empresas moçambicanas.</p>
  </div>
  
  <div class="card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    <h3>Nossos Valores</h3>
    <ul class="values-list">
      <li>Criatividade e Inovação</li>
      <li>Comprometimento com Resultados</li>
      <li>Pontualidade e Profissionalismo</li>
      <li>Transparência e Confiança</li>
    </ul>
  </div>
</div>`,

  // Componente Services
  'services': `<h2>Nossos Serviços</h2>
<p>Oferecemos soluções completas para fortalecer sua presença digital e impulsionar seu negócio.</p>

<div class="services-grid">
  <div class="card service-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
    <h3>Design Gráfico</h3>
    <p>Criamos identidades visuais marcantes: logotipos, materiais gráficos, banners e conteúdo para redes sociais que destacam sua marca no mercado.</p>
  </div>
  
  <div class="card service-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    </div>
    <h3>Marketing Digital</h3>
    <p>Estratégias completas de marketing: gestão de redes sociais, campanhas de anúncios, SEO e email marketing para aumentar sua visibilidade online.</p>
  </div>
  
  <div class="card service-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
    </div>
    <h3>Desenvolvimento Web</h3>
    <p>Sites institucionais, blogs, lojas online e landing pages responsivas e otimizadas para conversão e experiência do usuário.</p>
  </div>
  
  <div class="card service-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14,6V4H5V21H7V14H12V21H14V6H14Z"/>
      </svg>
    </div>
    <h3>Produção de Vídeo</h3>
    <p>Reels, motion graphics, animações e conteúdo audiovisual para engajar sua audiência nas plataformas digitais. <em>(Em breve)</em></p>
  </div>
</div>`,

  // Componente Plans
  'plans': `<h2>Planos e Pacotes</h2>
<p>Escolha o plano ideal para impulsionar sua presença digital com soluções personalizadas.</p>

<div class="plans-container">
  <div class="card plan-card">
    <div class="plan-header">
      <div class="card-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <h3>Pacote Marketing Digital</h3>
      <div class="price">
        <span class="currency">MT</span>
        <span class="amount">3.000</span>
        <span class="period">/mês</span>
      </div>
    </div>
    
    <div class="plan-features">
      <div class="feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Criação de conteúdos personalizados
      </div>
      <div class="feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Agendamento automático de posts
      </div>
      <div class="feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Relatórios mensais de performance
      </div>
      <div class="feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Gestão profissional de anúncios
      </div>
      <div class="feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Suporte técnico especializado
      </div>
    </div>
    
    <button class="btn-primary">Solicitar Orçamento</button>
  </div>
</div>

<div class="plans-note">
  <p><strong>Nota:</strong> Todos os planos incluem consultoria inicial gratuita e podem ser personalizados conforme suas necessidades específicas.</p>
</div>`,

  // Componente Contact
  'contact': `<h2>Fale Connosco</h2>
<p>Entre em contato e descubra como podemos transformar sua presença digital.</p>

<div class="contact-grid">
  <div class="card contact-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </div>
    <h3>Email</h3>
    <p>pcommoz@gmail.com</p>
    <button class="btn-secondary">Enviar Email</button>
  </div>
  
  <div class="card contact-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    </div>
    <h3>WhatsApp</h3>
    <p>+258 877 185 421</p>
    <button class="btn-primary">Iniciar Conversa</button>
  </div>
  
  <div class="card contact-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    <h3>Redes Sociais</h3>
    <p>@pcommoz</p>
    <button class="btn-secondary">Seguir</button>
  </div>
  
  <div class="card contact-card">
    <div class="card-icon">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>
    <h3>Localização</h3>
    <p>Maputo e Beira</p>
    <button class="btn-secondary">Ver no Mapa</button>
  </div>
</div>`,

  // Componente Footer
  'footer': `<div class="footer-content">
  <div class="footer-logo">
    <img src="images/logo.png" alt="PontoCom Logo" height="32">
    <span class="logo-text">.pontocom</span>
  </div>
  
  <div class="footer-links">
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#planos">Planos</a>
    <a href="#contato">Contato</a>
  </div>
  
  <div class="footer-social">
    <a href="#" class="social-icon" title="Facebook">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>
    <a href="#" class="social-icon" title="Instagram">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>
    <a href="#" class="social-icon" title="WhatsApp">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </a>
  </div>
  
  <div class="footer-divider"></div>
  
  <div class="footer-copyright">
    <p>© 2025 PontoCom - Informática e Design Gráfico. Todos os direitos reservados.</p>
    <p class="footer-location">Maputo e Beira, Moçambique</p>
  </div>
</div>`
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
      // Removendo a classe no-transition antes de adicionar sticky
      navContainer.classList.remove('no-transition');
      navContainer.classList.add('sticky');
    } else {
      // Adicionando no-transition para desabilitar animação ao voltar ao topo
      navContainer.classList.add('no-transition');
      navContainer.classList.remove('sticky');

      // Removendo no-transition após um pequeno delay
      setTimeout(() => {
        navContainer.classList.remove('no-transition');
      }, 50);
    }

    lastScrollTop = scrollTop;
  });
});