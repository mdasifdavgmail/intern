import { products } from './products/products.js'
export const services = (app) => {
  app.configure(products)

  // All services will be registered here
}
