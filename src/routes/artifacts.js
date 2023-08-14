import { Router } from "express";
import * as artifactsController from "../controllers/artifacts.js";

export const artifactsRouter = Router();

artifactsRouter.get("/", artifactsController.index);

artifactsRouter.post("/", artifactsController.create);

artifactsRouter.put("/:id", artifactsController.update);

artifactsRouter.delete("/:id", artifactsController.destroy);
