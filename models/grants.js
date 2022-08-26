const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grantSchema = new Schema({
  id: {},
  parent_agency_number: {type: String},
  OpportunityID: {type: Number},
  OpportunityTitle: {type: String},
  OpportunityNumber: {type: String},
  OpportunityCategory: {type: String},
  FundingInstrumentType: {type: String},
  CategoryOfFundingActivity: [{}],
  CategoryExplanation: {type: String},
  CFDANumbers: {type: String},
  EligibleApplicants: {type: String},
  AdditionalInformationOnEligibility: {type: String},
  AgencyCode: {type: String},
  AgencyName: {type: String},
  PostDate: {type: Date},
  Description: {type: String}
},{ collection : 'Grants' })

module.exports = mongoose.model('Grants', grantSchema);