import { useState } from "react";
import UploadBox from "../components/UploadBox";
import Cards from "../components/Cards";
import Charts from "../components/Charts";
import Top3 from "../components/Top3";
import AudioPlayer from "../components/AudioPlayer";
import Waveform from "../components/Waveform";
import Loader from "../components/Loader";
import Settings from "../components/Settings";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  const [config, setConfig] = useState({
    denoise: true,
    method: "spectral_gate",
  });

  const processedUrl = result
  ? "http://127.0.0.1:5000/uploads/" + result.debug_wav_path.split("/").pop()
  : null;

  return (
    <div className="app">

      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h2>🎮 Emotion AI</h2>
        <Settings config={config} setConfig={setConfig} />
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="content">

        <h1>🎧 Speech Emotion Recognition</h1>

        <UploadBox
           setResult={setResult}
           setLoading={setLoading}
           setFileUrl={setFileUrl}
           config={config}
        />

        {loading && <Loader />}

        <Cards result={result} />

        <div className="main">

          <div className="left">

            <div className="card">
              <h4>Original Audio</h4>
              <AudioPlayer url={fileUrl} />
              <Waveform url={fileUrl} />
            </div>

            <div className="card">
              <h4>Processed Audio</h4>
              <AudioPlayer url={processedUrl} />
              <Waveform url={processedUrl} />
            </div>

            <Charts result={result} />

          </div>

          <div className="right">
            <Top3 result={result} />
          </div>

        </div>

      </main>
    </div>
  );
}