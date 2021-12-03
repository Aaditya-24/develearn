# GraphQL server for Admissions Dept

PROPOSED SCHEMAS

"An applicant contains a single form uploaded by the applicant"
type Application {
    id: ID!
    "The application's form Number"
    form_no: Form!
    "The candidate's personal unique id"
    aadhar : String!
    "The application's candidate"
    candidate : Candidate!
    "The application's fee status"
    fee_status : [Fee]
}

"Candidate who submit their application"
type Candidate {
    id: ID!
    "The candidate's first name and last name"
    name : String
    "The candidate's current role"
    role : String
    "The candidate's uploaded profile picture"
    photo : String
}

"The Project contains project setup"
type Project {
    id:ID!
    "Project title"
    title: String!
    "Department assigned to each project" 
    department : String!
    "The team members assigned to this project"
    members : [Employee!]!
    "The records associated with each project"
    records = [String]
}

"Employee of the school system"
type Employee {
    id: ID!
    "The employee name"
    name : String
    "The employee UUID"
    employee_id : Int
}
