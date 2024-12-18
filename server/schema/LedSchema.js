import mongoose from "mongoose";

const {Schema } = mongoose;

const LedSchema = new Schema({
    name: {
      type: String,
      required: true, // Name is required
      trim: true, // Removes extra spaces from the start and end
    },
    address: {
      type: String,
      required: true, // Address is required as a string
      trim: true, // Removes extra spaces from the start and end
    },
    parent: {
      type: String,
      required: true, // Address is required as a string
      trim: true,
    },
    country: {
      type: String,
      trim: true, // Removes extra
    },
    state: {
      type: String,
      trim: true, // Removes extra
    },
    email: {
      type: String,
      trim: true, // Removes extra
    },
    phone: {
      type: String,
      trim: true, // Removes extra
    },
  });


// Export the model
export default mongoose.model("Ledgers", LedSchema);
