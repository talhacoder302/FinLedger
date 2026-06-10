const mongoose = require("mongoose")

async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("✅ MongoDB Connected")
    })
    .catch(err => {
        console.log("❌ Error to Connect to MongoDB", err)
        process.exit(1)
    })
}

module.exports = connectToDB