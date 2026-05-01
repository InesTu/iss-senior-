Speech Emotion Recognition Web App

📌 Project Description
The Speech Emotion Recognition Web App is a full-stack AI-powered system that detects human emotions from speech audio files. Users can upload an audio recording, and the system analyzes it to predict the dominant emotion along with confidence scores and additional insights.
The application combines a modern React dashboard frontend with a Flask-based Python backend that processes audio and returns emotion predictions using a preprocessing pipeline.

🎯 Key Objective
To build an interactive and user-friendly platform that:
-Accepts audio input from users
-Processes speech using a backend ML pipeline
-Displays emotion predictions in a visually rich dashboard

⚙️ How It Works
-Upload Audio
-Users upload .wav files
-Audio player is displayed for preview
-Backend Processing
-File is sent to Flask API
-Backend function backend_preprocess(path) analyzes the audio

--Returns:
Predicted emotion
Confidence score
Audio duration
Probability distribution
Top 3 emotions
Processed audio path
Frontend Dashboard
Displays results in a modern UI:
Emotion, confidence, and duration cards
Audio players (original + processed)
Emotion probability charts
Top 3 predictions panel
Optional waveform visualization

🧠 Tech Stack
Frontend
React (Vite)
TailwindCSS
Recharts (data visualization)
Axios (API communication)
Framer Motion (animations)
Backend
Python
Flask
Flask-CORS

✨ Features
🎧 Audio upload (drag & drop supported)
🤖 Speech emotion prediction
📊 Interactive charts (pie + bar)
🎵 Audio playback (original & processed)
📈 Top 3 emotion predictions
⚡ Loading states & smooth animations


--Setup:

⚙️ 1. Backend Setup (Flask API)
🔹 Install dependencies

Create and activate a virtual environment:
python -m venv venv

Activate it:

Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Install required packages:
pip install flask flask-cors

🚀 Run Backend
python app.py

The backend will run on:
http://127.0.0.1:5000

💻 2. Frontend Setup (React)
🔹 Install dependencies
cd frontend
npm install

-Install additional libraries:
npm install axios recharts framer-motion

🚀 Run Frontend
npm run dev

The frontend will run on:
http://localhost:5173
🔗 API Connection

Make sure your frontend is configured to call the Flask backend at:

http://127.0.0.1:5000

📦 Requirements
Python 3.x
Node.js & npm
Flask
React

🚀 Run Full Project
Start backend:
cd backend
python app.py
Start frontend:
cd frontend
npm run dev
