import { plans } from "../data/plans";

export default function Planner({ selectedClass }) {
  const plan = plans[selectedClass];

  return (
    <section className="panel">
      <h2>Study plan for {selectedClass}</h2>
      <div className="three-grid">
        <div className="mini-card">
          <h3>Monthly Targets</h3>
          <ul>{plan.monthly.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="mini-card">
          <h3>Weekly Schedule</h3>
          <ul>{plan.weekly.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="mini-card">
          <h3>Daily Plan</h3>
          <ul>{plan.daily.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}