const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class AuthController {
  static async login(req, res) {
    let { username, password } = req.body;
    try {
      if (!username || !password) throw { name: "invalidLoginInput" };
      console.log(req.body);
      const userLogin = await User.findOne({
        where: {
          username: username,
        },
      });
      if (!userLogin) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = comparePassword(password, userLogin.password);

      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Incorrect Password or Username" });
      }
      const token = signToken({
        id: userLogin.id,
      });

      res.status(200).json({
        user: userLogin.username,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Errors" });
    }
  }
  static async getAllUser(_, res, __) {
    try {
      const getAllUSer = await User.findAll();
      console.log(getAllUSer);
      res.status(200).json({
        message: "Success Getting All User Data",
        getAllUSer,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Errors" });
    }
  }

  static async addUser(req, res, __) {
    try {
      const { username, email, password } = req.body;
      if (username === "" || email === "" || password === "") {
        res.status(406).json({ message: "Empty Data Is not acceptable" });
      }
      const createdUser = await User.create({ username, email, password });
      res.status(201).json({ message: createdUser });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Errors" });
    }
  }
  static async editUser(req, res, __) {
    const { id } = req.params;
    const {username, email, password} = req.body
    console.log(id);
    try {
      const getUserById = await User.findOne({
        where: {
          id: id,
        },
      });
      
      if (!getUserById) {
        return res.status(404).json({ message: "User not found" });
      }

      const editUserById = await getUserById.update({
        username, email, password
      })
      console.log(editUserById);

      res.status(200).json({
        message: `User ${editUserById.username}, Has Been Updated`,
        user: editUserById,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async deleteUser(req, res, __){
    const { id } = req.params;
    
    try {
      const getUserById = await User.findOne({
        where: {
          id: id,
        },
      });
      
      if (!getUserById) {
        return res.status(404).json({ message: "User not found" });
      }

      const deleteUserById = await getUserById.destroy({
        where:{
          id:id
        }
      })
      console.log(deleteUserById);

      res.status(200).json({
        message: `User ${deleteUserById.username}, Has Been Deleted`,
        user: deleteUserById,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = AuthController;
