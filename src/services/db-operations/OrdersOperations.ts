import Order from 'database/models/orders';
import { WhereOptions } from 'sequelize';
import { ItemInstance, OrderInstance, UserInstance } from 'types';

export type OrderFull = OrderInstance & {
  user: UserInstance;
  items: ItemInstance[];
};

export class OrdersOperations {
  async getAllOrders() {
    return (await Order.findAll({
      include: [
        {
          association: 'user',
        },
        {
          association: 'items',
        },
      ],
    })) as OrderFull[];
  }

  async getOrderById(id: number) {
    return (await Order.findByPk(id, {
      include: [
        {
          association: 'user',
        },
        {
          association: 'items',
        },
      ],
    })) as OrderFull | undefined;
  }

  async findOrdersByWhereParams(where: WhereOptions<OrderInstance>) {
    return (await Order.findAll({
      where,
      include: [
        {
          association: 'user',
        },
        {
          association: 'items',
        },
      ],
    })) as OrderFull[] | undefined;
  }
}
