import HomeHero from "../../models/home/index.mjs";

export const newHero = (req, res) => {
  const { heroOne, heroTwo, heroThree, heroFour } = req.body;
  const homeHero = new HomeHero.HomeHero({
    heroOne,
    heroTwo,
    heroThree,
    heroFour,
  });
  homeHero
    .save()
    .then(() => {
      res.status(201).json({
        message: "Hero created successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

export const getHero = async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await HomeHero.HomeHero.findById(id);
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHero = async (req, res) => {
  const { id } = req.params;
  const { heroOne, heroTwo, heroThree, heroFour } = req.body;
  try {
    const hero = await HomeHero.HomeHero.findByIdAndUpdate(
      id,
      {
        heroOne,
        heroTwo,
        heroThree,
        heroFour,
      },
      { new: true }
    );
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    res.status(200).json({
      message: "Hero updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
