import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import cors from 'cors';
import productsService from './services/products/products.service.js';

const app = express(feathers());

// Enable CORS
app.use(cors());

// Parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register the products service
app.configure(productsService);

export { app };
