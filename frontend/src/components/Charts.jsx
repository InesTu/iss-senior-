import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#06b6d4"];

export default function Charts({ result }) {
  if (!result) return null;

  const emotions = ["Happy", "Sad", "Angry", "Neutral", "Fear", "Disgust"];

  const data = emotions.map((e, i) => ({
    name: e,
    value: result.probs[i] || 0,
  }));

  return (
    <div className="charts-container">

      {/* BAR CHART */}
      <div className="card">
        <p className="eyebrow">Analysis</p>
        <h3>Emotion Probabilities</h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "white",
              }}
              formatter={(value) => (value * 100).toFixed(1) + "%"}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="card">
        <p className="eyebrow">Distribution</p>
        <h3>Emotion Breakdown</h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={3}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "white",
              }}
              formatter={(value) => (value * 100).toFixed(1) + "%"}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}