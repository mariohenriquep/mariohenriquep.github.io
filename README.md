# mariohenriquep.github.io

Portefólio pessoal de Mário Henrique Pinto, publicado com GitHub Pages em https://mariohenriquep.github.io.

Site estático em HTML e CSS, sem build: o que está no repositório é o que vai para o ar.

## Estrutura

| Caminho | Conteúdo |
|---------|----------|
| `index.html` | Página inicial: apresentação, projetos, competências, sobre e contacto. |
| `projetos/` | Uma página por projeto (`matriz.html`). |
| `assets/estilo.css` | Estilos de todas as páginas (tema claro e escuro automático). |
| `assets/idioma.js` | Seletor PT/EN. A escolha fica guardada no browser; por omissão segue o idioma do browser. `?lang=en` força o inglês. |
| `assets/img/` | Imagens (capturas em WebP e a imagem de pré-visualização para redes sociais). |

## Textos em dois idiomas

Cada texto aparece duas vezes, com a classe `pt` e com a classe `en`; o CSS mostra só a do idioma ativo:

```html
<span class="pt">Ver projetos</span><span class="en">See projects</span>
```

## Acrescentar um projeto

1. Pôr as capturas em `assets/img/` (de preferência WebP, até 1600 px de largura).
2. Em `index.html`, copiar o bloco `<article class="projeto">` da Matriz e trocar textos, imagem e links.
3. Duplicar `projetos/matriz.html` para `projetos/<nome>.html` e adaptar.

## Ver localmente

Abrir `index.html` no browser, ou servir a pasta: `python3 -m http.server 8000` e abrir http://localhost:8000.
