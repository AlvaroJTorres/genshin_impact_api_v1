import mongoose from "mongoose";
const { Schema } = mongoose;
import Joi from "joi";

const materialSchema = new mongoose.Schema({
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
  type: {
    type: String,
    enum: [
      "talent",
      "weapon",
      "jewel",
      "local",
      "elemental stone",
      "currency",
      "common",
    ],
    default: "common",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  weapons: [{ type: Schema.Types.ObjectId, ref: "Weapon" }],
});

export function validateMaterial(material) {
  const schema = Joi.object({
    name: Joi.string().required(),
    rarity: Joi.number().required().valid(1, 2, 3, 4, 5),
    type: Joi.string()
      .required()
      .valid(
        "talent",
        "weapon",
        "jewel",
        "local",
        "elemental stone",
        "currency",
        "common"
      ),
    description: Joi.string().required(),
    characters: Joi.array(),
    weapons: Joi.array(),
  });

  return schema.validate(material);
}

export const Material = mongoose.model("Material", materialSchema);
