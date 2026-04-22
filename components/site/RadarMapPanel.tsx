const contourPaths = [
  "M30 56C90 24 156 32 204 66C248 98 292 110 348 92C404 74 470 30 564 44",
  "M18 106C76 86 140 104 194 138C250 172 322 184 390 164C448 148 510 122 582 134",
  "M36 168C86 140 154 152 214 186C268 216 334 226 394 210C462 192 530 164 572 178",
  "M28 230C92 208 142 218 204 248C266 278 334 286 392 270C458 252 506 228 582 236",
  "M46 298C100 272 166 278 228 306C294 336 364 340 426 324C482 310 536 290 576 298",
];

const routePaths = [
  "M84 288C134 246 186 222 244 214C292 206 330 182 372 144C416 106 466 88 524 94",
  "M108 66C156 104 180 144 214 188C244 228 286 256 348 270C410 284 472 274 530 240",
];

const sectorLines = [
  { x1: 300, y1: 180, x2: 522, y2: 138 },
  { x1: 300, y1: 180, x2: 470, y2: 286 },
  { x1: 300, y1: 180, x2: 160, y2: 288 },
  { x1: 300, y1: 180, x2: 116, y2: 104 },
];

const hotspots = [
  { className: "radar-hotspot hotspot-alpha", label: "Thermal anomaly alpha" },
  { className: "radar-hotspot hotspot-bravo", label: "Thermal anomaly bravo" },
  { className: "radar-hotspot hotspot-charlie", label: "Thermal anomaly charlie" },
];

export function RadarMapPanel() {
  return (
    <div className="diagram-frame radar-map-panel" aria-hidden="true">
      <div className="radar-map-surface">
        <svg
          className="radar-map-svg"
          viewBox="0 0 600 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <g className="radar-contours">
            {contourPaths.map((path) => (
              <path key={path} d={path} />
            ))}
          </g>

          <g className="radar-routes">
            {routePaths.map((path) => (
              <path key={path} d={path} />
            ))}
          </g>

          <g className="radar-sector-lines">
            {sectorLines.map((line) => (
              <line
                key={`${line.x2}-${line.y2}`}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
              />
            ))}
          </g>
        </svg>

        <div className="radar-grid-overlay" />
        <div className="radar-noise-overlay" />
        <div className="radar-vignette-overlay" />

        {hotspots.map((hotspot) => (
          <span
            key={hotspot.className}
            className={hotspot.className}
            aria-label={hotspot.label}
          />
        ))}

        <div className="radar-emitter">
          <div className="radar-ring radar-ring-1" />
          <div className="radar-ring radar-ring-2" />
          <div className="radar-ring radar-ring-3" />
          <div className="radar-pulse radar-pulse-1" />
          <div className="radar-pulse radar-pulse-2" />
          <div className="radar-sweep" />
          <div className="radar-emitter-core" />
        </div>

        <div className="radar-hud radar-hud-top-left">
          <span>Sentinel Grid</span>
          <strong>Sector A3</strong>
        </div>
        <div className="radar-hud radar-hud-top-right">
          <span>Signal State</span>
          <strong>Live Scan</strong>
        </div>
        <div className="radar-hud radar-hud-bottom-left">
          <span>Thermal Hints</span>
          <strong>3 Tracked</strong>
        </div>
      </div>
    </div>
  );
}
