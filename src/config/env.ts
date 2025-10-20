function getEnvVariable(key: string) {
    const val = process.env[key];

    if (!val) {
        throw new Error("Enviornment variable missing - " + key);
    }

    return key;
}

export default getEnvVariable;
