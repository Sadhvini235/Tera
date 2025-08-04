import { Router } from "express";
import {
  createPurchase,
  getProducts,
  getPurchases,
} from "../controllers/product.controller";
import middleware from "../middleware/verify.middleware";

const router = Router();

router.get("/bulk", getProducts);

router.get("/purchases", middleware, getPurchases);

router.post("/create-purchase", middleware, createPurchase);

export default router;
