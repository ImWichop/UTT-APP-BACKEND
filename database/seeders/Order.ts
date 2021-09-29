import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Order from 'App/Models/Order'

export default class OrderSeeder extends BaseSeeder {
  public async run() {
    await Order.createMany([
      {
        cost: 1000,
        statusId: 2,
        areaId: 1,
      },
      {
        cost: 5000,
        statusId: 2,
        areaId: 2,
      },
      {
        cost: 4500,
        statusId: 2,
        areaId: 1,
      },
    ])
  }
}