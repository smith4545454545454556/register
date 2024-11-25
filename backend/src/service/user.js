import { uploadToCloud } from "../cloudinary/cloudinary.js"
import RoleModel from "../model/role.js"
import UserModel from "../model/user.js"
import jwt from "jsonwebtoken"

export const register = async (email, password, role, profilePic) => {
    console.log(email, password, role, profilePic)
    const validateRole = await RoleModel.findOne({ name: role })

    console.log(profilePic, "pathss")
    const validate = await UserModel.findOne({ email: email })
    if (validate) {
        throw new Error("already registered")
    }
    const cloudinary = await uploadToCloud(profilePic)
    console.log(cloudinary, "cloudinary")
    const user = new UserModel({
        email: email,
        password: password,
        role: validateRole.id,
        profilePic: cloudinary.secure_url

    })
    await user.save()
    return user
}
export const generateAccessToken = async (id, email, role) => {
    console.log(id, email, role)
    const accessToken = jwt.sign({
        id: id,
        email: email,
        role: role
    }, process.env.SECRET_KEY)
    return accessToken

}
export const login = async (email, password) => {
    const user = await UserModel.findByCredentials(email, password)
    console.log(user, "user")
    const accessToken = await generateAccessToken(user._id, user.email, user.role.name)
    console.log(accessToken, 'accessToken')
    if (!user) {
        throw new Error("something went wrong while logging in")
    }
    return {
        accessToken: accessToken,
        user: user
    }

}