import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const musicSchema = new Schema(
    {
        videoFile: {
            type: String, // url
            required: true
        },
        poster: {
            type: String, // url
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
        duration: {
            type: Number, 
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        // isPublished: {
        //     type: Boolean,
        //     default: true
        // },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true
    }
)

musicSchema.plugin(mongooseAggregatePaginate)

export const Music = mongoose.model("Music", musicSchema)