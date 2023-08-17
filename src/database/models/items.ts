import { ItemInstance } from 'types';
import { sequelize } from '.';
import { DataTypes } from 'sequelize';

const Item = sequelize.define<ItemInstance>(
  'Item',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Order',
        key: 'id',
      },
    },
  },
  {
    tableName: 'items',
  }
);

export default Item;
