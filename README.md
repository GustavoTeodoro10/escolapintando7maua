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
│   ├── logo-real.png    # logo real da escola (extraído do Facebook, fundo removido)
│   ├── favicon.png       # ícone da aba (derivado do logo real)
│   └── photos/
│       └── foto-matriculas.jpg  # foto real dos alunos (hero), recortada do post de matrículas
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

- **Instagram**: [@escolapintando7maua](https://www.instagram.com/escolapintando7maua/) — bio, horário de funcionamento, legendas de posts reais (matrículas, oficina de artes, culinária pedagógica, campo de experiência corpo/gesto/movimento, Semana do Folclore, Redemoinho do Saci).
- **Facebook**: [Escola e Berçário Pintando o Sete](https://www.facebook.com/escolapintando7maua/) — endereço completo, categoria (Pré-escola / Berçário e Educação Infantil), modalidades (Integral / Semi-integral / Meio período), telefone, e-mail, e a [foto de perfil em maior resolução](https://www.facebook.com/photo/?fbid=386051023694589&set=a.386050980361260) usada como logo do site.
- **Google** (Perfil da Empresa): nota agregada (4,6/5, 19 avaliações) e os depoimentos usados na seção "Depoimentos" — [ver no Google Maps](https://www.google.com/maps/place/Recrea%C3%A7%C3%A3o+e+Pre+Escola+Pintando+o+Sete/data=!4m2!3m1!1s0x94ce6958891565dd:0x8e041762671de335).

**Sobre o logo**: `assets/logo-real.png` é o arquivo de perfil real da escola (baixado na maior resolução disponível publicamente, 719×719, a partir da foto de perfil do Facebook) — não uma recriação. O arquivo original tinha fundo branco sólido (comum em fotos de perfil, que são sempre "achatadas"); o fundo foi removido por preenchimento de área a partir das bordas (flood fill), o que preserva os vãos brancos internos do próprio desenho (o texto "RECREAÇÃO E PRÉ ESCOLA", "PS" e "Pintando o Sete" continuam brancos e legíveis) e deixa só a arte com transparência, pronta para usar sobre qualquer cor do site. `assets/favicon.png` é esse mesmo arquivo, recortado em canvas quadrado. Se o cliente tiver o arquivo vetorial original (.ai/.svg/.eps) ou uma exportação em resolução ainda maior, vale substituir `assets/logo-real.png` por ele — o resultado só melhora.

**Sobre as fotos**: o hero usa uma foto real dos alunos (`assets/photos/foto-matriculas.jpg`), recortada do post de divulgação ["Matrículas Abertas"](https://www.instagram.com/p/DA1pwvou3k9/) do Instagram oficial. Diferente de um clique de sala de aula, essa é uma foto posada que a própria escola já usa publicamente para vender matrícula — ou seja, o uso de imagem para fins de marketing já é o propósito original da foto. Ela está emoldurada em um recorte orgânico (SVG `clip-path`) com o selo "PS" sobreposto, no lugar do emblema gigante que ocupava o hero antes. As demais seções ("Sobre", "Dia a dia") continuam com ilustrações originais (blobs, ícones) em vez de fotos de sala de aula — para essas, vale a escola enviar fotos próprias com autorização de imagem já coletada dos responsáveis, se quiser substituir as ilustrações por fotos reais no futuro.

**Avaliações**: a seção de prova social usa os depoimentos reais do Perfil da Empresa no Google (nota 4,6/5, 19 avaliações) — priorizando os mais recentes e com nota máxima (5 estrelas), como pedido pelo cliente. O Google também tem algumas avaliações antigas de 1 estrela (contestadas publicamente pela escola nas respostas); elas não foram usadas na vitrine por não serem as "mais recentes e com maiores notas", mas continuam visíveis para qualquer visitante que clique em "Ver todas as avaliações no Google" — a página não esconde o link, só não copia as negativas para o próprio site.

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
