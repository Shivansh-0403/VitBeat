import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { transporter } from "../utils/nodemailer.js"

const registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, fullname, password } = req.body;

        if (username == "" || email == "" || password == "" || fullname == "") {
            throw new Error("All fields are required");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error('Email is already in use');
        }

        // if (!req.files) {
        //     throw new Error("Avatar is required")
        // }

        // const avatarLocalPath = req.files?.avatar[0]?.path
        console.log(req.file);
        const avatarLocalPath = req.file?.path

        if (!avatarLocalPath) {
            throw new Error("Avatar file is required")
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)

        // const user = await User.create({ username, email, fullname, avatar, password });
        const user = await User.create({
            username,
            email,
            fullname,
            avatar: avatar?.url || "",
            password,
        })

        if (!user) {
            throw new Error('User register unsuccessful');
        }

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            data: createdUser,
            message: "User registration successful"
        });
    } catch (error) {
        console.log("Error registering user: ", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Error registering user: " + error.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email == "" || password == "") {
            throw new Error("Email and password are required");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("No user found with this email");
        }

        const passwordCorrect = await user.isPasswordCorrect(password);

        if (!passwordCorrect) {
            throw new Error("Incorrect password");
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        const loggedInUser = await User.findById(user._id).select("-password")

        const options = {
            httpOnly: true,
            secure: true
        }

        console.log("Successful login");
        console.log(accessToken);
        console.log(refreshToken);
        // res.status(200).json({
        //     data: [loggedInUser, accessToken, refreshToken],
        //     message: "Login successful"
        // });
        res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                user: loggedInUser, accessToken, refreshToken,
                message: "Login done"
            }
            )
    } catch (error) {
        console.error("Error during login:", error);
        res.status(400).json({
            message: "Login failed. " + error.message
        });
    }
}

const logoutUser = async (req, res) => {
    // console.log(req.cookies?.accessToken);
    // console.log(req.cookies?.refreshToken);
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        // console.log(token);
        if (!token) {
            throw new Error("Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new Error("Invalid Access Token");
        }

        console.log(user)
        await User.findByIdAndUpdate(
            user._id,
            {
                $unset: {
                    refreshToken: 1 // this removes the field from document
                }
            },
            {
                new: true
            }
        );

        const options = {
            httpOnly: true,
            secure: true
        };

        console.log("Logout success");
        res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json({
                message: "User logged out"
            });
    } catch (error) {
        res
            .status(401)
            .json({
                message: error.message || "Invalid access token"
            });
    }
}

const forgotPassword = async (req, res) => {
    try {
        const email = req.body.email

        if (email == "") {
            throw new Error("Please provide an email address")
        }

        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("No user found with this mail id.")
        }

        const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1h"} )
        const mailDetails = {
            from: {
                name: "Srivastava Group of Industries",
                address: process.env.USER_EMAIL
            },
            to: email,
            subject: "Mail regarding password reset",
            text: "Here is your link to reset password:-" + `http://localhost:5173/reset-password/${user._id}/${token}`,
            // html: "<h1>Hello World</h1><p>This is a test email.</p>",
        }

        const sendMail = async (transporter, mailOptions) => {
            try {
                await transporter.sendMail(mailOptions);
                console.log("Email has been sent successfully..");
            } catch (error) {
                console.log(error);
            }
        }
        sendMail(transporter, mailDetails)

        res.status(200).json(
            {
                message: "Email sent successfully"
            }
        )
    } catch (error) {
        res.status(401).json(
            {
                message: "Error occurred while sending the email" + error
            }
        )
    }
}

const resetPassword = async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body; // Extract password from request body

    if (!token || !id) {
        return res.status(400).json({ error: "Details required" });
    }

    try {
        // Verify token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ error: "Token not verified" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Update user's password in the database
        await User.findByIdAndUpdate(id, { password: hashedPassword });

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ error: "Error changing password" });
    }
}

export {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
    // refreshAccessToken,
    // changeCurrentPassword,
    // getCurrentUser,
    // updateAccountDetails,
    // updateUserAvatar,
    // updateUserCoverImage,
    // getUserChannelProfile,
    // getWatchHistory
}