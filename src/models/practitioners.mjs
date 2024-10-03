import { model, Schema } from "mongoose";

const practitionersHeroSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  text: String,
});

const PractitionersHero = model("PractitionersHero", practitionersHeroSchema);

const practitionersContentSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  highlight: String,
  content: String,
});

const PractitionersContent = model(
  "PractitionersContent",
  practitionersContentSchema
);

// export models
export default { PractitionersHero, PractitionersContent };
