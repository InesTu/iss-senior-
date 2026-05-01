import axios from "axios";

export const uploadAudio = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post("http://127.0.0.1:5000/upload", formData);
  return res.data;
};