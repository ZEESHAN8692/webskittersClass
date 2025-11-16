import { Schema, model, Document, Types } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  author: Types.ObjectId; // Reference to User
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Blog = model<IBlog>("Blog", blogSchema);

export{
    Blog,
    IBlog
}
