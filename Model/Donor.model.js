const donorSchemas = new mongoose.schema({
    donorName:String,
    donorEmail:{
        type:String,
        unique:true,
        lowercase:true
    },
    donorContact:Number,
    transactionId:String,
    type:String,
})
export const donorSchema = mongoose.model("donorSchema",donorSchemas)