import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required!"],
            maxLength: [50, "Name should be less than 50 letter!"]
        },
        email: {
            type: String,
            required: [true, "Name is required!"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            minLength: [8, "Password must be at least 8 characters!"],
            select: false
        },
        roles: {
            type: String,
            enum: Object.values(AuthRoles),
            default: AuthRoles.USER
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date
    },
    {
        timestamps: true
    }
)

