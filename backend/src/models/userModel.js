/**
 * The user Model
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthdate: DataTypes.DATE,
    },
    {
      timestamps: true,
      underscored: true,
    },
  );

  return user;
};
