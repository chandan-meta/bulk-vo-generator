const ELEVENLABS_API_KEY = "5e11351c759ab90d47805d7c58a4d6f43c7bbfc33cfe108b7c6e5f986ff4ad5e";

export default async function handler(req, res) {
    try {
        const response = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
            method: "GET",
            headers: {
                "xi-api-key": ELEVENLABS_API_KEY
            }
        });
        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
