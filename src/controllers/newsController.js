import News from "../models/News.js";

export const create = async (req, res) => {
  const item = await News.create({
    ...req.body,
    image: req.file?.path
  });
  res.json(item);
};

export const getAll = async (req, res) => {
  res.json(await News.find());
};

export const update = async (req, res) => {
  const updated = await News.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      ...(req.file && { image: req.file.path })
    },
    { new: true }
  );
  res.json(updated);
};

export const remove = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};