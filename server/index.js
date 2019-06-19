
// importing the package
const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose');

// mongoose connects to database test5
mongoose.connect("mongodb://localhost/test5");

const Todo = mongoose.model('Todo', {
    text: String,
    complete: Boolean
});

// GraphQL schema
// Query is for reading or get
// Mutation is for changing or post, put, delete
const typeDefs = `
    type Query {
        hello(name: String): String!
        todos: [Todo]
    }
    type Todo {
        id: ID!
        text: String!
        complete: Boolean!
    }
    type Mutation {
        createTodo(text: String!): Todo
    }
`

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async (_, { text }) => {
            const todo = new Todo ({ text, complete: false });
            await todo.save();
            return todo;
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open', function() {
    server.start( () => console.log('Server is running on localhost:4000'));
});
