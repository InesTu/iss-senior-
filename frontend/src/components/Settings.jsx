export default function Settings({ config, setConfig }) {
  return (
    <div className="card">
      <p className="eyebrow">Controls</p>
      <h3>Preprocessing Settings</h3>

      {/* Noise Reduction */}
      <div className="settings-group">
        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={config.denoise}
            onChange={(e) =>
              setConfig({ ...config, denoise: e.target.checked })
            }
          />
          <span>Noise Reduction</span>
        </label>
      </div>

      {/* Denoise Method */}
      <div className="settings-group">
        <label className="select-label">Denoise Method</label>
        <select
          className="select"
          value={config.method}
          onChange={(e) =>
            setConfig({ ...config, method: e.target.value })
          }
        >
          <option value="spectral_gate">Spectral Gate</option>
          <option value="highpass">High Pass</option>
        </select>
      </div>

      {/* Max Duration */}
      <div className="settings-group">
        <label className="range-label">
          Max Duration: {config.max_duration_s}s
        </label>
        <input
          type="range"
          min="2"
          max="10"
          step="0.5"
          value={config.max_duration_s}
          onChange={(e) =>
            setConfig({
              ...config,
              max_duration_s: parseFloat(e.target.value),
            })
          }
        />
      </div>

      {/* Min Duration */}
      <div className="settings-group">
        <label className="range-label">
          Min Duration: {config.min_duration_s}s
        </label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={config.min_duration_s}
          onChange={(e) =>
            setConfig({
              ...config,
              min_duration_s: parseFloat(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}