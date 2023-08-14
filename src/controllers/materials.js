import { Material, validateMaterial } from "../models/material.js";

export const index = async (req, res) => {
  const materials = await Material.find();
  res.send(materials);
};

export const create = async (req, res) => {
  const { error } = validateMaterial(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, rarity, type, description, characters, weapons } = req.body;

  const newMaterial = new Material({
    name,
    rarity,
    type,
    description,
    characters,
    weapons,
  });

  try {
    await newMaterial.save();
    res.json(newMaterial);
  } catch (e) {
    res.json(e);
  }
};

export const destroy = async (req, res) => {
  const material = await Material.findByIdAndRemove(req.params.id);
  if (!material)
    return res
      .status(404)
      .send(`The material with the ID ${req.params.id} was not found.`);
  res.send(material);
};
