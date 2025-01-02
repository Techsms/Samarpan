const eventSchemas = new mongoose.Schemas({
   OrganisedBy:String, // Company_Id
   DateOfEvent:Date,
   Location:String,
   Description:String,
   Beneficiaries:String,
   Volunteer:[],
});
export const eventSchema = mongoose.model("eventSchema",eventSchemas);