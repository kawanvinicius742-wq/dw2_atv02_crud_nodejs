import express from "express";

import atoresController from "./controllers/atoresController.js";
import filmesController from "./controllers/filmesController.js";
import generosController from "./controllers/generosController.js";

import connection from "./config/sequelize-config.js";

const app = express();

// Define o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Define a pasta public para arquivos estáticos
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Configurando as rotas dos controllers
app.use("/", atoresController);
app.use("/", filmesController);
app.use("/", generosController);

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// // Inicia o servidor
// const port = 8080;

// app.listen(port, (erro) => {

//     if (erro) {
//         console.log("Ocorreu um erro!");
//     } else {
//         console.log(
//             `Servidor iniciado com sucesso em http://localhost:${port}`
//         );
//     }

// });

// Testa a conexão e inicia o servidor
const port = 8080;

try {
  await connection.authenticate();
  console.log("Conexão com o MySQL estabelecida!");

  app.listen(port, (erro) => {
    if (erro) {
      console.log("Ocorreu um erro ao iniciar o servidor!");
    } else {
      console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
    }
  });
} catch (erro) {
  console.log("Erro ao conectar ao MySQL:", erro.message);
}
