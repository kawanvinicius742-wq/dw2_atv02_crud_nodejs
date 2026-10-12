import express from "express";
import Ator from "../models/atoresModel.js";

const router = express.Router();

// Listar atores
router.get("/atores", async (req, res) => {
  const atores = await Ator.findAll();

  res.render("atores", {
    atores: atores,
  });
});

// Cadastrar ator
router.post("/atores/cadastrar", async (req, res) => {
  const { nome, nacionalidade, nascimento } = req.body;

  await Ator.create({
    nome: nome,
    nacionalidade: nacionalidade,
    nascimento: nascimento || null,
  });

  res.redirect("/atores");
});

// Abrir página de edição
router.get("/atores/editar/:id", async (req, res) => {
  const ator = await Ator.findByPk(req.params.id);

  if (!ator) {
    return res.redirect("/atores");
  }

  res.render("atorEditar", {
    ator: ator,
  });
});

// Alterar ator
router.post("/atores/alterar", async (req, res) => {
  const { id, nome, nacionalidade, nascimento } = req.body;

  await Ator.update(
    {
      nome: nome,
      nacionalidade: nacionalidade,
      nascimento: nascimento || null,
    },
    {
      where: { id: id },
    },
  );

  res.redirect("/atores");
});

// Excluir ator
router.get("/atores/excluir/:id", async (req, res) => {
  await Ator.destroy({
    where: { id: req.params.id },
  });

  res.redirect("/atores");
});

export default router;
