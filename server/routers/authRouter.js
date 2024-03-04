const express = require("express")
const authRouter = express.Router()
const AuthController = require('../controllers/authControllers')

authRouter.post("/login", AuthController.login)
authRouter.get("/getAllUser", AuthController.getAllUser)
authRouter.post("/addUser", AuthController.addUser)
authRouter.post("/getAllUser/:id", AuthController.editUser)
authRouter.delete("/getAllUser/:id/delete", AuthController.deleteUser)


module.exports = authRouter