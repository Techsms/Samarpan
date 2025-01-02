const VolunteerActivitySchemas = new mongoose.Schema({
    VolunteerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Volunteer"
    },
    eventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "event"
    },
    hoursContributed: Number,
    Feedback:String,

});
export const VolunteerActivitySchema = mongoose.model("VolunteerActivitySchema",VolunteerActivitySchemas);