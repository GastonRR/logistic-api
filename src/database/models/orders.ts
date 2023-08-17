import { OrderInstance } from 'types';
import { sequelize } from 'database/models';
import { DataTypes } from 'sequelize';
import Item from './items';
import User from './users';

const Order = sequelize.define<OrderInstance>(
  'Order',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'users',
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('Approve', 'Cancel', 'Delivery', 'Traveling'),
    },
    shippingAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    shippingPromise: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'orders',
  }
);

Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

User.hasMany(Order, {
  foreignKey: 'userId',
  as: 'orders',
});

Item.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

Order.hasMany(Item, {
  foreignKey: 'orderId',
  as: 'items',
});

export default Order;
