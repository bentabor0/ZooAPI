import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ZooSchema = new Schema({
    zooName: {
        type: String,
        required: 'Enter a zoo name'
    },
    guestCount: {
        type: Number
    },
    animalCount: {
        type: Number
    },
    animals: {
        type: Array
    },
    guests: {
        type: Array
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});