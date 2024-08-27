const { Service } = require('feathers-memory');

exports.Products = class Products extends Service {
  async create(data, params) {
    return super.create(data, params);
  }
};
