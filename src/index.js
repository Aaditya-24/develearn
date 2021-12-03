const { ApolloServer } = require('apollo-server');
// const typeDefs = require('./schema');

const typeDefs = require('./applicant-schema')
const resolvers = require('./resolvers');

// const TrackAPI = require('./datasources/track-api');
const ApplicationsAPI = require('./datasources/applications-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      // trackAPI: new TrackAPI(),
      ApplicationsAPI: new ApplicationsAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
