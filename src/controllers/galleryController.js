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

export const update = async (req, res) => {
  try {

    const payload = {
      title: req.body.title,
      description: req.body.description,
      eventDate: req.body.eventDate,
      location: req.body.location,
      category: req.body.category,
    };

    if (req.file) {
      payload.image = req.file.path;
    }

    const updated =
      await Gallery.findByIdAndUpdate(
        req.params.id,
        payload,
        { new: true }
      );

    res.json(updated);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};