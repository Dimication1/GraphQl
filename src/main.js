import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
    type query {
        hello: String!
    }
`

const resolvers = {
    query: {
        hello: () => `Hello world`
        },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log('server is running on localhost:4000'))