import { artifactsRouter } from "../routes/artifacts.js";
import { charactersRouter } from "../routes/characters.js";
// import { constellationsRouter } from "../routes/constellations.js";
import { materialsRouter } from "../routes/materials.js";
import { weaponsRouter } from "../routes/weapons.js";

export default function setRoutes(app) {
  app.use("/api/artifacts", artifactsRouter);
  app.use("/api/characters", charactersRouter);
  // app.use("/api/constellations", constellationsRouter);
  app.use("/api/materials", materialsRouter);
  app.use("/api/weapons", weaponsRouter);
}
