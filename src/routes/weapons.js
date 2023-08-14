import { Router } from "express";
import * as weaponsController from "../controllers/weapons.js";

export const weaponsRouter = Router();

weaponsRouter.get("/", weaponsController.index);

weaponsRouter.post("/", weaponsController.create);

weaponsRouter.delete("/:id", weaponsController.destroy);
