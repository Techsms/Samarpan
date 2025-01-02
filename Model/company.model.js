const companySchemas = new mongoose.Schema({
    comapanyName:String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    joinedOn:Date,
    Sector:String,
    Documents:[],
    Address:String,

});
export const companySchema = mongoose.model("companySchema",companySchemas);