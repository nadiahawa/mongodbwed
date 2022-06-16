
const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const { authenticate } = require('./src/middleware/auth')
const path = require('path')


dotenv.config()

const app = express();

connectDB()

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.set('view engine', 'ejs') 

app.set('views', path.join(_dirname, '/src/templates/views'))

app.get('/', (req, res) => {
    console.log('GET request @  received');
    res.send('eyp');
});


require('./src/routes/post')(app)

app.listen(process.env.PORT, ()=>{
    console.log(`qusly runs on port ${process.env.PORT}`)
});  