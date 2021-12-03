const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get daily counters for a project"
    dailyCountersForProject: DailyCounters!

    "Query to display total registrations count till now"
    totalRegistrationsCount: DailyCounters!

    "Query to get all registerations for the project"
    allRegistrations: [Registrations]

    "Query to get all applications for the project"
    allApplications: [Registrations]

  }

  type Registrations {
    id: ID!
    "The candidate's id Number"
    student_id: String
    "The candidate's personal details"
    personalDetails: [PersonalForm]
    contactDetails: [ContactForm]!
  }

  "The Schema contains the candidate's personal details filled in the application form"
  type PersonalForm {
    id: ID!
    "The candidate's aadhar"
    aadhar: String
    "The candidate's name"
    name: String
    "The candidate's gender"
    gender: String
    "The candidate's guardian name 1 : father"
    fathername: String
    "The candidate's guardian name 2 : mother"
    mothername: String
    "The candidate's place of birth"
    placeofbirth: String
    "The candidate's nationality"
    nationality: String
    bloodgroup: String
    dob: String
    mothertongue: String
    religion: String
    subcaste: String
    maritalstatus: String
    category: String
    sikh: String
  }

  "Contains contact details of the candidate"
  type ContactForm {
    _id: ID!
    mobile: String
    email: String
    parentemail: String
    parentmobile: Int
    address: String
    district: String
    state: String
    pincode: String
    isContactSaved: Boolean
    student_id: String
  }

  type DailyCounters {
    applications: Int
    registrations: Int
  }

  type RegisteredCount {
    count: Int
  }
`;

module.exports = typeDefs;
