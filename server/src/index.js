const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Post = require('./resolvers/Post')
const User = require('./resolvers/User')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

const resolvers = {
  Mutation,
  Query,
  Post,
  User
}

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
