import React, { useState } from "react";
import axios from "axios";

function App() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const generateVideo = async () => {
        try {
            const res = await axios.post("http://localhost:5000/generate-video", { prompt });
            setResponse(res.data.message);
        } catch (error) {
            console.error(error);
            setResponse("Error generating video.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>AI Video Generator</h1>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt..."
                style={{ padding: "10px", width: "300px", marginRight: "10px" }}
            />
            <button onClick={generateVideo} style={{ padding: "10px 20px" }}>
                Generate Video
            </button>
            <p>{response}</p>
        </div>
    );
}

export default App;
