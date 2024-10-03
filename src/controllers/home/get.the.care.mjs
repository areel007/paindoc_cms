import HomeGetTheCare from "../../models/home/index.mjs";

export const newGetTheCare = async (req, res) => {
  const { title, content } = req.body;
  try {
    const homeGetTheCare = new HomeGetTheCare.HomeGetTheCare({
      title,
      content,
    });
    await homeGetTheCare.save();
    res.status(201).json({
      message: "Get The Care created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGetTheCare = async (req, res) => {
  const { id } = req.params;

  try {
    const getTheCare = await HomeGetTheCare.HomeGetTheCare.findById(id);
    if (!getTheCare) {
      return res.status(404).json({ message: "Get The Care not found" });
    }
    res.status(200).json(getTheCare);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGetTheCare = async (req, res) => {
  const { id } = req.params;

  const { title, content } = req.body;

  try {
    const getTheCare = await HomeGetTheCare.HomeGetTheCare.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!getTheCare) {
      return res.status(404).json({ message: "Get The Care not found" });
    }
    res.status(200).json({
      message: "Get The Care updated successfully",
      getTheCare,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
