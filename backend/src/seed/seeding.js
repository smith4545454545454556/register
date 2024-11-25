import mongoose from "mongoose";
import { connectToDB } from "../config/database.js";
import RoleModel from "../model/role.js";
import roles from "../data/role.js";
export const seeding = async () => {
    try {
        await connectToDB()
        console.log("connected to dv")
        await RoleModel.deleteMany({})
        console.log("deleted")
        const role = await Promise.all(roles.map((role) => RoleModel.create({ name: role.name })))
        console.log("roles added", role)

    }
    catch (error) {
        console.log(error)
        return null

    }
}