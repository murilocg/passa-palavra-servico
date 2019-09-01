const UserSchema = (sequelize, DataTypes) => {
    const schema = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: DataTypes.STRING,
        surname: DataTypes.STRING
    });
    return schema;
}

export default UserSchema;