import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"
const user = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: Schema.Types.ObjectId, ref: "Role" },
    profilePic: { type: String }

})
user.set("toJSON", {
    virtuals: true,
    transform: (doc, ret, next) => {
        const { password, ...rest } = ret
        return rest
    }
})
user.pre("save", async function () {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
})

user.statics.findByCredentials = async function (email, password) {

    const user = await UserModel.findOne({ email: email }).populate("role")
    if (!user) {
        throw new Error("user not found")


    }
    console.log(user.password, password)
    const validate = await bcrypt.compare(password, user.password)
    console.log(validate, "validate")
    if (!validate) {
        throw new Error("incorrect password")
    }
    return user

}
const UserModel = await mongoose.model("user", user)
export default UserModel