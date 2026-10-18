import { useState, useRef, useEffect } from "react";
import "./ReviewTiles.css";

const reviews = [
  { name: "Luis M.", text: "Cut our deploy time in half. Unreal.", rating: 5 },
  { name: "Sarah K.", text: "The onboarding was smooth. Team loved it.", rating: 5 },
  { name: "Diego R.", text: "Finally a tool that doesn't need a manual.", rating: 4 },
  { name: "Anna T.", text: "Migrated in an afternoon. Zero downtime.", rating: 5 },
  { name: "Carlos V.", text: "Support responds in minutes, not days.", rating: 5 },
  { name: "Mia L.", text: "Cleanest dashboard I've used in years.", rating: 4 },
  { name: "Tom H.", text: "We scaled 10x without touching infra.", rating: 5 },
  { name: "Yuki S.", text: "The API is a dream to work with.", rating: 5 },
  { name: "Carlos V.", text: "Support responds in minutes, not days.", rating: 5 },
  { name: "Mia L.", text: "Cleanest dashboard I've used in years.", rating: 4 },
  { name: "Tom H.", text: "We scaled 10x without touching infra.", rating: 5 },
  { name: "Yuki S.", text: "The API is a dream to work with.", rating: 5 },
];

// Directions each tile slides in from
const directions = [
  { from: { x: -80, y: -80 } },   // top-left
  { from: { x: 80, y: -80 } },    // top-right
  { from: { x: -80, y: 80 } },    // bottom-left
  { from: { x: 80, y: 80 } },     // bottom-right
  { from: { x: -100, y: 0 } },    // left
  { from: { x: 100, y: 0 } },     // right
  { from: { x: 0, y: -100 } },    // top
  { from: { x: 0, y: 100 } },     // bottom
  { from: { x: -40, y: -90 } },   // top-left-ish
  { from: { x: 40, y: -90 } },    // top-right-ish
  { from: { x: -40, y: 90 } },    // bottom-left-ish
  { from: { x: 40, y: 90 } },     // bottom-right-ish
];   

export default function ReviewTiles() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="review-tiles">
      <h2 className="review-tiles__title">What users say</h2>
      <div className="review-tiles__grid">
        {reviews.map((review, i) => {
          const dir = directions[i % directions.length];
          return (
            <div
              key={i}
              className={`review-tile ${visible ? "review-tile--in" : ""}`}
              style={{
                "--from-x": `${dir.from.x}px`,
                "--from-y": `${dir.from.y}px`,
                "--delay": `${i * 0.12}s`,
              }}
            >
              <div className="review-tile__stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="review-tile__text">"{review.text}"</p>
              <span className="review-tile__name">— {review.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}   