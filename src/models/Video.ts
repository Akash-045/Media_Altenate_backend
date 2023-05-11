import mongoose, { Document } from "mongoose";

export type VideoDocument = Document & {
  summary: string;
  title: string;
  source: string;
  createDate: string;
  isAdsEnabled: boolean;
  author: string;
};

export const VideoSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },

  isAdsEnabled: {
    type: Boolean,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default mongoose.model<VideoDocument>("Video", VideoSchema);