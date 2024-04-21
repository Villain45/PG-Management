import { Schema, models, model } from "mongoose";

const PersonSchema = new Schema({
  room_no: {
    type: String,
    required: [true, "Room no is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  phone_no: {
    type: String,
    validate: {
      validator: function (num) {
        return num.trim().length == 10;
      },
      message: "Phone Number is Invalid",
    },
    required: [true, "Phone no is required"],
  },
  join_date: {
    type: Date,
    required: [true, "Join Date is required"],
  },
  amount: {
    type: String,
    required: [true, "Rent Amount is required"],
  },
});

const Person = models.Person || model("Person", PersonSchema);

export default Person;
