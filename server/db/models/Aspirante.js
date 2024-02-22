module.exports = (sequelize, DataTypes) => {
    let alias = "Aspirante"
    let cols = {
        dni: {type: DataTypes.INTEGER, primaryKey: true},
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        email: DataTypes.STRING,
        telefono: DataTypes.STRING,
        url_linkedin: DataTypes.STRING,
        fecha_de_nacimiento: DataTypes.DATE,
        sexo: DataTypes.STRING,
        imagen: DataTypes.STRING,
        profesion_id: DataTypes.INTEGER
    }
    let config = {
        tableName: "aspirantes",
        timestamps: false
    }
    const Aspirante = sequelize.define(alias, cols, config)
    Aspirante.associate = function (models) {
        Aspirante.belongsTo(models.Profesion, {
            as: 'profesion',
            foreignKey: 'profesion_id'
        });
    };
    return Aspirante
}