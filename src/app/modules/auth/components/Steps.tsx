import React from "react";
import { AuthLayout } from "../AuthLayout";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import "./steps.scss";
import logo from "../../../assets/Logo.svg";
interface StepsProps {
  step: number;
}

const Steps: React.FC<StepsProps> = ({ step }) => (
  <div className="steps">
    <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
      <div
        className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")})`,
          height: " -webkit-fill-available",
        }}
      >
        <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">
          <img
            className="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
            src={toAbsoluteUrl("/media/misc/logo2.png")}
            alt=""
          />

          <div className="steps_logo">
            <img src={logo} />
          </div>
          <div className={"steps_block " + (step === 1 ? "green" : "black")}>
            <div className="steps_number_wrapper">
              <span className="steps_number">1</span>
              <div className="steps_number_text">
                <div className="steps_number_title">Account type</div>
                <div className="steps_number_description">
                  Select your account type
                </div>
              </div>
            </div>
          </div>
          <div className={"steps_block " + (step === 2 ? "green" : "black")}>
            <div className="steps_number_wrapper">
              <span className="steps_number">2</span>
              <div className="steps_number_text">
                <div className="steps_number_title">Account details</div>
                <div className="steps_number_description">
                  Select your account type
                </div>
              </div>
            </div>
          </div>
          <div className={"steps_block " + (step === 3 ? "green" : "black")}>
            <div className="steps_number_wrapper">
              <span className="steps_number">3</span>
              <div className="steps_number_text">
                <div className="steps_number_title">Creator info</div>
                <div className="steps_number_description">
                  Select your account type
                </div>
              </div>
            </div>
          </div>
          <div className={"steps_block " + (step === 4 ? "green" : "black")}>
            <div className="steps_number_wrapper">
              <span className="steps_number">4</span>
              <div className="steps_number_text">
                <div className="steps_number_title">Completed</div>
                <div className="steps_number_description">
                  Select your account type
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Steps;
