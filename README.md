# Cadastro de Produtos &#8212; MVC

## Integrante

**Nome:** [preencher nome do integrante]  
**RM:** [preencher RM]

## Como executar

1. Instale o [Node.js](https://nodejs.org/).
2. No terminal, acesse a pasta do projeto.
3. Instale as dependencias:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. Acesse [http://localhost:3000](http://localhost:3000) no navegador. O banco SQLite e armazenado no arquivo `database.sqlite`.

## Funcionalidades

- Cadastro, listagem, edicao e exclusao de produtos.
- Cadastro e listagem de categorias.
- Associacao de cada produto a uma categoria.
- Consulta dos produtos de uma categoria pela rota `/categorias/:id/produtos`.

## Desafios

- **Relacionar produtos e categorias:** foram criados os Models `Produto` e `Categoria`. A associacao `Categoria.hasMany(Produto)` e `Produto.belongsTo(Categoria)` estabelece uma relacao de um para muitos; `categoriaId` e a chave estrangeira no produto.
- **Escolher a categoria do produto:** os formularios de cadastro e edicao carregam as categorias do banco e permitem selecionar uma delas.
- **Listar produtos por categoria:** a rota `GET /categorias/:id/produtos` encontra a categoria pelo ID e consulta os produtos com `Produto.findAll`, filtrando por `categoriaId`. Assim, a pagina mostra somente os produtos associados a categoria escolhida.
