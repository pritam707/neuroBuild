const userModel = require('../model/user')

module.exports = async (id) => {

    try {
        await userModel.findByIdAndDelete({ _id: id })
        return { message: "User Deleted Successfully!", statusCode: 200 }
    }
    catch (err) {
        return { message: err, statusCode: 401 }
    }
}
