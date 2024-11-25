import mongoose from "mongoose";
const Role = new mongoose.Schema({
    name: { type: String }
})
const RoleModel = mongoose.model("Role", Role)
export default RoleModel
