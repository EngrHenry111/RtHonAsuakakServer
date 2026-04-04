import Achievement from "../models/Achievements.js";

export const create = async (req, res) => {
  const {title, description, year} = req.body;

  const achievement = await Achievement.create({
    title,
    description,
    year
  });
  res.json(achievement)
};

export const getAll = async (req, res) => {
  res.json(await Achievement.find());
};

export const update = async (req, res) => {
  const { title, description, year} = req.body;

  const updated = await Achievement.findByIdAndUpdate(
    req.params.id, {title, description, year},
    {new:true}
  );
  res.json(updated);
};

export const remove = async (req, res) => {
  await Achievement.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};