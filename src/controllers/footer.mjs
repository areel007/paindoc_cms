import Footer from "../models/footer.mjs";

export const addFooter = async (req, res) => {
  const { about, contacts } = req.body;

  try {
    const footer = new Footer({ about, contacts });
    await footer.save();

    res.status(201).json({
      message: "Footer created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getFooter = async (req, res) => {
  const { id } = req.params;

  try {
    const footer = await Footer.findById(id);
    if (!footer) {
      return res.status(404).json({ message: "Footer not found" });
    }
    res.status(200).json(footer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFooter = async (req, res) => {
  const { id } = req.params;
  const { about, contacts } = req.body;
  try {
    const footer = await Footer.findByIdAndUpdate(
      id,
      {
        about,
        contacts,
      },
      { new: true }
    );
    if (!footer) {
      return res.status(404).json({ message: "Footer not found" });
    }
    res.status(200).json({
      message: "Footer updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
