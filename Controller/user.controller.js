const {
  INTERNAL_SERVER_ERROR,
  SUCCESS,
  ERROR,
} = require("../Utill/responseHelper");
const UserService = require("../Service/user.service");
const { tokenGenarator } = require("../Utill/jwt");

exports.getUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await UserService.getUserDetails(userId);
    if (response) {
      return SUCCESS(res, "user get successfully", response);
    } else {
      return SUCCESS(res, "user not found", null);
    }
  } catch (error) {
    return INTERNAL_SERVER_ERROR(res);
  }
};

exports.updateUserDetails = async (req, res) => {
  try {
    const { userId, userName, totalOrders } = req.body;
    const newData = {};
    if (userName) newData.user_name = userName;
    if (req?.file?.filename) {
      newData.user_image = `${process.env.BACKEND_BASE_URL}public/images/${req.file.filename}`;
    }
    if (totalOrders) newData.total_orders = totalOrders;

    const response = await UserService.updateUserDetails(newData, userId);

    if (response[0] === 1) {
      const user = await UserService.getUserDetails(userId);
      return SUCCESS(res, "user updated successfully", user);
    } else {
      return ERROR(res, "Failed to update");
    }
  } catch (error) {
    return INTERNAL_SERVER_ERROR(res);
  }
};

exports.getUserImage = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await UserService.getUserDetails(userId);
    if (response?.user_image) {
      return SUCCESS(res, "image got successfully", {
        user_image: response.user_image,
      });
    } else {
      return ERROR(res, "image does not exist");
    }
  } catch (error) {
    return INTERNAL_SERVER_ERROR(res);
  }
};

exports.insertUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userImage, totalOrders } =
      req.body;
    const token = tokenGenarator({ userEmail, userName });
    // the file can be accessed in this link
    const savedLink = `${process.env.BACKEND_BASE_URL}public/images/${req.file.filename}`;

    const payload = {
      user_name: userName,
      user_email: userEmail,
      user_password: userPassword,
      user_image: userImage,
      total_orders: totalOrders,
      token: token,
      user_image: savedLink,
    };
    const response = await UserService.insertUser(payload);
    if (response) {
      return SUCCESS(res, "user inserted successfully", response);
    } else {
      return ERROR(res, "request failed with 400", null);
    }
  } catch (error) {
    return INTERNAL_SERVER_ERROR(res);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await UserService.deleteUser(userId);
    if (response) {
      return SUCCESS(res, "user deleted successfully", null);
    } else {
      return ERROR(res, "user not exist for delete", null);
    }
  } catch (error) {
    return INTERNAL_SERVER_ERROR(res);
  }
};
