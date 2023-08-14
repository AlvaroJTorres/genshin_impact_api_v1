import mongoose from "mongoose";
const { Schema } = mongoose;
import Joi from "joi";

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  portrait: {
    type: String,
  },
  rarity: {
    type: Number,
    enum: [4, 5],
    default: 4,
    required: true,
  },
  element: {
    type: String,
    enum: ["pyro", "hydro", "anemo", "electro", "dendro", "cryo", "geo"],
    default: "pyro",
    required: true,
  },
  region: {
    type: String,
    enum: [
      "mondstadt",
      "liyue",
      "inazuma",
      "sumeru",
      "fontaine",
      "natlan",
      "snezhnaya",
    ],
    default: "Mondstadt",
    required: true,
  },
  weapon_type: {
    type: String,
    enum: ["sword", "claymore", "polearm", "catalyst", "bow"],
    default: "sword",
    required: true,
  },
  role: { type: String, required: true },
  gender: {
    type: String,
    enum: ["female", "male"],
    default: "female",
    required: true,
  },
  birthday: { type: Date, required: true },

  // constellations: [{ type: Schema.Types.ObjectId, ref: "Constellation" }],
});

export function validateCharacter(character) {
  const schema = Joi.object({
    name: Joi.string().required(),
    portrait: Joi.string(),
    rarity: Joi.number().required().valid(4, 5),
    element: Joi.string()
      .required()
      .valid("pyro", "hydro", "anemo", "electro", "dendro", "cryo", "geo"),
    region: Joi.string()
      .required()
      .valid(
        "mondstadt",
        "liyue",
        "inazuma",
        "sumeru",
        "fontaine",
        "natlan",
        "snezhnaya"
      ),
    weapon_type: Joi.string()
      .required()
      .valid("sword", "claymore", "polearm", "catalysts", "bow"),
    role: Joi.string().required(),
    gender: Joi.string().required().valid("female", "male"),
    birthday: Joi.date().required(),
    // passives: Joi.array()
    //   .items(
    //     Joi.object({
    //       name: Joi.string(),
    //       icon: Joi.string(),
    //       unlocked: Joi.string(),
    //       description: Joi.string(),
    //     })
    //   )
    //   .required(),
    // constellations: Joi.array(),
  });

  return schema.validate(character);
}

export const Character = mongoose.model("Character", characterSchema);
