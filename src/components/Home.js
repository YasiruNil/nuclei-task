import "./style.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import React, { useState } from "react";
import { ArrowRight, Quote } from "../icons/Arrows";
const Home = () => {
  const [fieldsStep, setFieldsStep] = useState({
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    investFrom: 0,
    investTo: 0,
    accreditedInvestor: "no",
    singleFamily: false,
    residentialMultifamily: false,
    commercialRetail: false,
    commercialIndustrial: false,
    commercialHospitality: false,
    commercialWarehousing: false,
    commercialOffice: false,
    other: false,
  });
  const [formSteps, setFormSteps] = useState(1);

  const completedSteps = () => {
    setFormSteps((currentStp) => currentStp + 1);
  };
  const handleStepsBack = () => {
    if (formSteps !== 1) {
      setFormSteps((currentStp) => currentStp - 1);
    }
  };
  const handleStepsForward = () => {
    if (formSteps !== 3) {
      setFormSteps((currentStp) => currentStp + 1);
    }
  };

  return (
    <div className="container-fluid main_page">
      {/*  <ArrowRightFont /> */}
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-9 position-relative">
          <div
            onClick={handleStepsBack}
            className="main_page-box-left-btn-icon"
          ></div>
          <div
            onClick={handleStepsForward}
            className="main_page-box-right-btn-icon"
          ></div>
          <div className="row no-gutters">
            <div className="col-xl-5 col-12 main_page-box-left d-flex flex-column justify-content-evenly align-items-center position-relative">
              <div className="title mt-4 mb-4">
                <h4 className="MontserExtraBold">
                  <span className="title-left">UNITED </span>
                  <span className="title-right">PROPERTIES</span>
                </h4>
              </div>
              <div className="progress_bar MontserratARegular">
                <div className="d-flex justify-content-start progress_bar-box position-relative">
                  <div
                    className={
                      formSteps === 1 || formSteps === 2 || formSteps === 3
                        ? "progressbarBoxActive"
                        : "progressbarBoxInActive"
                    }
                  ></div>
                  <div
                    className={
                      formSteps === 1 || formSteps === 2 || formSteps === 3
                        ? "progressbarLineActive"
                        : "progressbarLineInActive"
                    }
                  ></div>
                  <div
                    className={
                      formSteps === 1 || formSteps === 2 || formSteps === 3
                        ? "progressbarLineSecActive"
                        : "progressbarLineInSecActive"
                    }
                  ></div>
                  <h4
                    className={
                      formSteps === 1 || formSteps === 2 || formSteps === 3
                        ? "pragressbarActive"
                        : "pragressbarInActive"
                    }
                  >
                    Contact details
                  </h4>
                </div>
                <div className="d-flex justify-content-start progress_bar-box position-relative">
                  <div
                    className={
                      formSteps === 2 || formSteps === 3
                        ? "progressbarBoxActive"
                        : "progressbarBoxInActive"
                    }
                  ></div>
                  <div
                    className={
                      formSteps === 2 || formSteps === 3
                        ? "progressbarLineActive"
                        : "progressbarLineInActive"
                    }
                  ></div>
                  <div
                    className={
                      formSteps === 2 || formSteps === 3
                        ? "progressbarLineSecActive"
                        : "progressbarLineInSecActive"
                    }
                  ></div>
                  <h4
                    className={
                      formSteps === 2 || formSteps === 3
                        ? "pragressbarActive"
                        : "pragressbarInActive"
                    }
                  >
                    Investment plans
                  </h4>
                </div>
                <div className="d-flex justify-content-start progress_bar-box position-relative">
                  <div
                    className={
                      formSteps === 3
                        ? "progressbarBoxActive"
                        : "progressbarBoxInActive"
                    }
                  ></div>
                  <h4
                    className={
                      formSteps === 3
                        ? "pragressbarActive"
                        : "pragressbarInActive"
                    }
                  >
                    Investment preferences
                  </h4>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-9">
                  <div className="founder_message w-70 position-relative">
                    <div className="p-5">
                      <p className="MontserItalic">
                        We care about your time, that's why we created a 3-stage
                        onboarding that will not take more than 5 minutes to
                        complete
                      </p>
                      <h4 className="MontserratARegular">William Mac</h4>
                      <h5 className="MontserratRegular">
                        CO-FOUNDER, INVESTOR <span className="massegeU">U</span>
                        <span className="massegeP">P</span>
                      </h5>
                    </div>
                    <div className="message-box d-flex align-items-center justify-content-center">
                      <Quote quoteSize="quoteSizeColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-12 main_page-box-right position-relative">
              <div className="step_count p-5">
                <div className="row">
                  <div className="col-5 MontserSemiBold step_count-text">
                    STEP {formSteps} OF 3
                  </div>
                  <div className="col-7 MontserSemiBold step_count-text">
                    Lost or have trouble?
                    <a className="step_count-link" href="#/">
                      Get help
                      <span className="ml-1 ">
                        <ArrowRight arrowsize="step_count-link-arrow" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {formSteps === 1 && (
                <StepOne
                  fieldsStepOne={fieldsStep}
                  setFieldsStepOne={setFieldsStep}
                  completedSteps={completedSteps}
                  setFormSteps={setFormSteps}
                />
              )}
              {formSteps === 2 && (
                <StepTwo
                  fieldsStepTwo={fieldsStep}
                  setFieldsStepTwo={setFieldsStep}
                  completedSteps={completedSteps}
                  setFormSteps={setFormSteps}
                />
              )}
              {formSteps === 3 && (
                <StepThree
                  fieldsStepThree={fieldsStep}
                  setFieldsStepThree={setFieldsStep}
                  completedSteps={completedSteps}
                  setFormSteps={setFormSteps}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
