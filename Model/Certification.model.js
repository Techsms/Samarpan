const certificationSchemas = new mongoose.Schema({
    volunteerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"volunteer",
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"event",
    },
    badgeType:String,
    Points: Number, // total no of activity * 5  
});
export const certificationSchema = mongoose.model("certificationSchemas",certificationSchema); 