import mongoose, { Document, Schema } from 'mongoose';

type IUserDocument = Document & {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'frontend' | 'backend' | 'backend' | 'ui/ux' | 'devops';
};

export const usersSchema = new Schema<IUserDocument>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: 'String', required: true },
  },
  {
    timestamps: true,
    collection: 'tasks',
    versionKey: false,
  }
);

export const User = mongoose.model<IUserDocument>('User', usersSchema, 'users');
