import express from "express";

// Importando o model de filmes
import Filme from "../models/filmesModel.js";

const router = express.Router();

console.log("filmesController carregado");

// Rota para listar os filmes
router.get("/filmes", async (req, res) => {
  try {
    const filmes = await Filme.findAll();

    res.render("filmes", {
      filmes: filmes,
    });
  } catch (erro) {
    console.log("Erro ao listar filmes:", erro.message);
    res.status(500).send("Erro ao listar filmes.");
  }
});

// Rota para cadastrar um filme
router.post("/filmes/cadastrar", async (req, res) => {
  try {
    await Filme.create({
      titulo: req.body.titulo,
      ano: req.body.ano,
      classificacao: req.body.classificacao,
    });

    res.redirect("/filmes");
  } catch (erro) {
    console.log("Erro ao cadastrar filme:", erro.message);
    res.status(500).send("Erro ao cadastrar filme.");
  }
});

console.log(
  router.stack.map((rota) => ({
    caminho: rota.route?.path,
    metodos: rota.route ? Object.keys(rota.route.methods) : [],
  })),
);

// Rota para exibir o formulário de edição
router.get("/filmes/editar/:id", async (req, res) => {
  try {
    const filme = await Filme.findByPk(req.params.id);

    if (!filme) {
      return res.status(404).send("Filme não encontrado.");
    }

    res.render("filmeEditar", {
      filme: filme,
    });
  } catch (erro) {
    console.log("Erro ao buscar filme:", erro.message);
    res.status(500).send("Erro ao buscar filme.");
  }
});

// Rota para alterar um filme
router.post("/filmes/alterar", async (req, res) => {
  try {
    await Filme.update(
      {
        titulo: req.body.titulo,
        ano: req.body.ano,
        classificacao: req.body.classificacao,
      },
      {
        where: {
          id: req.body.id,
        },
      },
    );

    res.redirect("/filmes");
  } catch (erro) {
    console.log("Erro ao alterar filme:", erro.message);
    res.status(500).send("Erro ao alterar filme.");
  }
});

// Rota para excluir um filme
router.get("/filmes/excluir/:id", async (req, res) => {
  try {
    await Filme.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/filmes");
  } catch (erro) {
    console.log("Erro ao excluir filme:", erro.message);
    res.status(500).send("Erro ao excluir filme.");
  }
});

export default router;
