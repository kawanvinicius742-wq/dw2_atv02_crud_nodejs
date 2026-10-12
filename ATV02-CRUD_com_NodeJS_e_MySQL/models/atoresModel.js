import { DataTypes } from "sequelize";
import connection from "../config/sequelize-config.js";

const Ator = connection.define(
  "atores",
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
    nacionalidade: {
      type: DataTypes.STRING(60),
    },
    nascimento: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: false,
  },
);

export default Ator;
