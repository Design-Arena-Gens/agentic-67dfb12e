"use client";

import { useMemo, useState } from "react";

const metrics = {
  "Chance Creation": [
    { label: "Northbank City", value: 2.9, unit: "xA/90" },
    { label: "Lisbon United", value: 2.6, unit: "xA/90" },
    { label: "Seattle Sound", value: 2.3, unit: "xA/90" },
  ],
  "Pressing Efficiency": [
    { label: "Riverside Rovers", value: 7.2, unit: "PPDA" },
    { label: "Northbank City", value: 7.5, unit: "PPDA" },
    { label: "Harbor Athletic", value: 8.1, unit: "PPDA" },
  ],
  "Transition Threat": [
    { label: "Seattle Sound", value: 1.8, unit: "xG/Turnover" },
    { label: "Lisbon United", value: 1.4, unit: "xG/Turnover" },
    { label: "Austin Verde", value: 1.2, unit: "xG/Turnover" },
  ],
} as const;

const metricOptions = Object.keys(metrics) as Array<keyof typeof metrics>;

export function TrendExplorer() {
  const [selectedMetric, setSelectedMetric] = useState(metricOptions[0]);
  const data = useMemo(() => metrics[selectedMetric], [selectedMetric]);
  const maxValue = useMemo(
    () => Math.max(...data.map((item) => item.value)),
    [data]
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Data Trends
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Metric Explorer
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-200">
          {metricOptions.map((metric) => {
            const isActive = metric === selectedMetric;
            return (
              <button
                key={metric}
                type="button"
                onClick={() => setSelectedMetric(metric)}
                className={`rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950"
                    : "border-white/10 bg-white/5 hover:border-emerald-400/60 hover:bg-emerald-400/10"
                }`}
              >
                {metric}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {data.map((item) => {
          const width = `${Math.round((item.value / maxValue) * 100)}%`;
          return (
            <div key={item.label} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-200">
                <span>{item.label}</span>
                <span className="text-emerald-200">
                  {item.value.toFixed(1)} {item.unit}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-900/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500"
                  style={{ width }}
                  aria-hidden
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
