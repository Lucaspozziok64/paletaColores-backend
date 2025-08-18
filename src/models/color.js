import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombreColor: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 30,
        unique: true
    }
})

const Color = mongoose.model('color', colorSchema);

export default Color;