const router = require("express").Router();
const { createUser, getAllUsers, login } = require("../../controllers/user");

router.route("/")
    .post(createUser)
    
    .get(getAllUsers);

router.route("/login")
    .post(login);
    

module.exports = router;
