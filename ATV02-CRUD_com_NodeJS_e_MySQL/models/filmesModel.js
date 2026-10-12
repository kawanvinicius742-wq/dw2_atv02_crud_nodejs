import { DataTypes } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define(
  "filmes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
    },
    classificacao: {
      type: DataTypes.STRING(20),
    },
    genero_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  },
);

export default Filme;
