import { Podcast } from "../models/podcast.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import mongoose from "mongoose"

const uploadPodcast = async (req, res) => {
    try {
        console.log(req.body);
        const { title, description, username } = req.body;

        if (username == "" || title == "") {
            throw new Error("All fields are required");
        }

        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            throw new Error('User not found');
        }

        // if (!req.files) {
        //     throw new Error("Avatar is required")
        // }

        // const avatarLocalPath = req.files?.avatar[0]?.path
        console.log(req.file);
        const avatarLocalPath = req.file.path

        if (!avatarLocalPath) {
            throw new Error("Avatar file is required")
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)
        console.log(avatar)
        // const user = await User.create({ username, email, fullname, avatar, password });
        const user = await User.create({
            username,
            email,
            fullname,
            avatar: avatar?.url || "",
            creations: [],
            password
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