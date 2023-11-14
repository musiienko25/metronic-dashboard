// CompletedSteps.tsx
import React from "react";

interface CompletedStepsProps {
  steps: number[];
}

const CompletedSteps: React.FC<CompletedStepsProps> = ({ steps }) => (
  <div className="mb-3">
    <h3>Completed Steps:</h3>
    <p>{steps.join(", ")}</p>
  </div>
);

export default CompletedSteps;
