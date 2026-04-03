import Gallery from "../models/Gallery.js";

export const create = async (req, res) => {
  res.json(await Gallery.create({ image: req.file.path }));
};

export const getAll = async (req, res) => {
  res.json(await Gallery.find());
};

export const remove = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};