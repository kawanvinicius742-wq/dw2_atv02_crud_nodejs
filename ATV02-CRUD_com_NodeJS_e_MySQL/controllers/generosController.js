import express from "express";
import Genero from "../models/generosModel.js";

const router = express.Router();

// Listar gêneros
router.get("/generos", async (req, res) => {
  const generos = await Genero.findAll();

  res.render("generos", {
    generos: generos,
  });
});

// Cadastrar gênero
router.post("/generos/cadastrar", async (req, res) => {
  const { nome, descricao } = req.body;

  await Genero.create({
    nome: nome,
    descricao: descricao,
  });

  res.redirect("/generos");
});

// Abrir página de edição
router.get("/generos/editar/:id", async (req, res) => {
  const genero = await Genero.findByPk(req.params.id);

  if (!genero) {
    return res.redirect("/generos");
  }

  res.render("generoEditar", {
    genero: genero,
  });
});

// Alterar gênero
router.post("/generos/alterar", async (req, res) => {
  const { id, nome, descricao } = req.body;

  await Genero.update(
    {
      nome: nome,
      descricao: descricao,
    },
    {
      where: { id: id },
    },
  );

  res.redirect("/generos");
});

// Excluir gênero
router.get("/generos/excluir/:id", async (req, res) => {
  await Genero.destroy({
    where: { id: req.params.id },
  });

  res.redirect("/generos");
});

export default router;
