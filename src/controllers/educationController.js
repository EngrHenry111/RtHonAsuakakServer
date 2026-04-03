import Education from "../models/Education.js";

export const create = async (req, res) => {
  res.json(await Education.create(req.body));
};

export const getAll = async (req, res) => {
  res.json(await Education.find());
};

export const update = async (req, res) => {
  res.json(await Education.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

export const remove = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};