import mongoose from "mongoose";
const NGOSchema = new mongoose.Schema({
    NGOName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    startingDate: {
        type: Date
    },
    Address: {
        type: String
    },
    RegistrationId: {
        type: String
    },
    Type: {
        type: String,
        enum: ["Widows", "OldAge", "ChildWelFare"],
        required: true
    },
    NGORegistrationId: {
        type: "String",
        require: true
    },
    isCertified: {
        type: Boolean,
        default: false
    }
});

export const Ngo = mongoose.model("Ngo", NGOSchema);