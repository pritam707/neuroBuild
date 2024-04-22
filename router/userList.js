const userModel = require('../model/user')


module.exports = async () => {

    try {

        const userList = await userModel.find({}).sort({ createdAt: -1 })
        return { message: "User List:", userList, statusCode: 200 }

    }
    catch (err) {
        return { message: err, statusCode: 401 }
    }
}
