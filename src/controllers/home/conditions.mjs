import HomeTreat from "../../models/home/index.mjs";

export const newConditionsWeTreat = async (req, res) => {
  const {
    conditionOne,
    conditionTwo,
    conditionThree,
    conditionFour,
    conditionFive,
    conditionSix,
    conditionSeven,
    conditionEight,
    conditionNine,
    conditionTen,
    conditionEleven,
    conditionTwelve,
  } = req.body;

  try {
    const homeConditions = new HomeTreat.HomeTreat({
      conditionOne,
      conditionTwo,
      conditionThree,
      conditionFour,
      conditionFive,
      conditionSix,
      conditionSeven,
      conditionEight,
      conditionNine,
      conditionTen,
      conditionEleven,
      conditionTwelve,
    });

    await homeConditions.save();

    res.status(201).json({
      message: "Home Conditions created successfully",
      homeConditions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getHomeConditions = async (req, res) => {
  const { id } = req.params;
  try {
    const homeConditions = await HomeTreat.HomeTreat.findById(id);
    if (!homeConditions) {
      return res.status(404).json({ message: "Home Conditions not found" });
    }
    res.status(200).json(homeConditions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHomeConditions = async (req, res) => {
  const { id } = req.params;
  const {
    conditionOne,
    conditionTwo,
    conditionThree,
    conditionFour,
    conditionFive,
    conditionSix,
    conditionSeven,
    conditionEight,
    conditionNine,
    conditionTen,
    conditionEleven,
    conditionTwelve,
  } = req.body;

  try {
    const homeConditions = await HomeTreat.HomeTreat.findByIdAndUpdate(
      id,
      {
        conditionOne,
        conditionTwo,
        conditionThree,
        conditionFour,
        conditionFive,
        conditionSix,
        conditionSeven,
        conditionEight,
        conditionNine,
        conditionTen,
        conditionEleven,
        conditionTwelve,
      },
      { new: true }
    );
    if (!homeConditions) {
      return res.status(404).json({
        message: "Home Conditions not found",
      });
    }
    res.status(200).json({
      message: "Home Conditions updated successfully",
      homeConditions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
