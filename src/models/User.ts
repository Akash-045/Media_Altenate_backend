import mongoose, { Document } from "mongoose";
import Permission, { PermissionDocument, PermissionSchema } from "./Permission";

export type UserDocument = Document & {
  partnerId: string;
  key: string;
  permissions: PermissionDocument[];
};

export const UserSchema = new mongoose.Schema({
  partnerId: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Permission,
    },
  ],
});

export default mongoose.model<UserDocument>("User", UserSchema);