import feathers from '@feathersjs/feathers';

class Products extends feathers.Service {
  async create(data, params) {
   
    return super.create(data, params);
  }
}

export default function (app) {
  app.use('/products', new Products());
}
