import mongoose from "mongoose";


const Connection = (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@e-commerce.xzmesrw.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(response => {
        console.log('MongoDB Connection Succeeded.')
    }).catch(error => {
        console.log('Error in DB connection: ' + error)
    });
}

export default Connection