import express from "express";
import {
  getAllRole,
  createRole,
} from "./controller.js";

const router = express.Router();

// Role
router.get("/role/all", getAllRole);
router.post("/role/create", createRole);

export default router;
