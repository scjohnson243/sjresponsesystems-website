type RadarMapPanelProps = {
  variant?: "default" | "deployment";
  scenario?: "wildfire" | "sar" | "tornado" | "infrastructure";
};

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

const deploymentContourPaths = [
  "M26 78C84 42 152 34 228 58C304 82 364 92 436 74C506 58 564 52 646 72C714 88 780 92 854 64",
  "M18 134C92 112 166 128 246 160C326 192 398 200 470 182C546 164 624 136 702 144C776 154 834 170 882 196",
  "M34 204C96 178 180 184 258 212C340 242 428 252 510 236C594 220 666 192 734 198C806 204 850 222 878 242",
  "M26 280C112 246 202 254 286 286C372 320 460 330 548 314C638 296 722 274 806 282C842 286 868 294 888 304",
];

const deploymentRoutes = [
  "M108 292C164 252 236 218 308 210C380 202 442 182 510 148C578 114 650 102 732 116",
  "M164 88C212 128 258 168 314 206C370 244 432 266 508 272C586 278 662 260 736 228",
  "M276 110C302 136 314 168 328 202C344 242 374 278 422 302",
];

const deploymentArcs = [
  "M266 210A96 96 0 0 1 356 120",
  "M286 236A132 132 0 0 1 410 102",
  "M306 260A168 168 0 0 1 478 122",
];

const deploymentBoundary =
  "M168 116L294 88L444 122L546 208L498 296L364 316L236 286L148 206Z";

const deploymentSectorLines = [
  { x1: 320, y1: 202, x2: 648, y2: 122 },
  { x1: 320, y1: 202, x2: 694, y2: 246 },
  { x1: 320, y1: 202, x2: 468, y2: 316 },
  { x1: 320, y1: 202, x2: 188, y2: 262 },
  { x1: 320, y1: 202, x2: 160, y2: 132 },
];

const deploymentHotspots = [
  {
    className: "radar-hotspot hotspot-alpha hotspot-deployment-alpha",
    label: "Thermal anomaly ridge edge",
  },
  {
    className: "radar-hotspot hotspot-bravo hotspot-deployment-bravo",
    label: "Thermal anomaly corridor",
  },
  {
    className: "radar-hotspot hotspot-charlie hotspot-deployment-charlie",
    label: "Thermal anomaly perimeter",
  },
];

export function RadarMapPanel({
  variant = "default",
  scenario = "wildfire",
}: RadarMapPanelProps) {
  const isDeployment = variant === "deployment";
  const scenarioClass = isDeployment ? ` radar-scenario-${scenario}` : "";

  return (
    <div
      className={`diagram-frame radar-map-panel${isDeployment ? " radar-map-panel-deployment" : ""}${scenarioClass}`}
      aria-hidden="true"
    >
      <div className="radar-map-surface">
        <svg
          className="radar-map-svg"
          viewBox={isDeployment ? "0 0 900 360" : "0 0 600 360"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <g className="radar-contours">
            {(isDeployment ? deploymentContourPaths : contourPaths).map((path) => (
              <path key={path} d={path} />
            ))}
          </g>

          <g className="radar-routes">
            {(isDeployment ? deploymentRoutes : routePaths).map((path) => (
              <path key={path} d={path} />
            ))}
          </g>

          {isDeployment ? (
            <>
              <g className="radar-boundary-layer">
                <path d={deploymentBoundary} />
              </g>
              <g className="radar-observation-arcs">
                {deploymentArcs.map((path) => (
                  <path key={path} d={path} />
                ))}
              </g>
            </>
          ) : null}

          <g className="radar-sector-lines">
            {(isDeployment ? deploymentSectorLines : sectorLines).map((line) => (
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
        {isDeployment ? <div className="radar-telemetry-band" /> : null}

        {(isDeployment ? deploymentHotspots : hotspots).map((hotspot) => (
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
          {isDeployment ? <div className="radar-ring radar-ring-4" /> : null}
          <div className="radar-pulse radar-pulse-1" />
          <div className="radar-pulse radar-pulse-2" />
          <div className="radar-sweep" />
          <div className="radar-emitter-core" />
        </div>

        <div className="radar-hud radar-hud-top-left">
          <span>{isDeployment ? "Mission Area" : "Sentinel Grid"}</span>
          <strong>{isDeployment ? "Rapid Setup" : "Sector A3"}</strong>
        </div>
        <div className="radar-hud radar-hud-top-right">
          <span>{isDeployment ? "Coverage State" : "Signal State"}</span>
          <strong>{isDeployment ? "Persistent Scan" : "Live Scan"}</strong>
        </div>
        <div className="radar-hud radar-hud-bottom-left">
          <span>{isDeployment ? "Telemetry" : "Thermal Hints"}</span>
          <strong>{isDeployment ? "3 Sectors Live" : "3 Tracked"}</strong>
        </div>
      </div>
    </div>
  );
}
