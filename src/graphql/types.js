const { GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean, GraphQLFloat} = require('graphql');
const { User, Post} = require('../models');

const UserType = new GraphQLObjectType(
    {
        name: 'User',
        description: 'User GraphQL type',
        fields: () => ({
                id: { type: GraphQLID },
                email: { type:GraphQLString }
                })
        });

const PostType = new GraphQLInputObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        title: { type: GraphQLString },
        main: { type: GraphQLString }
    })
})


module.exports = {
    UserType,
    PostType
}