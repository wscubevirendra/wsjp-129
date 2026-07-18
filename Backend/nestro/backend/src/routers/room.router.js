import express from "express";
const router = express.Router();
import { read, readById, create, updateStatus, update, deleteById } from "../controllers/room.controller.js"

router.get("/", read);
router.get("/:id", readById);
router.post("/create", create);
router.patch("/status-update/:id", updateStatus);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteById);


export default router;
