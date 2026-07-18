import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        minLength: 4
    },
    slug: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true
    }
)

const RoomModel = mongoose.model("categories", schema);
export default RoomModel;