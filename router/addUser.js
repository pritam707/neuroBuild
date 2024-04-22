const userModel = require('../model/user')


module.exports = async (params) => {

    try {
        const { name, email, age, designation, gender, mobile } = params

        const sno = await userModel.countDocuments() + 1

        await userModel.create({
            sno,
            name: name,
            email: email,
            gender: gender,
            age: age,
            mobile: mobile,
            designation: designation
        })

        return { message: "User added successfully!", statusCode: 200 }

    }
    catch (err) {
        return { message: err, statusCode: 401 }
    }
}
