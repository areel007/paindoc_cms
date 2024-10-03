import HomeAbout from "../../models/home/index.mjs";

export const addNewHomeAbout = async (req, res) => {
  const { image, text } = req.body;

  try {
    const homeAbout = new HomeAbout.HomeAbout({ image, text });

    await homeAbout.save();

    res.status(201).json({
      message: "Home About created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getHomeAbout = async (req, res) => {
  const { id } = req.params;

  try {
    const homeAbout = await HomeAbout.HomeAbout.findById(id);
    if (!homeAbout) {
      return res.status(404).json({
        message: "Home About not found",
      });
    }

    res.status(200).json({
      message: "Home About fetched successfully",
      homeAbout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateHomeAbout = async (req, res) => {
  const { id } = req.params;
  const { image, text } = req.body;

  try {
    const homeAbout = await HomeAbout.HomeAbout.findByIdAndUpdate(
      id,
      {
        image,
        text,
      },
      { new: true }
    );
    if (!homeAbout) {
      return res.status(404).json({
        message: "Home About not found",
      });
    }
    res.status(200).json({
      message: "Home About updated successfully",
      homeAbout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
