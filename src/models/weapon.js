import mongoose from "mongoose";
const { Schema } = mongoose;
import Joi from "joi";

const weaponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rarity: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 3,
    required: true,
  },
  weapon_type: {
    type: String,
    enum: ["sword", "claymore", "polearm", "catalyst", "bow"],
    default: "sword",
    required: true,
  },
  base_attack: {
    type: Number,
    required: true,
  },
  secondary_stat: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  builds: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

export function validateWeapon(weapon) {
  const schema = Joi.object({
    name: Joi.string().required(),
    rarity: Joi.number().required().valid(1, 2, 3, 4, 5),
    weapon_type: Joi.string()
      .required()
      .valid("sword", "claymore", "polearm", "catalysts", "bow"),
    base_attack: Joi.number().required(),
    secondary_stat: Joi.string().required(),
    description: Joi.string().required(),
    builds: Joi.array(),
  });

  return schema.validate(weapon);
}

export const Weapon = mongoose.model("Weapon", weaponSchema);
