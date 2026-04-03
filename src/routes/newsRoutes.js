import express from "express";
import upload from "../middleware/upload.js";
import * as ctrl from "../controllers/newsController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), ctrl.create);
router.get("/", ctrl.getAll);
router.put("/:id", protect, upload.single("image"), ctrl.update);
router.delete("/:id", protect, ctrl.remove);

export default router;