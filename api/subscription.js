const ELEVENLABS_API_KEY = "sk_89a5b1f9a4fa5a31301a9f9daf76c054ec1d19934dd6c0e7";

export default async function handler(req, res) {
    try {
        const apiKey = req.headers['xi-api-key'] || req.query.api_key || ELEVENLABS_API_KEY;
        const response = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
            method: "GET",
            headers: {
                "xi-api-key": apiKey
            }
        });
        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ detail: { message: error.message } });
    }
}
