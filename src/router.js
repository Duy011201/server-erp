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
  deleteMaterialByID,
  updateMaterialByID,
  createMaterial,
  getAllMaterial,
  getAllWarehouseReceipt,
  createWarehouseReceipt,
  updateWarehouseReceiptByID,
  deleteWarehouseReceiptByID,
  getAllWarehouseReceiptDetail,
  createWarehouseReceiptDetail,
  updateWarehouseReceiptDetailByID,
  deleteWarehouseReceiptDetailByID,
  updatePassword,
  checkLogin,
  register,
  createRegister,
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

// material
router.post("/material/all", getAllMaterial);
router.post("/material/create", createMaterial);
router.post("/material/update", updateMaterialByID);
router.post("/material/delete", deleteMaterialByID);

// warehouse receipt
router.post("/warehouse-receipt/all", getAllWarehouseReceipt);
router.post("/warehouse-receipt/create", createWarehouseReceipt);
router.post("/warehouse-receipt/update", updateWarehouseReceiptByID);
router.post("/warehouse-receipt/delete", deleteWarehouseReceiptByID);

// warehouse receipt details
router.post("/warehouse-receipt-detail/all", getAllWarehouseReceiptDetail);
router.post("/warehouse-receipt-detail/create", createWarehouseReceiptDetail);
router.post(
  "/warehouse-receipt-detail/update",
  updateWarehouseReceiptDetailByID
);
router.post(
  "/warehouse-receipt-detail/delete",
  deleteWarehouseReceiptDetailByID
);

// Auth
router.post("/auth/login", checkLogin);
router.post("/auth/register", register);
router.post("/auth/create-register", createRegister);
router.post("/auth/update-password", updatePassword);

export default router;
