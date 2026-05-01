export default function Top3({ result }) {
  if (!result) return null;

  return (
    <div className="card">
      <p className="eyebrow">Predictions</p>
      <h3>Top Results</h3>

      <div className="top3-list">
        {result.top3.map((e, i) => (
          <div
            key={i}
            className={`top3-row ${i === 0 ? "top" : ""}`}
          >
            <span className="emotion">{e[0]}</span>
            <span className="value">
              {(e[1] * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}