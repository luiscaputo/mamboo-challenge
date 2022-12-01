import mongoose, { Document, Schema } from 'mongoose';

type ITaskDocument = Document & {
  title: string;
  description: string;
  priority: number;
  status: 'in-backlog' | 'pending' | 'in-progress' | 'in-pr' | 'done';
  members: string;
  tags: string;
  startedAt: Date;
  finishedAt: Date;
};

const taskSchema = new Schema<ITaskDocument>(
  {
    title: { type: String, required: true },
    description: String,
    priority: { type: Number, required: true, min: 1, max: 8 },
    status: { type: 'String', required: true },
    members: [String],
    tags: [String],
    startedAt: ['Date'],
    finishedAt: ['Date'],
  },
  {
    timestamps: true,
    collection: 'tasks',
    versionKey: false,
  }
);

const Task = mongoose.model<ITaskDocument>('Task', taskSchema, 'tasks');

export { Task };
