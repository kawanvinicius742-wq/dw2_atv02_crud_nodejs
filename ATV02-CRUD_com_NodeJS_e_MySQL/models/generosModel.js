import { DataTypes } from "sequelize";
import connection from "../config/sequelize-config.js";

const Genero = connection.define(
  "generos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
  },
);

export default Genero;
