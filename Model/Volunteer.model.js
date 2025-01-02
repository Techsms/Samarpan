const volunteerSchemas = new mongoose.Schema({
    userName:{
        type:String,
        require: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    Age:{
        type:Number
    },
   Qualification:{
       type:String
    },
    identityCardNo:String,
    document:[],

})

export const volunteerSchema  = mongoose.model("volunteerSchema",volunteerSchemas);