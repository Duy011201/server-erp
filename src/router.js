import express from "express";
import {
  getAllRole,
  createRole,
  getAllStore,
  deleteStoreByID,
  updateStoreByID,
  createStore,
  getStoreByID,
  deleteProductByID,
  updateProductByID,
  createProduct,
  getAllProduct,
  getProductByID,
  deleteMaterialByID,
  updateMaterialByID,
  createMaterial,
  getAllMaterial,
  getMaterialByID,
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
  getEmployeeByID,
  updateEmployeeByID,
  deleteEmployeeByID,
  createEmployee,
  getAllEmployee,
  getAllDepartment,
  getAllPosition,
  deleteRewardDisciplineByID,
  createRewardDiscipline,
  updateRewardDisciplineByID,
  getAllRewardDiscipline,
  getRewardDisciplineByID,
  getAllWarehouseExport,
  createWarehouseExport,
  updateWarehouseExportByID,
  deleteWarehouseExportByID,
  getAllWarehouseExportDetail,
  createWarehouseExportDetail,
  updateWarehouseExportDetailByID,
  deleteWarehouseExportDetailByID,
  getPositionByID,
  updatePositionByID,
  createPosition,
  deletePositionByID,
  getAllPosition,
  getAllDepartment,
  getDepartmentByID,
  updateDepartmentID,
  createDepartment,
  deleteDepartmentByID,
  getAllworkingprocess,
  getworkingprocessByID,
  updateworkingprocessByID,
  createworkingprocess,
  deleteworkingprocessByID
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
router.post("/store", getStoreByID);

// product
router.post("/product/all", getAllProduct);
router.post("/product/create", createProduct);
router.post("/product/update", updateProductByID);
router.post("/product/delete", deleteProductByID);
router.post("/product", getProductByID);

// material
router.post("/material/all", getAllMaterial);
router.post("/material/create", createMaterial);
router.post("/material/update", updateMaterialByID);
router.post("/material/delete", deleteMaterialByID);
router.post("/material", getMaterialByID);

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

// warehouse export
router.post("/warehouse-export/all", getAllWarehouseExport);
router.post("/warehouse-export/create", createWarehouseExport);
router.post("/warehouse-export/update", updateWarehouseExportByID);
router.post("/warehouse-export/delete", deleteWarehouseExportByID);

// warehouse export details
router.post("/warehouse-export-detail/all", getAllWarehouseExportDetail);
router.post("/warehouse-export-detail/create", createWarehouseExportDetail);
router.post("/warehouse-export-detail/update", updateWarehouseExportDetailByID);
router.post("/warehouse-export-detail/delete", deleteWarehouseExportDetailByID);

// Auth
router.post("/auth/login", checkLogin);
router.post("/auth/register", register);
router.post("/auth/create-register", createRegister);
router.post("/auth/update-password", updatePassword);

// Employee
router.post("/employee", getEmployeeByID);
router.post("/employee/all", getAllEmployee);
router.post("/employee/update", updateEmployeeByID);
router.post("/employee/create", createEmployee);
router.post("/employee/delete", deleteEmployeeByID);

// Reward discipline
router.post("/reward-discipline", getRewardDisciplineByID);
router.post("/reward-discipline/all", getAllRewardDiscipline);
router.post("/reward-discipline/update", updateRewardDisciplineByID);
router.post("/reward-discipline/create", createRewardDiscipline);
router.post("/reward-discipline/delete", deleteRewardDisciplineByID);

// Position
router.post("/position", getPositionByID);
router.post("/position/all", getAllPosition);
router.post("/position/update", updatePositionByID);
router.post("/position", createPosition);
router.post("/position/delete", deletePositionByID);

// Department
router.post("/department", getDepartmentByID);
router.post("/department/all", getAllDepartment);
router.post("/department/update", updateDepartmentID);
router.post("/department", createDepartment);
router.post("/department/delete", deleteDepartmentByID);

// workingprocess
router.post("/workingprocess", getworkingprocessByID);
router.post("/workingprocess/all", getAllworkingprocess);
router.post("/workingprocess/update", updateworkingprocessByID);
router.post("/workingprocess", createworkingprocess);
router.post("/workingprocess/delete", deleteworkingprocessByID);

export default router;
