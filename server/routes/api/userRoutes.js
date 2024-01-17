const router = require("express").Router();
const { createUser, getAllUsers, login, getSingleUser } = require("../../controllers/user");

router.route("/")
    .post(createUser)
    
    .get(getAllUsers);

router.route("/:userId")
    .get(getSingleUser);    

router.route("/login")
    .post(login);
    

module.exports = router;
