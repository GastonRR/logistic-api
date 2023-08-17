import {
  OrderFull,
  OrdersOperations,
} from 'services/db-operations/OrdersOperations';

export class OrderController {
  async getAllOrders(_: any, res: any) {
    try {
      const orderService = new OrdersOperations();

      const orderData = await orderService.getAllOrders();

      const orders = orderData.map((order: OrderFull) => {
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
  async getOrderDetail(req: any, res: any) {
    try {
      const orderService = new OrdersOperations();

      const id = Number(req.params.id);

      if (!id) {
        throw new Error('Need to provide an valid id');
      }

      const orderData = await orderService.getOrderById(id);

      if (!orderData) {
        throw new Error('Order not found');
      }

      const order = {
        id: orderData.id,
        clientName: `${orderData.user.firstName} ${orderData.user.lastName}`,
        status: orderData.status,
        shippingAddress: orderData.shippingAddress,
        shippingPromise: orderData.shippingPromise,
        quantity: orderData.items.length,
        items: orderData.items.map(item => {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            url: item.url,
            price: item.price,
            quantity: item.quantity,
          };
        }),
        updatedAt: orderData.updatedAt,
        createdAt: orderData.createdAt,
      };

      res.status(200).json({
        success: true,
        message: 'orderData fetched successfully',
        data: order,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occured' });
    }
  }
}
