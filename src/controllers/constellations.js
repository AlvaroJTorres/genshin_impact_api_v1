// import { Character } from "../models/character.js";
// import {
//   Constellation,
//   validateConstellation,
// } from "../models/constellation.js";

// export const index = async (req, res) => {
//   const constellations = await Constellation.find().populate({
//     path: "character",
//     select: "name -_id",
//   });
//   res.send(constellations);
// };

// export const create = async (req, res) => {
//   const { error } = validateConstellation(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const { characterId, level, icon, name, effect } = req.body;

//   const character = await Character.findById(characterId);

//   const newConstellation = new Constellation({
//     character: character._id,
//     level,
//     icon,
//     name,
//     effect,
//   });

//   try {
//     await newConstellation.save();
//     character.constellations = character.constellations.concat(
//       newConstellation._id
//     );
//     await character.save();
//     res.json(character);
//   } catch (e) {
//     res.json(e);
//   }
// };

// export const destroy = async (req, res) => {
//   const constellation = await Constellation.findByIdAndRemove(req.params.id);
//   if (!constellation)
//     return res
//       .status(404)
//       .send(`The constellation with the ID ${req.params.id} was not found.`);
//   res.send(constellation);
// };
