import { Router } from "express";
import { upload } from "../config/multer.js";
import * as charactersController from "../controllers/characters.js";

export const charactersRouter = Router();

charactersRouter.get("/", charactersController.index);

charactersRouter.post("/", upload.single("file"), charactersController.create);

charactersRouter.patch("/:id", charactersController.update);

charactersRouter.delete("/:id", charactersController.destroy);
