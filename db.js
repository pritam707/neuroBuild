const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.set('strictPopulate', false);
// mongoose.set('debug', true)

let mongoDB = async () => {
    return new Promise(async (resolve, reject) => {
        await mongoose
            .connect(process.env.MONGO_URL, {
                minPoolSize: 5,
                maxPoolSize: 10,
            })
            .then(async (database) => {
                console.log('Database Connection successful')
                resolve('OK');
            })
            .catch((err) => {
                console.log('Database Connection error', err)
                reject(err);
            });
    });
};



module.exports = {
    mongoDB,
};
