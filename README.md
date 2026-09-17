# Escola e Berçário Pintando o Sete — Landing Page

Site institucional (landing page) para a **Escola e Berçário Pintando o Sete**, em Mauá – SP. Primeiro site do cliente, criado a partir do conteúdo real das redes sociais (Instagram e Facebook), já que a presença digital anterior era só uma página do Facebook.

Projeto desenvolvido por **TeoCode**.

## Stack

Site estático, sem build step (fácil de hospedar em qualquer lugar — GitHub Pages, Netlify, Vercel, cPanel etc.):

- **HTML5** semântico
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`), com tema customizado (cores, tipografia) em `index.html`
- **CSS** próprio em [`css/style.css`](css/style.css) para os componentes "clay" (botões, cards, chips), blobs decorativos e animações
- **JavaScript** vanilla em [`js/main.js`](js/main.js) — menu mobile, reveal-on-scroll (respeitando `prefers-reduced-motion`) e o ano do rodapé
- Google Fonts: **Fredoka** (títulos) e **Nunito** (texto)

## Estrutura

```
├── index.html          # página única (landing page)
├── css/
│   └── style.css       # tokens de marca, componentes, animações
├── js/
│   └── main.js         # menu mobile + scroll reveal
├── assets/
│   ├── logo.svg         # marca (usa as CSS vars de cor do tema)
│   └── favicon.svg       # ícone da aba (cores fixas)
└── .claude/
    └── launch.json      # config para rodar um servidor local ao testar no Claude Code
```

## Rodando localmente

Como não há build step, basta servir a pasta com qualquer servidor estático. Exemplos:

```bash
python -m http.server 5500
```

```bash
npx serve .
```

E abrir `http://localhost:5500`.

## Conteúdo real usado (fonte)

Todo o conteúdo — textos, atividades, contatos e identidade visual — foi extraído das redes oficiais do cliente. Nada foi inventado:

- **Instagram**: [@escolapintando7maua](https://www.instagram.com/escolapintando7maua/) — bio, horário de funcionamento, legendas de posts reais (matrículas, oficina de artes, culinária pedagógica, campo de experiência corpo/gesto/movimento, Semana do Folclore, Redemoinho do Saci) e comentários públicos de seguidores usados na seção de depoimentos.
- **Facebook**: [Escola e Berçário Pintando o Sete](https://www.facebook.com/escolapintando7maua/) — endereço completo, categoria (Pré-escola / Berçário e Educação Infantil), modalidades (Integral / Semi-integral / Meio período), telefone, e-mail.

**Sobre a paleta e o logo**: as cores (azul, amarelo, coral) foram extraídas da identidade visual real do perfil (o logo é um respingo de tinta azul com um monograma "PS" e uma auréola de pontos coloridos). O `assets/logo.svg` é uma recriação original inspirada nesse logo — não é o arquivo hospedado no Instagram/Facebook, que pode mudar ou não estar disponível em alta resolução. Recomenda-se substituir por um arquivo vetorial oficial do cliente assim que disponível.

**Sobre as fotos**: a página usa ilustrações originais (blobs, ícones) no lugar de fotos reais das crianças. Fotos de crianças tiradas de posts públicos não foram baixadas nem republicadas aqui por uma questão de privacidade/consentimento dos responsáveis — quem deve decidir usar essas imagens no site é a escola, que já tem a relação de confiança com as famílias. Basta a escola enviar fotos próprias (com autorização de uso de imagem já coletada dos responsáveis) para substituir as ilustrações nas seções "Sobre" e "Dia a dia".

**Avaliações**: a página do Facebook ainda não tem avaliações (0 avaliações). Por isso a seção de prova social usa comentários reais e públicos deixados por seguidores no Instagram, com o @ de cada pessoa, em vez de simular notas ou depoimentos que não existem.

## Dados de contato (para manutenção)

| Campo | Valor |
|---|---|
| WhatsApp | (11) 4252-9228 |
| Telefone | (11) 4547-1117 |
| E-mail | escolapintandosete@hotmail.com |
| Endereço | Rua Anchieta, 107 — Vila Bocaina, Mauá – SP, 09310-510 |
| Horário | 6h30 às 18h30 |

Os links de WhatsApp usam `https://wa.me/551142529228` com mensagens pré-preenchidas diferentes por botão (hero, matrículas, botão flutuante).

## Deploy sugerido

1. **GitHub Pages**: Settings → Pages → Deploy from branch (`main`, pasta raiz).
2. Apontar um domínio próprio (ex. `escolapintando7maua.com.br`) via CNAME quando o cliente registrar um.
3. Atualizar a tag `<link rel="canonical">` e as meta `og:*` em `index.html` com o domínio final.

---
Site desenvolvido por TeoCode.
