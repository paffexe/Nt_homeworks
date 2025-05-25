const { Schema, model } = require("mongoose");

const adminShcema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  is_active: { type: Boolean },
  is_creator: { type: Boolean },
  created_date: { type: Date },
  updated_date: { type: Date },
});

module.exports = model("admin", adminShcema);
