import React, { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [video, setVideo] = useState(null);

  const generateVideo = async () => {
    // Placeholder function for AI video generation
    alert(`Generating video for: ${prompt}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>AI Video Generator</h1>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={generateVideo} style={{ marginLeft: "10px", padding: "10px" }}>
        Generate Video
      </button>
      {video && <video src={video} controls style={{ marginTop: "20px", width: "80%" }} />}
    </div>
  );
}

export default App;
	
