import random

def backend_preprocess(path):
    emotions = ["Happy", "Sad", "Angry", "Neutral", "Fear"]

    probs = [random.random() for _ in emotions]
    total = sum(probs)
    probs = [p / total for p in probs]

    top3 = sorted(zip(emotions, probs), key=lambda x: x[1], reverse=True)[:3]

    return {
        "emotion": top3[0][0],
        "confidence": top3[0][1],
        "final_duration_s": round(random.uniform(2, 10), 2),
        "probs": probs,
        "top3": top3,
        "debug_wav_path": path
    }