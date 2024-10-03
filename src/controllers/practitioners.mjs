import PractitionersHero from "../models/practitioners.mjs";
import PractitionersContent from "../models/practitioners.mjs";

export const newPractitionersHero = async (req, res) => {
  const { image, text } = req.body;

  try {
    const practitionersHero = new PractitionersHero.PractitionersHero({
      image,
      text,
    });
    await practitionersHero.save();
    res.status(201).json({
      message: "practitioners hero created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getPractitionersHero = async (req, res) => {
  const { id } = req.params;

  try {
    const practitionersHero =
      await PractitionersHero.PractitionersHero.findById(id);
    if (!practitionersHero) {
      return res.status(404).json({ message: "practitioners hero not found" });
    }
    res.status(200).json(practitionersHero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePractitionersHero = async (req, res) => {
  const { id } = req.params;
  const { image, text } = req.body;

  try {
    const practitionersHero =
      await PractitionersHero.PractitionersHero.findByIdAndUpdate(
        id,
        {
          image,
          text,
        },
        { new: true }
      );
    if (!practitionersHero) {
      return res.status(404).json({ message: "practitioners hero not found" });
    }
    res.status(200).json({
      message: "practitioners hero updated successfully",
      practitionersHero,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// stop --> practitioners hero

// start --> practitioners content
export const newPractitionersContent = async (req, res) => {
  const { image, highlight, content } = req.body;

  try {
    const practitionersContent = new PractitionersContent.PractitionersContent({
      image,
      highlight,
      content,
    });

    await practitionersContent.save();

    res.status(201).json(practitionersContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPractitionersContent = async (req, res) => {
  const { id } = req.params;

  try {
    const practitionersContent =
      await PractitionersContent.PractitionersContent.findById(id);
    if (!practitionersContent) {
      return res
        .status(404)
        .json({ message: "practitioners content not found" });
    }
    res.status(200).json(practitionersContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePractitionersContent = async (req, res) => {
  const { id } = req.params;
  const { image, highlight, content } = req.body;

  try {
    const practitionersContent =
      await PractitionersContent.PractitionersContent.findByIdAndUpdate(
        id,
        {
          image,
          highlight,
          content,
        },
        { new: true }
      );
    if (!practitionersContent) {
      return res
        .status(404)
        .json({ message: "practitioners content not found" });
    }
    res.status(200).json({
      message: "practitioners content updated successfully",
      practitionersContent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
