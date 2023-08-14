import { Weapon, validateWeapon } from "../models/weapon.js";

export const index = async (req, res) => {
  const weapons = await Weapon.find().populate({
    path: "builds",
    select: "name",
  });
  res.send(weapons);
};

export const create = async (req, res) => {
  const { error } = validateWeapon(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {
    name,
    rarity,
    weapon_type,
    base_attack,
    secondary_stat,
    description,
    builds,
  } = req.body;

  const newWeapon = new Weapon({
    name,
    rarity,
    weapon_type,
    base_attack,
    secondary_stat,
    description,
    builds,
  });

  try {
    await newWeapon.save();
    res.json(newWeapon);
  } catch (e) {
    res.json(e);
  }
};

export const destroy = async (req, res) => {
  const weapon = await Weapon.findByIdAndRemove(req.params.id);
  if (!weapon)
    return res
      .status(404)
      .send(`The weapon with the ID ${req.params.id} was not found.`);
  res.send(weapon);
};
