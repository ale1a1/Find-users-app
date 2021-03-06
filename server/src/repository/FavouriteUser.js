const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const FavouriteUser = sequelize.define("FavouriteUser", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { FavouriteUser };
