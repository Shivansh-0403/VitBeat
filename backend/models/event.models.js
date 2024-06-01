import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema = new Schema(
    {
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        fees: {
            type: Number,
            default: 0
        },
        link: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true
    }
)

// podcastSchema.plugin(mongooseAggregatePaginate)

export const Event = mongoose.model("Event", eventSchema)