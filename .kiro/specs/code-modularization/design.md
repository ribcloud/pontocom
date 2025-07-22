# Design Document

## Overview

Este documento descreve o design técnico para a modularização do site PontoCom. A abordagem envolve separar o código HTML, CSS e potencialmente JavaScript em arquivos independentes, organizados em uma estrutura de diretórios lógica. O objetivo é criar uma arquitetura que facilite a manutenção, reduza erros durante atualizações e permita expansões futuras.

## Arquitetura

A arquitetura proposta segue um padrão de componentes, onde cada parte funcional do site é isolada em seu próprio arquivo ou conjunto de arquivos. O sistema usará uma abordagem de carregamento de componentes HTML via JavaScript para manter a simplicidade e compatibilidade com navegadores.

### Estrutura de Diretórios

```
/
├── index.html              # Arquivo principal que carrega os componentes
├── css/
│   ├── main.css            # Estilos globais e variáveis
│   ├── reset.css           # Reset de estilos
│   ├── header.css          # Estilos específicos do cabeçalho
│   ├── hero.css            # Estilos da seção hero
│   ├── sections.css        # Estilos comuns para seções de conteúdo
│   └── footer.css          # Estilos do rodapé
├── components/
│   ├── header.html         # Componente de cabeçalho
│   ├── hero.html           # Seção hero
│   ├── about.html          # Seção sobre
│   ├── services.html       # Seção de serviços
│   ├── plans.html          # Seção de planos
│   ├── contact.html        # Seção de contato
│   └── footer.html         # Componente de rodapé
└── js/
    └── component-loader.js # Script para carregar componentes
```

## Componentes e Interfaces

### Componente Loader

O sistema utilizará um script JavaScript simples para carregar os componentes HTML. Este script identificará elementos com um atributo especial (por exemplo, `data-component="header"`) e substituirá esses elementos pelo conteúdo do arquivo HTML correspondente.

```javascript
// Exemplo conceitual do component-loader.js
document.addEventListener('DOMContentLoaded', () => {
  const componentElements = document.querySelectorAll('[data-component]');
  
  componentElements.forEach(async (element) => {
    const componentName = element.getAttribute('data-component');
    try {
      const response = await fetch(`components/${componentName}.html`);
      if (response.ok) {
        const html = await response.text();
        element.innerHTML = html;
      } else {
        console.error(`Failed to load component: ${componentName}`);
      }
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
    }
  });
});
```

### Interface de Componentes

Cada componente HTML será um arquivo independente contendo apenas o HTML necessário para essa seção específica. Por exemplo:

```html
<!-- components/header.html -->
<div class="header-content">
  <div><strong style="color: var(--primary)">.pontocom</strong></div>
  <nav>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#planos">Planos</a>
    <a href="#contato">Contato</a>
  </nav>
</div>
```

O arquivo index.html principal será simplificado para:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PontoCom</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/sections.css">
  <link rel="stylesheet" href="css/footer.css">
</head>
<body>
  <header data-component="header"></header>
  <section class="hero" data-component="hero"></section>
  <section class="section" id="sobre" data-component="about"></section>
  <section class="section" id="servicos" data-component="services"></section>
  <section class="section" id="planos" data-component="plans"></section>
  <section class="section" id="contato" data-component="contact"></section>
  <footer class="footer" data-component="footer"></footer>
  
  <script src="js/component-loader.js"></script>
</body>
</html>
```

## Modelos de Dados

Não há modelos de dados complexos neste projeto, pois é principalmente um site estático. No entanto, podemos definir uma estrutura para os componentes:

```typescript
// Conceitual - não será implementado diretamente
interface Component {
  name: string;       // Nome do componente (ex: "header")
  filePath: string;   // Caminho para o arquivo HTML (ex: "components/header.html")
  dependencies: {
    css: string[];    // Arquivos CSS necessários (ex: ["css/header.css"])
    js?: string[];    // Arquivos JS opcionais (ex: ["js/header.js"])
  }
}
```

## Tratamento de Erros

O sistema de carregamento de componentes incluirá tratamento de erros para lidar com falhas no carregamento de componentes:

1. Se um componente não puder ser carregado, um erro será registrado no console
2. O elemento original permanecerá no DOM, possivelmente com uma mensagem de erro ou conteúdo alternativo
3. Falhas em componentes individuais não impedirão o carregamento de outros componentes

## Estratégia de Teste

### Testes Manuais

1. Verificar se todos os componentes são carregados corretamente
2. Confirmar que os estilos são aplicados adequadamente a cada componente
3. Testar em diferentes navegadores (Chrome, Firefox, Safari, Edge)
4. Verificar a responsividade em diferentes tamanhos de tela

### Testes Automatizados (Opcional para Implementação Futura)

1. Testes unitários para o component-loader.js
2. Testes de integração para verificar se todos os componentes são carregados corretamente
3. Testes de regressão visual para garantir que a aparência do site não mude após a modularização