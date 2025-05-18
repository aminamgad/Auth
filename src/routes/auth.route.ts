import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controller";
import { verifyToken } from "../middleware/auth.moddleware";
import { checkRole } from "../middleware/role.middleware";
import User from "../models/user.model";

const router = express.Router();

// POST /api/auth/register

router.post("/register", registerUser);

// POST /api/auth/login
router.post("/login", loginUser);

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route Hello" });
});

router.get("/admin", verifyToken, checkRole(["admin", "user"]), (req, res) => {
  res.json({ message: "Admin route Hello" });
});

router.get("/me", verifyToken, getUser);


export default router;
