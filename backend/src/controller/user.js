import * as UserService from "../service/user.js"
export const register = async (req, res) => {
    const { email, password, role } = req.body
    const profilePic = req.file.path
    console.log(profilePic, "profile picture ok")
    try {
        const user = await UserService.register(email, password, role, profilePic)
        return res.status(200).json({ message: "user registered", user: user })

    }
    catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    // if (!email || !password) {
    //     return;
    // }
    try {
        const response = await UserService.login(email, password)
        return res.status(200).json({ messsage: "log in successfull", response: response })

    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
}