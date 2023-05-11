import mongoose, { Document } from "mongoose";
import { ImageSchema, ImageDocument } from "./Image";
import { VideoDocument, VideoSchema } from "./Video";

export type ContentDocument = Document & {
  title: string;
  partnerId: string;
  description: string;
  originalUrl: string;
  publishDate: string;
  paragraph: string;
  images: ImageDocument[];
  videos: VideoDocument[];
};

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  partnerId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  images: [{ ImageSchema }],
  videos: [{ VideoSchema }],
});

export default mongoose.model<ContentDocument>("Content", ContentSchema);