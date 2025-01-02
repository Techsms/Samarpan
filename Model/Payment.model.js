
const paymentSchemas = new mongoose.Schema({
    donorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"donor",
    },
    donationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"donation",
    },
    paymentMethod:String,
    Amount:Number,

});
export const paymentSchema = mongoose.model("paymentSchema",paymentSchemas);