const {RESTDataSource} = require('apollo-datasource-rest');

class ApplicationsAPI extends RESTDataSource {
    constructor(){
        super();
        // Input the URL of the place where the applications backend is hosted 
        // this server would expose endpoints for 
        this.baseURL = 'https://stormy-basin-30288.herokuapp.com'
    }

    getCountersForProject(){
        return this.get('counter')
    }

    getRegistrations(){
        return this.get('registrations')
    }

    getApplications(){
        return this.get('applications')
    }

}

module.exports = ApplicationsAPI;