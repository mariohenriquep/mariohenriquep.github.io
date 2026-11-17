# mariohenriquep.github.io

Portefólio pessoal de Mário Henrique Pinto, publicado com GitHub Pages em https://mariohenriquep.github.io.

Site estático em HTML e CSS, sem build: o que está no repositório é o que vai para o ar.

## Estrutura

| Caminho | Conteúdo |
|---------|----------|
| `index.html` | Página inicial: apresentação, projetos, competências, sobre e contacto. |
| `projetos/` | Uma página por projeto (`matriz.html`). |
| `assets/estilo.css` | Estilos de todas as páginas: visual minimalista, notas na margem, tema claro e escuro automático. |
| `assets/idioma.js` | Seletor PT/EN. A escolha fica guardada no browser; por omissão segue o idioma do browser. `?lang=en` força o inglês. |
| `assets/img/` | Imagens (capturas em WebP e a imagem de pré-visualização para redes sociais). |

## Textos em dois idiomas

Cada texto aparece duas vezes, com a classe `pt` e com a classe `en`; o CSS mostra só a do idioma ativo:

```html
<span class="pt">Ver projetos</span><span class="en">See projects</span>
```

## Acrescentar um projeto

1. Pôr a captura em `assets/img/` (de preferência WebP, até 1600 px de largura).
2. Em `index.html`, na lista `<ul class="trabalho">`, copiar um `<li>` e trocar número, textos (`.pt` e `.en`), links e `data-imagem` (a captura que segue o rato).
3. Para uma página de detalhe, duplicar `projetos/matriz.html` para `projetos/<nome>.html` e adaptar.

As pastas `previa/` e `previa-2/` são pré-visualizações de visuais alternativos (não indexadas).

## Ver localmente

Abrir `index.html` no browser, ou servir a pasta: `python3 -m http.server 8000` e abrir http://localhost:8000.
