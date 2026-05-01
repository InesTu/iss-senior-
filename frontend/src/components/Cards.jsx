export default function Cards({ result }) {
  if (!result) return null;

  return (
    <div className="cards">
      <Card
        title="Emotion"
        value={result.emotion}
        subtitle="Detected state"
      />

      <Card
        title="Confidence"
        value={(result.confidence * 100).toFixed(2) + "%"}
        subtitle="Model certainty"
      />

      <Card
        title="Duration"
        value={result.final_duration_s + "s"}
        subtitle="Audio length"
      />
    </div>
  );
}

function Card({ title, value, subtitle }) {
  return (
    <div className="card">
      <p className="eyebrow">{title}</p>

      <h2 className="card-value">{value}</h2>

      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
}