const DonationSchemas = new mongoose.Schemas({
    donorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"donor"
    },
    NGOId:{
        type : mongoose.Schema.Types.ObjrctId,
        ref:"NGO"
    },
    Date: Date,
    Amount:Number,
});
export const DonationSchema = mongoose.model("DonationSchema",DonationSchemas);