const mongoose = require("mongoose")

const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : `mongodb://localhost:27017/express-mvc`
     

// const mongoURI = 'mongodb+srv://dsteel10:<ds-9809207>@cluster0.u4j0r.mongodb.net/deployproject2?retryWrites=true&w=majority'

// if (process.env.NODE_ENV === 'production') {
//     const mongoURI = process.env.DB_URL
// } else {
//     const mongoURI = `mongodb://localhost:27017/express-mvc`
// }


mongoose
    .connect(mongoURI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
        )
    .then( (instance) => 
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch( (err) => console.log(`Connection to db failed due to: ${err}`))

module.exports = mongoose