import { OrderController } from 'controllers/orderController';

import { Router } from 'express';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.get('/', orderController.getAllOrders);
ordersRouter.get('/:id', orderController.getOrderDetail);

export default ordersRouter;
