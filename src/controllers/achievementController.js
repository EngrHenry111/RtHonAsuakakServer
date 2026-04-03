import Achievement from "../models/Achievements.js";

export const create = async (req, res) => {
  res.json(await Achievement.create(req.body));
};

export const getAll = async (req, res) => {
  res.json(await Achievement.find());
};

export const update = async (req, res) => {
  res.json(await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const remove = async (req, res) => {
  await Achievement.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};