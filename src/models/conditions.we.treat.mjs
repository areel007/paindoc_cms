import { model, Schema } from "mongoose";

// hero
const conditionsWeTreatHeroSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  text: String,
});

const ConditionsWeTreatHero = model(
  "ConditionsWeTreat",
  conditionsWeTreatHeroSchema
);

// content
const conditionsWeTreatContentSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  highlight: String,
  content: String,
});

const ConditionsWeTreatContent = model(
  "ConditionsWeTreatContent",
  conditionsWeTreatContentSchema
);

// export models
export default { ConditionsWeTreatHero, ConditionsWeTreatContent };
