import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    favouriteFoods: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Person = mongoose.model('person',personSchema)
export default Person