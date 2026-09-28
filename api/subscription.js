const ELEVENLABS_API_KEY = "sk_11c4229f6ae0ec84162634119870ad03a302e629089aff72";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, xi-api-key');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const apiKey = req.headers['xi-api-key'] || req.query.api_key || ELEVENLABS_API_KEY;
        const response = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
            method: "GET",
            headers: {
                "xi-api-key": apiKey
            }
        });
        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ detail: { message: error.message } });
    }
}
