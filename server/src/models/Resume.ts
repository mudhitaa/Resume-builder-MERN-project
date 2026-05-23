import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, 
    },

    fullname: String,
    email: String,
    phone: String,
    address: String,
    linkedin: String,
    github: String,

    summary: String,
    skills: [String],

    education: Array,
    experience: Array,
    projects: Array,
    certifications: Array,

    template: String,
    font: String,
    accentColor: String,
  },
  { timestamps: true }
);

const ResumeModel = mongoose.model("Resume",ResumeSchema)

export default ResumeModel