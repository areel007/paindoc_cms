import ConditionsWeTreatHero from "../models/conditions.we.treat.mjs";
import ConditionsWeTreatContent from "../models/conditions.we.treat.mjs";

// start --> conditions we treat hero
export const newConditionsWeTreatHero = async (req, res) => {
  const { image, text } = req.body;

  try {
    const conditionsWeTreatHero =
      new ConditionsWeTreatHero.ConditionsWeTreatHero({
        image,
        text,
      });

    await conditionsWeTreatHero.save();

    res.status(201).json({
      message: "conditions we treat hero added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getConditionsWeTreatHero = async (req, res) => {
  const { id } = req.params;

  try {
    const conditionsWeTreat =
      await ConditionsWeTreatHero.ConditionsWeTreatHero.findById(id);

    if (!conditionsWeTreat) {
      return res.status(404).json({
        message: "conditions we treat hero not found",
      });
    }

    res.status(200).json(conditionsWeTreat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateConditionsWeTreatHero = async (req, res) => {
  const { id } = req.params;
  const { image, text } = req.body;

  try {
    const conditionsWeTreatHero =
      await ConditionsWeTreatHero.ConditionsWeTreatHero.findByIdAndUpdate(
        id,
        {
          image,
          text,
        },
        { new: true }
      );
    if (!conditionsWeTreatHero) {
      return res
        .status(404)
        .json({ message: "conditions we treat hero not found" });
    }
    res.status(200).json({
      message: "conditions we treat hero updated successfully",
      conditionsWeTreatHero,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// stop --> conditions we treat hero

// start --> condtions we treat content
export const newConditionsWeTreatContent = async (req, res) => {
  const { image, highlight, content } = req.body;

  try {
    const conditionsWeTreatContent =
      new ConditionsWeTreatContent.ConditionsWeTreatContent({
        image,
        highlight,
        content,
      });

    await conditionsWeTreatContent.save();

    res.status(201).json(conditionsWeTreatContent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getConditionsWeTreatContent = async (req, res) => {
  const { id } = req.params;

  try {
    const conditionsWeTreatContent =
      await ConditionsWeTreatContent.ConditionsWeTreatContent.findById(id);

    if (!conditionsWeTreatContent) {
      return res.status(404).json({
        message: "conditions we treat content not found",
      });
    }

    res.status(200).json(conditionsWeTreatContent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateConditionsWeTreatContent = async (req, res) => {
  const { id } = req.params;
  const { image, highlight, content } = req.body;

  try {
    const conditionsWeTreatContent =
      await ConditionsWeTreatContent.ConditionsWeTreatContent.findByIdAndUpdate(
        id,
        {
          image,
          highlight,
          content,
        },
        { new: true }
      );
    if (!conditionsWeTreatContent) {
      return res
        .status(404)
        .json({ message: "conditions we treat content not found" });
    }
    res.status(200).json({
      message: "conditions we treat content updated successfully",
      conditionsWeTreatContent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// stop --> conditions we treat content
