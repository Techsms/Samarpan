const collabSchemas = new mongoose.Schema({
    CollabId:String,
    NGOId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "NGO"
    },
    workDescription:String,
    OrderDate:Date,
    Deadline:Date,
    NoOfEmployee:Number,
    Status:String,

});
export const collabSchema = mongoose.model("collabSchema",collabSchemas);