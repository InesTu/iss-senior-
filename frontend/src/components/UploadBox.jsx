import { useRef, useState } from "react";
import { uploadAudio } from "../api";

export default function UploadBox({ setResult, setLoading, setFileUrl }) {
  const inputRef = useRef();
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;

    setError("");
    setFileName(file.name);
    setLoading(true);
    setFileUrl(URL.createObjectURL(file));

   try {
  const data = await uploadAudio(file);
  setResult(data);
} catch (err) {
  console.error(err);

  const message =
    err.response?.data?.error || "Upload failed. Try again.";

  setError(message);
}
  };

  return (
    <div
      className={`upload-box ${dragging ? "dragging" : ""}`}
      onClick={() => inputRef.current.click()}

      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }}

      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}

      onDragLeave={() => setDragging(false)}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".wav"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <p className="upload-text">
        Drag & Drop audio or <span>click to upload</span>
      </p>

      {fileName && (
        <p className="file-name">🎧 {fileName}</p>
      )}

      {error && (
        <p className="error-text">{error}</p>
      )}
    </div>
  );
}