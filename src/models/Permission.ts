import mongoose, { Document } from "mongoose";

export type PermissionDocument = Document & {
  access: string;
};

export const PermissionSchema = new mongoose.Schema({
  access: {
    type: String,
    enum: ["READ", "WRITE", "UPDATE", "DELETE"],
  },
});

export default mongoose.model<PermissionDocument>(
  "Permission",
  PermissionSchema
);