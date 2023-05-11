import mongoose, { Document } from "mongoose";

export type ImageDocument = Document & {
  title: string;
  alt: string;
  height: string;
  width: string;
  createdDate: string;
  source: string;
  credits: string;
};

export const ImageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  alt: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  source: {
    type: String,
    required: true,
  },
  credits: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ImageDocument>("Image", ImageSchema);