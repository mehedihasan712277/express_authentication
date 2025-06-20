import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is required!"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "description is required!"],
            trim: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
