const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/foodify";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });

        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("fooditems");

        const data = await fetched_data.find({}).toArray();
        const food_cat = await mongoose.connection.db.collection("foodcat");
        const cat_data = await food_cat.find({}).toArray();
        //console.log("Fetched data:",cat_data);
        global.fooditems=data
        global.foodcat=cat_data
        //console.log(global.fooditems)
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
module.exports = connectToMongo;
//