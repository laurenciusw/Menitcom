const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");
const { User, sequelize } = require("../models");

class UserController {
  static async register(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body;
    const transaction = await sequelize.transaction();

    try {
      const user = await User.create(
        { username, email, password, phoneNumber, address },
        { transaction }
      );
      await transaction.commit();
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      await transaction.rollback();
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "EmailRequired" };

      if (!password) throw { name: "PasswordRequired" };

      const user = await User.findOne({ where: { email } });

      if (!user) throw { name: "InvalidCredentials" };

      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "InvalidCredentials" };

      let payload = {
        id: user.id,
      };

      let access_token = encodeToken(payload);
      let userRole = user.role;

      res.status(200).json({
        access_token,
        email,
        userRole,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
