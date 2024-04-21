import { Schema, model, models } from "mongoose";

const rentStatus = new Schema({
  pendingRent: {
    type: Schema.Types.ObjectId,
    ref: "Person",
  },
});

const RentStatus = models.RentStatus || model("RentStatus", rentStatus);

export default RentStatus;
