import { useEffect } from 'react';

const styleId = 'wave-loop-style';

function injectWaveStyle() {
  if (document.getElementById(styleId)) return;
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes wave-loop {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .wave-svg {
      animation: wave-loop linear infinite;
      will-change: transform;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  `;
  document.head.appendChild(style);
}

const WaveDivider = ({
  color = '#dab640',
  flip = false,
  height = '80px',
  speed = '8s',
}) => {
  useEffect(injectWaveStyle, []);

  // Three layers: back → front
  const layers = [
    { opacity: 0.3, duration: speed,          delay: '0s'   },
    { opacity: 0.6, duration: speed,          delay: '-2s'  },
    { opacity: 1.0, duration: speed,          delay: '-4s'  },
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        lineHeight: 0,
        position: 'relative',
        height,
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      {layers.map((layer, i) => (
        <svg
          key={i}
          className="wave-svg"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '200%',
            height: '100%',
            opacity: layer.opacity,
            animationDuration: layer.duration,
            animationDelay: layer.delay,
          }}
        >
          <path
            d="M0,60 Q300,120 600,60 T1200,60 T1800,60 T2400,60 L2400,120 L0,120 Z"
            fill={color}
          />
        </svg>
      ))}
    </div>
  );
};

export default WaveDivider;   