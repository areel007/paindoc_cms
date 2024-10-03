import e from "cors";
import AboutHero from "../models/about/index.mjs";
import AboutContent from "../models/about/index.mjs";

export const newAboutHero = async (req, res) => {
  const { image, text } = req.body;

  try {
    const aboutHero = new AboutHero.AboutHero({ image, text });
    await aboutHero.save();
    res.status(201).json({
      message: "About Hero created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAboutHero = async (req, res) => {
  const { id } = req.params;

  try {
    const aboutHero = await AboutHero.AboutHero.findById(id);
    if (!aboutHero) {
      return res.status(404).json({ message: "About Hero not found" });
    }
    res.status(200).json(aboutHero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAboutHero = async (req, res) => {
  const { id } = req.params;
  const { image, text } = req.body;

  try {
    const aboutHero = await AboutHero.AboutHero.findByIdAndUpdate(
      id,
      {
        image,
        text,
      },
      { new: true }
    );
    if (!aboutHero) {
      return res.status(404).json({ message: "About Hero not found" });
    }
    res.status(200).json({
      message: "About Hero updated successfully",
      aboutHero,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newAboutContent = async (req, res) => {
  const { sideText, highlight, content, ourMission } = req.body;

  try {
    const aboutContent = new AboutContent.AboutContent({
      sideText,
      highlight,
      content,
      ourMission,
    });
    await aboutContent.save();
    res.status(201).json({
      message: "About Content created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAboutContent = async (req, res) => {
  const { id } = req.params;

  try {
    const aboutContent = await AboutContent.AboutContent.findById(id);
    if (!aboutContent) {
      return res.status(404).json({ message: "About Content not found" });
    }
    res.status(200).json(aboutContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAboutContent = async (req, res) => {
  const { id } = req.params;
  const { sideText, highlight, content, ourMission } = req.body;

  try {
    const aboutContent = await AboutContent.AboutContent.findByIdAndUpdate(
      id,
      {
        sideText,
        highlight,
        content,
        ourMission,
      },
      { new: true }
    );
    if (!aboutContent) {
      return res.status(404).json({ message: "About Content not found" });
    }
    res.status(200).json({
      message: "About Content updated successfully",
      aboutContent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
