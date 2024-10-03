import { model, Schema } from "mongoose";

// about hero
const aboutHeroSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  text: String,
});

const AboutHero = model("AboutHero", aboutHeroSchema);

// about content
const aboutContentSchema = new Schema({
  sideText: String,
  highlight: String,
  content: String,
  ourMission: String,
});

const AboutContent = model("AboutContent", aboutContentSchema);

// export schemas
export default { AboutHero, AboutContent };
