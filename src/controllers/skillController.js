import Skill from "../models/Skill.js";

export const create = async (req, res) => {
  res.json(await Skill.create(req.body));
};

export const getAll = async (req, res) => {
  res.json(await Skill.find());
};

export const update = async (req, res) => {
  res.json(await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const remove = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};