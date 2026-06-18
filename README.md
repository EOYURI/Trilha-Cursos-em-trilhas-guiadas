# Trilha — Projeto React + Vite

Aplicação com 3 telas (Início, Catálogo, Conteúdo), navegação via React Router
e um Carrossel do Bootstrap integrado a um design feito com CSS próprio.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Estrutura

```
src/
  components/        # peças reutilizáveis (Navbar, Carousel, Card, etc.)
  pages/              # as 3 telas: Home, Catalogo, Conteudo
  data/               # dados estáticos usados pelas telas
  App.jsx             # layout fixo (menu) + rotas
  main.jsx            # ponto de entrada, BrowserRouter e import do Bootstrap
```

## Tecnologias

- React + Vite
- React Router (`react-router-dom`)
- Bootstrap Carousel via `react-bootstrap` (apenas o carrossel usa Bootstrap;
  o restante do layout é CSS próprio, com sobrescrita de estilo do carrossel
  em `src/components/ImageCarousel/ImageCarousel.css`)

## Observação sobre o envio

A pasta `node_modules` não está incluída. Após extrair o `.zip`, rode
`npm install` para restaurá-la antes de `npm run dev`.
# Trilha-Cursos-em-trilhas-guiadas
