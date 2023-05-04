import bcrypt from "bcrypt"
// import { hashPassword } from './authHelper';


export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        return hashedPassword
    } catch (error) {
        console.log("Error hashing password")
    }
}


export const comparePassword = async (password, hashedPassword) => {


    return bcrypt.compare(password, hashedPassword)

}