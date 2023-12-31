const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const errorHandler = require("../handlers/errorHandler");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/users", controller.readUsers);

router.use(errorHandler);
module.exports = router;
