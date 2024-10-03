import mongoSanitize from "mongo-sanitize";

export const sanitize = (input) => {
  return mongoSanitize(input);
};
