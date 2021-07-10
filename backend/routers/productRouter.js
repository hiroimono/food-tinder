import express from 'express';
import { getProducts, getProductById, getProductsByCategoryName } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.route('/').get(getProducts);
productRouter.route('/category/:category').get(getProductsByCategoryName);
productRouter.route('/:id').get(getProductById);

export default productRouter;