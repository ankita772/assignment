const express = require("express");
const router = express.Router();
const UserController = require("../Controller/user.controller");
const { verifyToken } = require("../Utill/jwt");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// 1
router.get("/details/:userId", UserController.getUserDetails);

// 2
router.put(
  "/update",
  verifyToken,
  upload.single("profile_image"),
  UserController.updateUserDetails
);

//3
router.get("/image/:userId", UserController.getUserImage);

//4
router.post(
  "/insert",
  verifyToken,
  upload.single("profile_image"),
  UserController.insertUser
);

//5
router.delete("/delete/:userId", UserController.deleteUser);

module.exports = router;
