import { Model } from 'sequelize';

export enum OrderStatus {
  Approve = 'Approve',
  Cancel = 'Cancel',
  Delivery = 'Delivery',
  Traveling = 'Traveling',
}

interface Order {
  id: number;
  status: OrderStatus;
  userId: number;
  shippingAddress: Date;
  shippingPromise: Date;
}

export interface OrderInstance extends Model<Order>, Order {
  createdAt?: Date;
  updatedAt?: Date;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserInstance extends Model<User>, User {
  createdAt?: Date;
  updatedAt?: Date;
}

interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  quantity: number;
  orderId: number;
}

export interface ItemInstance extends Model<Item>, Item {
  createdAt?: Date;
  updatedAt?: Date;
}
