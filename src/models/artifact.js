import mongoose from "mongoose";
const { Schema } = mongoose;
import Joi from "joi";

const artifactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rarity: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 5,
    required: true,
  },
  bonuses: [
    {
      amount: { type: Number, enum: [2, 4], default: 2, required: true },
      effect: String,
    },
  ],
  pieces: [
    {
      piece: {
        type: String,
        enum: ["flower", "plume", "sands", "goblet", "circlet"],
        default: "flower",
        required: true,
      },
      stat: String,
    },
  ],
  builds: [{ type: Schema.Types.ObjectId, ref: "Character" }],
});

export function validateArtifact(artifact) {
  const schema = Joi.object({
    name: Joi.string().required(),
    rarity: Joi.number().required().valid(1, 2, 3, 4, 5),
    bonuses: Joi.array().required(),
    pieces: Joi.array().items(Joi.string()).required(),
    builds: Joi.array(),
  });

  return schema.validate(artifact);
}

export const Artifact = mongoose.model("Artifact", artifactSchema);
