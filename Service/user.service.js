const User = require("../Database/model/user");

class UserService {
  static async insertUser(body) {
    const response = await User.create(body);
    return response;
  }

  static async getUserDetails(userId) {
    const response = await User.findOne({ where: { user_id: userId } });
    return response;
  }

  static async updateUserDetails(newData, userId) {
    const response = await User.update(newData, {
      where: { user_id: userId },
    });

    return response;
  }

  static async deleteUser(userId) {
    const response = await User.destroy({ where: { user_id: userId } });
    return response;
  }
}
module.exports = UserService;
