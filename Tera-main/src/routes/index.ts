import express from "express";
import auth from "./auth.route";
import product from "./product.route";

const router = express.Router();

router.use("/auth", auth);
router.use("/products", product);

export default router;
