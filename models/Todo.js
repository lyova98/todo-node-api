import { DataTypes } from 'sequelize';
import { sequelize } from '../src/config/database';
import { getDatabaseInsertableTime } from '../src/helpers/DatabaseHelper';

const Todo = sequelize.define(
  'Todo',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('TODO', 'PROCESS', 'COMPLETE') },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
    tableName: 'Todos',
  }
);

Todo.beforeCreate(async (todo) => {
  todo.createdAt = todo.updatedAt = getDatabaseInsertableTime(0, 'days');
});

Todo.beforeUpdate(async (todo) => {
  todo.updatedAt = getDatabaseInsertableTime(0, 'days');
});

export default Todo;
