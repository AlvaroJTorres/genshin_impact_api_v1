import { Character, validateCharacter } from "../models/character.js";

export const index = async (req, res) => {
  // const characters = await Character.find().populate({
  //   path: "constellations",
  //   select: "-character",
  // });
  const characters = await Character.find();
  res.send(characters);
};

export const create = async (req, res) => {
  console.log(req.body);
  const { error } = validateCharacter(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!req.file) {
    console.log("No file received");
  } else {
    console.log("file received");
  }

  const {
    name,
    portrait,
    rarity,
    element,
    region,
    weapon_type,
    role,
    gender,
    birthday,
  } = req.body;

  const newCharacter = new Character({
    name,
    portrait,
    rarity,
    element,
    region,
    weapon_type,
    role,
    gender,
    birthday,
  });

  try {
    await newCharacter.save();
    res.json(newCharacter);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};

export const update = async (req, res) => {
  const {
    name,
    portrait,
    rarity,
    element,
    region,
    weapon_type,
    role,
    gender,
    birthday,
  } = req.body;

  const character = await Character.findByIdAndUpdate(
    req.params.id,
    {
      name,
      portrait,
      rarity,
      element,
      region,
      weapon_type,
      role,
      gender,
      birthday,
    },
    { new: true }
  );
  if (!character)
    return res
      .status(404)
      .send(`The character with the ID ${req.params.id} was not found.`);
  res.send(character);
};

export const destroy = async (req, res) => {
  const character = await Character.findByIdAndRemove(req.params.id);
  if (!character)
    return res
      .status(404)
      .send(`The character with the ID ${req.params.id} was not found.`);
  res.send(character);
};
