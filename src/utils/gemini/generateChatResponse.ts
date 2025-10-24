import client from "./client.js";

export const generateChatResponse = async function (message: string) {
    const response = await client.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: message,
    });

    return response.text;
};
