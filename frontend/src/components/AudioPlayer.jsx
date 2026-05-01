import { useRef } from "react";

export default function AudioPlayer({ url, title = "Audio", subtitle = "Preview" }) {
  const audioRef = useRef();

  if (!url) return null;

  return (
    <div className="card">
      <p className="eyebrow">{title}</p>
      <h3>{subtitle}</h3>

      <audio ref={audioRef} controls src={url} className="audio-player" />
    </div>
  );
}