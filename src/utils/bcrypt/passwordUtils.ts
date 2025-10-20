import bcrypt from "bcrypt";

async function hashPassword(password: string, saltRounds: number = 11) {
    const hashed = await bcrypt.hash(password, saltRounds);

    return hashed;
}

async function comparePassword(enteredPassword: string, originalPassword: string) {
    const isPasswordMatched: boolean = await bcrypt.compare(enteredPassword, originalPassword);

    return isPasswordMatched;
}

export default {
    hashPassword,
    comparePassword,
};
