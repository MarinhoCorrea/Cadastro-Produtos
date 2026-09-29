const express = require('express');
const router = express.Router();

const { Categoria, Produto } = require('../models');

router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });
  res.render('categorias/index', { categorias });
});

router.get('/:id/produtos', async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.id);

  if (!categoria) {
    return res.status(404).render('error', {
      message: 'Categoria nao encontrada',
      error: { status: 404, stack: '' }
    });
  }

  const produtos = await Produto.findAll({
    where: { categoriaId: categoria.id },
    order: [['nome', 'ASC']]
  });

  res.render('categorias/produtos', { categoria, produtos });
});

router.post('/', async (req, res) => {
  const nome = (req.body.nome || '').trim();

  if (nome) {
    await Categoria.findOrCreate({ where: { nome } });
  }

  res.redirect('/categorias');
});

module.exports = router;
