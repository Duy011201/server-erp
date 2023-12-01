import express from "express";
import {
  getAllRole,
  createRole,
  getAllStore,
  deleteStoreByID,
  updateStoreByID,
  createStore,
  deleteProductByID,
  updateProductByID,
  createProduct,
  getAllProduct,
} from "./controller.js";

const router = express.Router();

// Role
router.post("/role/all", getAllRole);
router.post("/role/create", createRole);

// Store
router.post("/store/all", getAllStore);
router.post("/store/create", createStore);
router.post("/store/update", updateStoreByID);
router.post("/store/delete", deleteStoreByID);

// product
router.post("/product/all", getAllProduct);
router.post("/product/create", createProduct);
router.post("/product/update", updateProductByID);
router.post("/product/delete", deleteProductByID);

export default router;
