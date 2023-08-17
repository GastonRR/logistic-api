# Logistic API

**Short Description**

> API for logistics management. made in Node.js + Express + Typescript

> The databse is MySql and is in a docker the data is obtained by an ORM "Sequelize"

### **Getting Start**

**_First, Install dependencies:_**

```bash

npm  install

or

yarn  install

```

**_Run docker compose:_**

```

docker-compose up

```

**_Run commands to prepare the db and data:_**

```bash

yarn  run  prepare:db

or

npm  run  prepare:db

```

**_Run project_**

```bash

yarn  dev

or

npm  dev

```

## API Endpoints

**Orders**

- **GET - /orders** - _get all orders_

- **GET - /orders/:id** - _get order by id_

**Reports**

- **GET - /reports/promise-due-soon** - _get all orders in Approval status and less than 2 days left to default on the Shipping Promise._

- **GET - /reports/order-traveling?startDate=&endDate=** - _get all orders in traveling status between a date range given by parameter._

## **Documentation**

> The entire API is made in typescript but. the migrations
> seeaders are on js because are generated by Sequelize CLI

### Services

#### Opertions on database

- OrdersOperations
  - getAllOrders - get all orders with his associations return a OrderFull (order with user and items)
  - getOrderById - get order by id with his associations
  - findOrdersByWhereParams - find all orders that satisfies the where param

### Controllers

- Order Controllers

  - getAllOrders
  - getOrderDetail

- ReportControllers

  - getAllPromiseDueSoon - get all orders in Approval status and less than 2 days left to default on the Shipping Promise
  - getTravelingOrdersOnARange - get all orders in traveling status between a date range given by parameter
