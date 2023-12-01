import express from "express";
import {
  getAllRole,
  createRole,
  getAllStore,
  deleteStoreByID,
  updateStoreByID,
  createStore,
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

export default router;
