import UserModel from "../models/user.model.js";
import Cryptr from 'cryptr';
const cryptr = new Cryptr(process.env.SECRET_KEY);
import jwt from 'jsonwebtoken'

import {
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendNotFound,
  sendServerError,
  sendSuccess,
} from "../utils/response.js";
import sendOtpMail from "../utils/sendOtpMail.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) return sendConflict(res, "Accound already exist")
    const encryptedPass = cryptr.encrypt('bacon');
    const otp = Math.floor(Math.random() * 100000 + 800000);
    const otpExpire = Date.now() + 3 * 60 * 1000
    await sendOtpMail(email, otp)
    await UserModel.create({ name, email, password: encryptedPass, otp, otpExpire });

    return res.status(201).json({
      message: "User accound create successfully",
      success: true,
      email: email
    })
  } catch (error) {
    sendServerError(res);
  }
};

export const otpVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(email, otp)
    if (!user) return sendConflict(res, "Try Again");
    if (user.isVerified === true) return sendBadRequest(res);
    if (user.otp != otp) return sendBadRequest(res, "Invalid otp");
    if (user.otpExpire < Date.now()) return sendBadRequest(res, "otp expired");
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpire = undefined;
    await user.save()
    return sendSuccess(res, "otp verfiy successfully");
  } catch (error) {
    console.log(error)
    sendServerError(res);
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password)
    const user = await UserModel.findOne({ email });
    if (!user) return sendNotFound(res);
    const decryptedPassword = cryptr.decrypt(user.password);
    console.log(decryptedPassword, "check")

    const token = jwt.sign({
      exp: 30 * 24 * 60 * 60 * 1000,
      id: user._id
    },
      process.env.SECRET_KEY
    );



    // if (password != decryptedPassword) return sendBadRequest(res,"incorrect password");
    res.cookie('token', token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,     // 30days
      httpOnly: true,      // Prevents client-side JS from accessing the cookie (Protects against XSS)
      secure: false,        // Ensures cookie is sent only over HTTPS
      sameSite: 'strict'   // Protects against CSRF attacks ('strict', 'lax', or 'none')
    });
    if (user.isVerified == false) return sendBadRequest(res, "Please verify your accound");

    return sendSuccess(res, "Login Successfully")


  } catch (error) {
    console.log(error)
    sendServerError(res);
  }
};


