// Arquivo com os dados de conexão com o banco
// Importando o Sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
  // Dados de conexão
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "dw2_atv02",
  timezone: "-03:00",
});

// Exportando o módulo
export default connection;
