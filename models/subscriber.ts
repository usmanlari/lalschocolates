import mongoose, { Schema } from "mongoose";

const SubscriberSchema = new Schema({
  email: String,
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);

export default Subscriber;
