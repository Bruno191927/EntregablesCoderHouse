import {createShoppinCartController,findShoppingCartsController,findShoppingCartByIdController,deleteShoppingCartController,deleteShoppingCartProductController,insertProductInCartProductController} from './controller.js';
import express from 'express';
import { verifyRol } from '../../middleware/verify_rol.js';
const router = express.Router();
router.post('/',verifyRol,createShoppinCartController);
router.post('/:id/productos',verifyRol,insertProductInCartProductController);
router.get('/',findShoppingCartsController);
router.get('/:id/productos',findShoppingCartByIdController);
router.delete('/:id',verifyRol,deleteShoppingCartController);
router.delete('/:id/productos/:id_prod',verifyRol,deleteShoppingCartProductController);
export default router;