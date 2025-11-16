import { Schema, model, Document, Types } from "mongoose";

interface IComment extends Document {
  content: string;
  author: Types.ObjectId; // User who commented
  blog: Types.ObjectId;   // Blog being commented on
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  },
  { timestamps: true }
);

const Comment = model<IComment>("Comment", commentSchema);

export { Comment, IComment };
