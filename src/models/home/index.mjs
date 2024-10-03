import { model, Schema } from "mongoose";

// hero
const homeHeroSchema = new Schema({
  heroOne: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroTwo: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroThree: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  heroFour: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
});

const HomeHero = model("HomeHero", homeHeroSchema);

// about
const homeAboutSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  text: {
    title: String,
    highlight: String,
    content: String,
  },
});

const HomeAbout = model("HomeAbout", homeAboutSchema);

// condition we treat
const homeTreatSchema = new Schema({
  conditionOne: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionTwo: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionThree: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionFour: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionFive: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionSix: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionSeven: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionEight: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionNine: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionTen: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionEleven: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
  conditionTwelve: {
    text: String,
    image: {
      type: String,
      default: "",
    },
  },
});

const HomeTreat = model("HomeTreat", homeTreatSchema);

// get the care
const homeGetTheCare = new Schema({
  title: String,
  content: String,
});

const HomeGetTheCare = model("HomeGetTheCare", homeGetTheCare);

// export models
export default { HomeHero, HomeAbout, HomeTreat, HomeGetTheCare };
