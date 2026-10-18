import React from "react";
import "./DriftCards.css";
import productShot from "./assets/logo.png";


const stats = [
  { label: "-Gallup Polling", value: "Investment in employee \ndevelopment is linked to 11% \ngreater profitability", top: "6%", left: "8%" },
  { label: "-Gallup Polling", value: "Employee development doubles the \nlikelihood of retaining employees", top: "6%", right: "8%" },
  { label: "-Gallup Polling", value: "48% of American workers \nare willing to switch jobs \nfor training opportunities", top: "38%", left: "3%" },
  { label: "-Gallup Polling", value: "Managers with coaching \ntraining show 20-28% \nhigher performance", top: "38%", right: "3%" },
  { label: "-Gallup Polling", value: "71% of workers who participated \nin upskilling reported \nenhanced job satisfaction", top: "6%", left: "38%" },
  { label: "-Gallup Polling", value: "93% of Americans support jobs-and-training \ninitiatives combining paid \nwork with targeted training", bottom: "8%", left: "42%" },
  { label: "-Gallup Polling", value: "Placeholder", bottom: "8%", left: "12%" },
  { label: "-Gallup Polling", value: "Placeholder", bottom: "8%", right: "12%" },
];   

export default function DriftCards() {
  return (
    <div className="drift-container">
      {/* Central static image */}
      <img
        className="drift-image"
        src={productShot}
        alt="Product"
      />

      {/* Drifting stat cards */}
      {stats.map((s, i) => (
        <div
          key={i}
          className="drift-card"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            animationDelay: `${i * 1.4}s`,
          }}
        >
          <span className="drift-card__value">{s.value}</span>
          <span className="drift-card__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}   