import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from preprocess import backend_preprocess

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
ALLOWED_EXTENSIONS = {"wav"}

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ✅ check allowed file
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/upload", methods=["POST"])
def upload_audio():
    # ✅ check if file exists
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    # ✅ check filename
    if file.filename == "":
        return jsonify({"error": "Empty filename"}), 400

    # ✅ enforce WAV only
    if not allowed_file(file.filename):
        return jsonify({"error": "Only WAV files are allowed"}), 400

    # ✅ secure filename
    filename = secure_filename(file.filename)
    path = os.path.join(UPLOAD_FOLDER, filename)

    file.save(path)

    print(f"[DEBUG] File saved at: {path}")

    # ✅ process file
    result = backend_preprocess(path)

    print(f"[DEBUG] Processing result: {result}")

    return jsonify(result)


# ✅ serve processed audio
@app.route("/uploads/<path:filename>")
def serve_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)


if __name__ == "__main__":
    app.run(debug=True)