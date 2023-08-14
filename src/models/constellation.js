// import mongoose from "mongoose";
// const { Schema } = mongoose;
// import Joi from "joi";

// const constellationSchema = new mongoose.Schema({
//   character: { type: Schema.Types.ObjectId, ref: "Character" },
//   level: {
//     type: Number,
//     required: true,
//   },
//   icon: {
//     type: String,
//   },
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   effect: {
//     type: String,
//     required: true,
//   },
// });

// export function validateConstellation(constellation) {
//   const schema = Joi.object({
//     characterId: Joi.string().hex().length(24),
//     level: Joi.number().required(),
//     icon: Joi.string(),
//     name: Joi.string().required(),
//     effect: Joi.string().required(),
//   });

//   return schema.validate(constellation);
// }

// export const Constellation = mongoose.model(
//   "Constellation",
//   constellationSchema
// );
