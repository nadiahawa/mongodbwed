const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLInt } =  require('graphql')
const { UserType } = require('./types')
const { User, Post } = require('../models')

const register = {
    type: GraphQLString,
    args:{
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args){
        const checkUser = await User.findOne({ email: args.email });
        if (checkUser){
            throw new Error ("User with this email already exists")
        }
        const { username, email, password } = args;
        const user = new User({ username, email, password });
        await user.save()
        let token;
        return token
    }

}

const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args){
        const user = await User.findOne({ email: args.email });
        if (!user || args.password !== user.password){
            throw new Error("invalid credentials");
        }
        let token;
        return token
    }

}

const createPost = {
    type: GraphQLString,
    args: {
        title: { type: GraphQLString },
        description: { type:GraphQLString },
        userId: { type: GraphQLString },

    }

}

