const { User, Data, Log } = require("../models/index");
const { comparePassword } = require("../helpers/encryption");
const { createToken } = require("../helpers/jwt");

class Controller {
  static async createLogs(type, description) {
    await Log.create({
      title: type,
      description: description,
    });
  }

  static async register(req, res, next) {
    try {
      const { username, password, confirmPassword, age } = req.body;

      if (password !== confirmPassword) {
        throw { name: "PasswordDifferent" };
      }

      const newUser = await User.create({
        username: username,
        password: password,
        age: age,
      });

      let isOneCapitalLetter = false;
      let isMoreThanSixCharacter = false;
      let isOneDigitNumber = false;
      let isOneDigitString = false;

      if (password.length >= 6) {
        isMoreThanSixCharacter = true;
      }

      for (let i = 0; i < password.length; i++) {
        let charChecking = password[i];
        let charCheckingToLowerCase = password[i].toLowerCase();

        if (charChecking !== charCheckingToLowerCase) {
          isOneCapitalLetter = true;
        }

        if (Number(password[i]) !== NaN) {
          isOneDigitNumber = true;
        }

        if (typeof password[i] === "string") {
          isOneDigitString = true;
        }
      }

      const returnData = {
        id: newUser.id,
        username: newUser.username,
      };

      const type = "register";
      const description = `Account with id ${returnData.id} has been registered`;

      Controller.createLogs(type, description);

      res.status(201).json({
        statusCode: 201,
        data: returnData,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username: username,
        },
      });

      if (!user) {
        throw { name: "userOrPassNotFound" };
      }

      const isValidated = comparePassword(password, user.password);

      if (!isValidated) {
        throw { name: "userOrPassNotFound" };
      }

      let access_token = createToken({
        id: user.id,
        username: user.username,
      });

      res.status(200).json({
        statusCode: 200,
        userId: user.id,
        username: user.username,
        access_token: access_token,
      });

      const type = "login";
      const description = `User with id ${user.id} has Logged In`;

      Controller.createLogs(type, description);
    } catch (error) {
      next(error);
    }
  }

  static async readUsers(req, res, next) {
    try {
      const users = await User.findAll();

      res.status(200).json({
        statusCode: 200,
        users: users.map((user) => {
          delete user.dataValues.password;
          return user;
        }),
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
