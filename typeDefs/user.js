import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        getUsers: [User!]!
        getUserInfo(userId: ID!) : User
    }

    extend type Mutation {
        updateUserInfo(userId: ID!, name: String, email: String, jobTitle: String): Boolean
        createUser(name: String, email: String, jobTitle: String): Boolean
        deleteUser(userId: ID!): Boolean
    }

    type User {
        userId: ID!
        name: String
        jobTitle: String
        email: String
    }
`;