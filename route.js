const express = require(`express`);
const router = express.Router();

const addUserHandler = require('./router/addUser')
const userListHandler = require('./router/userList')
const userDeleteHandler = require('./router/deleteUser')

router.post(
    "/addUser",
    async (req, res) => {

        const { name, email, age, designation, gender, mobile } = req.body

        await addUserHandler({ name, email, age, designation, gender, mobile }).then((data) => {
            res.send(data)

        }).catch((err) => {
            console.error("Error:", err);
            res.status(500).send("Failed to adding user");
        });
    }
);

router.get(
    "/userList",
    async (req, res) => {

        await userListHandler().then((data) => {
            res.send(data)

        }).catch((err) => {
            console.error("Error:", err);
            res.status(500).send("Failed to getting user list");
        });
    }
);

router.delete(
    "/deleteUser/:id",
    async (req, res) => {
        const id = req.params.id;

        await userDeleteHandler(id)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                console.error("Error deleting user:", err);
                res.status(500).send("Failed to delete user");
            });
    }
);


module.exports = router;
