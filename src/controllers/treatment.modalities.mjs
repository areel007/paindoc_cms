import TreatmentModalitiesHero from "../models/treatment.modalities.mjs";
import TreatmentModalitiesContent from "../models/treatment.modalities.mjs";

export const newTreatmentModalitiesHero = async (req, res) => {
  const { image, text } = req.body;

  try {
    const treatmentModalitiesHero =
      new TreatmentModalitiesHero.TreatmentModalitiesHero({
        image,
        text,
      });
    await treatmentModalitiesHero.save();
    res.status(201).json({
      message: "Treatment Modalities Hero created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTreatmentModalitiesHero = async (req, res) => {
  const { id } = req.params;

  try {
    const treatmentModalitiesHero =
      await TreatmentModalitiesHero.TreatmentModalitiesHero.findById(id);
    if (!treatmentModalitiesHero) {
      return res
        .status(404)
        .json({ message: "Treatment Modalities Hero not found" });
    }
    res.status(200).json(treatmentModalitiesHero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTreatmentModalitiesHero = async (req, res) => {
  const { id } = req.params;
  const { image, text } = req.body;

  try {
    const treatmentModalitiesHero =
      await TreatmentModalitiesHero.TreatmentModalitiesHero.findByIdAndUpdate(
        id,
        {
          image,
          text,
        },
        { new: true }
      );
    if (!treatmentModalitiesHero) {
      return res
        .status(404)
        .json({ message: "Treatment Modalities Hero not found" });
    }
    res.status(200).json({
      message: "Treatment Modalities Hero updated successfully",
      treatmentModalitiesHero,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// stop --> treatment modalities hero

// start --> treatment modalities content
export const newTreatmentModalitiesContent = async (req, res) => {
  const { image, highlight, content } = req.body;

  try {
    const treatmentModalitiesContent =
      new TreatmentModalitiesContent.TreatmentModalitiesContent({
        image,
        highlight,
        content,
      });

    await treatmentModalitiesContent.save();

    res.status(201).json(treatmentModalitiesContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTreatmentModalitiesContent = async (req, res) => {
  const { id } = req.params;

  try {
    const treatmentModalitiesContent =
      await TreatmentModalitiesContent.TreatmentModalitiesContent.findById(id);
    if (!treatmentModalitiesContent) {
      return res
        .status(404)
        .json({ message: "Treatment Modalities Content not found" });
    }
    res.status(200).json(treatmentModalitiesContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTreatmentModalitiesContent = async (req, res) => {
  const { id } = req.params;
  const { image, highlight, content } = req.body;

  try {
    const treatmentModalitiesContent =
      await TreatmentModalitiesContent.TreatmentModalitiesContent.findByIdAndUpdate(
        id,
        {
          image,
          highlight,
          content,
        },
        { new: true }
      );
    if (!treatmentModalitiesContent) {
      return res
        .status(404)
        .json({ message: "Treatment Modalities Content not found" });
    }
    res.status(200).json({
      message: "Treatment Modalities Content updated successfully",
      treatmentModalitiesContent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
