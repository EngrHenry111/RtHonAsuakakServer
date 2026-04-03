import express from "express";
import upload from "../middleware/upload.js";
import * as ctrl from "../controllers/galleryController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), ctrl.create);
router.get("/", ctrl.getAll);
router.delete("/:id", protect, ctrl.remove);

export default router;