const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      required: true,
      enum: [
        "CPU",
        "GPU",
        "Motherboard",
        "RAM",
        "Storage",
        "PSU",
        "Case"
      ]
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    powerDraw: {
      type: Number,
      required: true,
      min: 0
    },

    performanceScore: {
      type: Number,
      required: true,
      min: 0
    },

    specs: {
      type: Object,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", componentSchema);
