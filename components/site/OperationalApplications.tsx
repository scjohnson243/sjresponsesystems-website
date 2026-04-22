"use client";

import { useState } from "react";

type ScenarioId =
  | "wildfire"
  | "sar"
  | "tornado"
  | "infrastructure";

type Scenario = {
  id: ScenarioId;
  tabLabel: string;
  title: string;
  problem: string;
  sentinelHelps: string;
  differentiator: string;
  callout: string;
  metrics: Array<{ label: string; value: string }>;
  missionSupport: string;
};

const scenarios: Scenario[] = [
  {
    id: "wildfire",
    tabLabel: "Wildfire Monitoring",
    title: "Persistent wildfire monitoring with immediate hotspot awareness",
    problem:
      "Wildfire operations often rely on intermittent flyovers, spot reports, or manual observation. That creates blind periods where new starts or flare-ups can develop inside the area being watched.",
    sentinelHelps:
      "Sentinel is designed for continuous thermal monitoring across a repeatable autonomous coverage grid, helping teams maintain persistent aerial awareness throughout an active incident instead of depending on occasional passes.",
    differentiator:
      "If another fire starts somewhere inside the monitored coverage grid, Sentinel is designed to detect it and alert operators immediately instead of relying on intermittent flyovers or manual reporting.",
    callout: "Measurable coverage accountability means operators can verify what parts of the fire area were actually observed, how recently they were scanned, and where continuous overwatch is being maintained.",
    metrics: [
      { label: "Active thermal sectors monitored", value: "12 live sectors in the coverage grid" },
      { label: "New hotspot detections", value: "Immediate alerting inside monitored sectors" },
      { label: "Coverage revisit interval", value: "Repeatable sub-grid scan cadence" },
      { label: "Thermal anomaly alerts", value: "Flagged for operator review as conditions change" },
      { label: "Persistent coverage model", value: "Continuous thermal overwatch instead of intermittent passes" },
    ],
    missionSupport:
      "Sentinel’s mission support direction is focused on helping operators adapt coverage priorities during an incident, identify sectors that need tighter revisit timing, and learn from replayed wildfire missions to improve future monitoring effectiveness.",
  },
  {
    id: "sar",
    tabLabel: "Search & Rescue",
    title: "Search accountability that goes beyond a flown route",
    problem:
      "In search operations, a completed flight path does not guarantee meaningful coverage. Teams still need to know what sectors were actually searched, how often they were revisited, and where visibility gaps remain.",
    sentinelHelps:
      "Sentinel supports measurable search accountability by tracking where the aircraft actually observed, how the search area was covered over time, and which sectors still need attention during an active mission.",
    differentiator:
      "Sentinel is designed to help teams understand what areas were actually observed, when they were searched, how often they were revisited, and where coverage gaps may still exist during active operations.",
    callout: "Coverage accountability gives search leaders a defensible record of what sectors received observation and which parts of the mission still require follow-up.",
    metrics: [
      { label: "Sectors searched", value: "Logged by observed search area, not just route flown" },
      { label: "Coverage confidence", value: "Higher confidence where repeat observations were achieved" },
      { label: "Revisit interval", value: "Tracked by search sector during active operations" },
      { label: "Unobserved gaps remaining", value: "Highlighted for follow-up tasking" },
      { label: "Mission replay auditability", value: "Defensible search review after the sortie" },
    ],
    missionSupport:
      "For search operations, Sentinel is intended to support operator-assisted reprioritization by surfacing sectors with weaker observation history, suggesting where coverage should tighten, and improving search planning through replay and simulated mission review.",
  },
  {
    id: "tornado",
    tabLabel: "Tornado Damage Assessment",
    title: "Rapid aerial overwatch after severe weather",
    problem:
      "After a tornado or severe weather event, response teams need fast situational awareness across damaged neighborhoods, blocked routes, and changing access conditions. Ground reports alone are often incomplete in the first operational window.",
    sentinelHelps:
      "Sentinel supports rapid deployment after severe weather by helping teams establish repeatable aerial coverage missions for structural damage assessment, route monitoring, and persistent overwatch as response operations stabilize.",
    differentiator:
      "For Oklahoma-style severe weather response, Sentinel helps teams move from one-time reconnaissance to sustained aerial awareness, so damaged sectors, access routes, and changing conditions can be revisited and tracked over time.",
    callout: "This turns aerial assessment into an operational record, not just a collection of flyovers, which matters when multiple agencies are working across a wide damage footprint.",
    metrics: [
      { label: "Structures reviewed", value: "Prioritized by repeatable aerial sectors" },
      { label: "Route accessibility monitoring", value: "Tracked as ingress and egress conditions change" },
      { label: "Coverage completion percentage", value: "Measured across assigned damage sectors" },
      { label: "Operational updates generated", value: "New aerial observations passed back to response teams" },
      { label: "Persistent overwatch duration", value: "Sustained monitoring across the active response window" },
    ],
    missionSupport:
      "In severe weather response, Sentinel is aimed at helping operators refine damage-assessment priorities as conditions evolve, compare current coverage against planned sectors, and use replay analysis to improve future storm deployment planning.",
  },
  {
    id: "infrastructure",
    tabLabel: "Infrastructure & Energy Monitoring",
    title: "Repeatable corridor observation for remote assets",
    problem:
      "Pipeline corridors, utility routes, and remote energy infrastructure need more than one-off inspections. Teams need repeatable coverage, anomaly awareness, and confidence that large operating areas were actually observed.",
    sentinelHelps:
      "Sentinel supports persistent monitoring of infrastructure and energy assets by enabling repeatable inspection coverage, corridor awareness, and change detection across remote or difficult-to-access environments.",
    differentiator:
      "Instead of simply logging that an aircraft flew the route, Sentinel is focused on whether the corridor was actually observed, where anomalies appeared, and how coverage compares across repeated monitoring cycles.",
    callout: "Measurable coverage accountability helps infrastructure teams prove what was inspected, identify where follow-up is needed, and maintain persistent awareness across long operating corridors.",
    metrics: [
      { label: "Corridor miles monitored", value: "Measured by observed route coverage" },
      { label: "Repeat inspection consistency", value: "Comparable pass-to-pass monitoring cadence" },
      { label: "Anomaly review queue", value: "Flagged changes for operator follow-up" },
      { label: "Coverage continuity", value: "Visibility into missed or weakly observed segments" },
      { label: "Remote site revisit tracking", value: "Useful for remote assets and utility corridors" },
    ],
    missionSupport:
      "For infrastructure teams, Sentinel’s adaptive mission support direction centers on helping operators compare repeated corridor coverage, identify where inspection consistency is slipping, and refine future monitoring routes through replay and simulated planning.",
  },
];

export function OperationalApplications() {
  const [activeScenarioId, setActiveScenarioId] = useState<ScenarioId>("wildfire");

  const activeScenario =
    scenarios.find((scenario) => scenario.id === activeScenarioId) ?? scenarios[0];

  return (
    <div className="applications-shell">
      <div
        className="applications-tabs"
        role="tablist"
        aria-label="Operational applications"
      >
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenario.id;

          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`scenario-panel-${scenario.id}`}
              id={`scenario-tab-${scenario.id}`}
              className={`applications-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveScenarioId(scenario.id)}
            >
              <span className="applications-tab-index">
                {String(scenarios.findIndex((item) => item.id === scenario.id) + 1).padStart(
                  2,
                  "0",
                )}
              </span>
              <span className="applications-tab-label">{scenario.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        className="applications-panel"
        role="tabpanel"
        id={`scenario-panel-${activeScenario.id}`}
        aria-labelledby={`scenario-tab-${activeScenario.id}`}
      >
        <div className="applications-copy">
          <div className="applications-copy-intro">
            <div className="signal-label">Operational outcomes</div>
            <h3 className="applications-title">{activeScenario.title}</h3>
            <p className="applications-intro-copy">
              Sentinel is built to support mission-aware monitoring in the
              field, with measurable coverage accountability, persistent aerial
              awareness, and clearer operational decision support than a
              one-time drone flight alone can provide.
            </p>
          </div>

          <div className="applications-text-grid">
            <article className="applications-copy-card">
              <h4>The operational problem</h4>
              <p>{activeScenario.problem}</p>
            </article>

            <article className="applications-copy-card">
              <h4>How Sentinel helps</h4>
              <p>{activeScenario.sentinelHelps}</p>
            </article>

            <article className="applications-copy-card applications-copy-card-strong">
              <h4>Why this is different</h4>
              <p>{activeScenario.differentiator}</p>
            </article>
          </div>

          <div className="applications-callout">
            <strong>Measurable coverage accountability</strong>
            <p>{activeScenario.callout}</p>
          </div>

          <div className="applications-metrics">
            {activeScenario.metrics.map((metric) => (
              <div key={metric.label} className="applications-metric">
                <span className="applications-metric-label">{metric.label}</span>
                <span className="applications-metric-value">{metric.value}</span>
              </div>
            ))}
          </div>

          <div className="applications-support">
            <div className="applications-support-intro">
              <div className="signal-label">Adaptive mission support</div>
              <h4>Operator-assisted intelligence for stronger mission outcomes</h4>
            </div>
            <p className="applications-support-copy">
              Sentinel is being developed to help teams evaluate mission
              effectiveness during active operations, identify coverage gaps,
              support monitoring-priority adjustments, and improve future
              deployments through replay analysis and simulated mission review.
            </p>
            <p className="applications-support-copy">
              The goal is not to replace operators. The goal is to give teams
              assistive mission intelligence that works with them: highlighting
              weak coverage, supporting dynamic monitoring adjustments, and
              helping operations improve over time.
            </p>
            <div className="applications-support-scenario">
              <strong>{activeScenario.tabLabel}</strong>
              <p>{activeScenario.missionSupport}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
