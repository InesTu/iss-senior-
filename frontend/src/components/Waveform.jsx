import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export default function Waveform({ url }) {
  const ref = useRef(null);
  const waveRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url || !ref.current) return;

    setLoading(true);

    // destroy previous instance
    if (waveRef.current) {
      waveRef.current.destroy();
    }

    // create waveform
    waveRef.current = WaveSurfer.create({
      container: ref.current,
      waveColor: "#3b82f6",
      progressColor: "#22c55e",
      cursorColor: "#94a3b8",
      height: 80,
      barWidth: 2,
      barGap: 2,
      responsive: true,
    });

    waveRef.current.load(url);

    waveRef.current.on("ready", () => {
      setLoading(false);
    });

    return () => {
      if (waveRef.current) {
        waveRef.current.destroy();
      }
    };
  }, [url]);

  return (
    <div className="waveform-container">
      {loading && <p className="waveform-loading">Loading waveform...</p>}
      <div ref={ref} />
    </div>
  );
}