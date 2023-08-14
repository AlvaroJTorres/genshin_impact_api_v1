import { Artifact, validateArtifact } from "../models/artifact.js";

export const index = async (req, res) => {
  const artifacts = await Artifact.find().populate({
    path: "builds",
    select: "id",
  });
  res.send(artifacts);
};

export const create = async (req, res) => {
  const { error } = validateArtifact(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, rarity, bonuses, pieces, builds } = req.body;

  const newArtifact = new Artifact({
    name,
    rarity,
    bonuses,
    pieces,
    builds,
  });

  try {
    await newArtifact.save();
    res.json(newArtifact);
  } catch (e) {
    res.json(e);
  }
};

export const update = async (req, res) => {
  const { name, rarity, bonuses, pieces, builds } = req.body;

  const artifact = await Artifact.findByIdAndUpdate(
    req.params.id,
    {
      name,
      rarity,
      bonuses,
      pieces,
      builds,
    },
    { new: true }
  );
  if (!artifact)
    return res
      .status(404)
      .send(`The artifact with the ID ${req.params.id} was not found.`);
  res.send(artifact);
};

export const destroy = async (req, res) => {
  const artifact = await Artifact.findByIdAndRemove(req.params.id);
  if (!artifact)
    return res
      .status(404)
      .send(`The artifact with the ID ${req.params.id} was not found.`);
  res.send(artifact);
};
