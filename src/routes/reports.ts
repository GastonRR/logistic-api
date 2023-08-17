import { ReportControllers } from 'controllers/reportsController';

import { Router } from 'express';

const promiseRounter = Router();

const reportControllers = new ReportControllers();

promiseRounter.get('/promise-due-soon', reportControllers.getAllPromiseDueSoon);
promiseRounter.get(
  '/order-traveling',
  reportControllers.getTravelingOrdersOnARange
);

export default promiseRounter;
