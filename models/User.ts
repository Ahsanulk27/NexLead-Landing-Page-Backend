import mongoose, { Document, Schema } from 'mongoose';

// 1. Define TypeScript interface
export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create Mongoose schema with types
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true
    },
    company: {
      type: String
    },
    message: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// 3. Create model with interface typing
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;

