import { Request, Response } from 'express';
import { Op } from 'sequelize';
import {
  OrderFull,
  OrdersOperations,
} from 'services/db-operations/OrdersOperations';
import { OrderStatus } from 'types';

interface RequestForTravelingOrdersOnARange extends Request {
  query: {
    startDate?: string;
    endDate?: string;
  };
}

export class ReportControllers {
  async getAllPromiseDueSoon(_: Request, res: Response) {
    try {
      const orderService = new OrdersOperations();
      const ordersData = await orderService.findOrdersByWhereParams({
        status: 'Approve',
        shippingPromise: {
          [Op.lt]: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
        },
      });

      if (!ordersData) {
        throw new Error('Orders not found');
      }

      const orders = ordersData.map((order: OrderFull) => {
        return {
          id: order.id,
          clientName: `${order.user.firstName} ${order.user.lastName}`,
          status: order.status,
          shippingAddress: order.shippingAddress,
          shippingPromise: order.shippingPromise,
          quantity: order.items.length,
          items: order.items.map(item => {
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              url: item.url,
              price: item.price,
              quantity: item.quantity,
            };
          }),
          updatedAt: order.updatedAt,
          createdAt: order.createdAt,
        };
      });

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully',
        data: orders,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occured' });
    }
  }

  async getTravelingOrdersOnARange(
    req: RequestForTravelingOrdersOnARange,
    res: Response
  ) {
    try {
      const queryParams = req.query;

      const { startDate, endDate } = queryParams;

      if (!startDate || !endDate) {
        throw new Error('Need to provide a valid startDate and endDate');
      }

      const orderService = new OrdersOperations();
      const ordersData = await orderService.findOrdersByWhereParams({
        status: OrderStatus.Traveling,
        shippingPromise: {
          [Op.between]: [startDate, endDate],
        },
      });

      if (!ordersData) {
        throw new Error('Orders not found');
      }

      const orders = ordersData.map((order: OrderFull) => {
        return {
          id: order.id,
          clientName: `${order.user.firstName} ${order.user.lastName}`,
          status: order.status,
          shippingAddress: order.shippingAddress,
          shippingPromise: order.shippingPromise,
          quantity: order.items.length,
          items: order.items.map(item => {
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              url: item.url,
              price: item.price,
              quantity: item.quantity,
            };
          }),
          updatedAt: order.updatedAt,
          createdAt: order.createdAt,
        };
      });

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully',
        data: orders,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occured' });
    }
  }
}
