import { Router } from "express";
import * as materialsController from "../controllers/materials.js";

export const materialsRouter = Router();

materialsRouter.get("/", materialsController.index);

materialsRouter.post("/", materialsController.create);

materialsRouter.delete("/:id", materialsController.destroy);
