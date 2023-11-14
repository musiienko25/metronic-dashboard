import React from "react";

interface StepsProps {
  step: number;
}

const Steps: React.FC<StepsProps> = ({ step }) => (
  <div className="mb-3">
    <h3>Step {step}</h3>
    <p>
      Completed Steps:{" "}
      {Array.from({ length: step - 1 }, (_, i) => i + 1).join(", ")}
    </p>

    <div className={step === 1 ? "green" : "black"}>
      <div>
        <div>1</div>
        <div>
          <div>Account type</div>
          <div>Select your account type</div>
        </div>
      </div>
    </div>
    <div className={step === 2 ? "green" : "black"}>2</div>
    <div className={step === 3 ? "green" : "black"}>3</div>
    <div className={step === 4 ? "green" : "black"}>4</div>
    <div className={step === 5 ? "green" : "black"}>5</div>
  </div>
);

export default Steps;
