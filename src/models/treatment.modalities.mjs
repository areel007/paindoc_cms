import { model, Schema } from "mongoose";

const treatmentModalitiesHeroSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  text: String,
});

const TreatmentModalitiesHero = model(
  "TreatmentModalitiesHero",
  treatmentModalitiesHeroSchema
);

const treatmentModalitiesContentSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  highlight: String,
  content: String,
});

const TreatmentModalitiesContent = model(
  "TreatmentModalitiesContent",
  treatmentModalitiesContentSchema
);

// export models
export default { TreatmentModalitiesHero, TreatmentModalitiesContent };
