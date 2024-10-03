import { model, Schema } from "mongoose";

const FooterSchema = new Schema({
  about: String,
  contacts: {
    telephone: String,
    email: String,
    address: String,
  },
});

export default model("Footer", FooterSchema);
