module.exports = (sequelize, DataTypes) => {
    let alias = "Profesion"
    let cols = {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        profesion: DataTypes.STRING
    }
    let config = {
        tableName: "profesiones",
        timestamps: false
    }
    const Profesion = sequelize.define(alias, cols, config)
    Profesion.associate = function (models) {
        Profesion.hasMany(models.Aspirante, {
            as: 'aspirantes',
            foreignKey: 'profesion_id'
        });
    };
    return Profesion
}