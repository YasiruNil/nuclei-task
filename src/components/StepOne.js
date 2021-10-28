import React, { useEffect } from "react";
import { connect } from "react-redux";
import { stepOne } from "../action/Index";
import { ArrowRight, ArrowLeft } from "../icons/Arrows";

import { Countries } from "./country";
import Autocomplete from "@mui/material/Autocomplete";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const StepOne = ({
  fieldsStepOne,
  setFieldsStepOne,
  completedSteps,
  setFormSteps,
  stepOneData,
  stepOneValue,
}) => {
  useEffect(() => {
    setFieldsStepOne({ ...fieldsStepOne, stepOneValue });
  }, []);
  const { name, phoneNumber, email, country } = fieldsStepOne;
  const handleSubmit = () => {
    stepOneData(fieldsStepOne);
    setFormSteps((currentStp) => currentStp + 1);
  };
  const handleChange = (e) => {
    setFieldsStepOne({ ...fieldsStepOne, [e.target.name]: e.target.value });
  };
  completedSteps = () => {
    setFieldsStepOne({
      ...fieldsStepOne,
      name: "",
      phoneNumber: "",
      email: "",
      country: "",
    });
    console.log("fl", fieldsStepOne);
    stepOneData(fieldsStepOne);
    setFormSteps((currentStp) => currentStp + 1);
  };
  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <section className="p-xl-5 p-4">
        <div className="row justify-content-xl-start justify-content-center mb-2">
          <div className="col-9">
            <div className="contact_details ">
              <h4 className="MontserASemiBold">Contact Details</h4>
              <h6 className="MontserMedium">
                Welcome to United Properties, we are glad to see you! Let’s get
                started by letting us know a little bit about you
              </h6>
            </div>
          </div>
        </div>
        <div className="row mb-2 justify-content-xl-start justify-content-center">
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3 contact_details-inputs">
                <TextValidator
                  label="Full Name"
                  value={name}
                  name="name"
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["This field is required!"]}
                />
              </div>
              <div className="col-6 mb-3  contact_details-inputs">
                <TextValidator
                  label="Phone Number"
                  value={phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  validators={["required", "matchRegexp:^[0-9]+$"]}
                  errorMessages={["This field is required!", "Enter a number"]}
                />
              </div>
              <div className="col-12 mb-3  contact_details-inputs">
                <TextValidator
                  label="Email Address"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />
              </div>
              <div className="col-12 mb-3  contact_details-inputs">
                <Autocomplete
                  inputValue={country}
                  options={Countries}
                  onChange={(event, newValue) => {
                    setFieldsStepOne({
                      ...fieldsStepOne,
                      country: newValue.name,
                    });
                  }}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextValidator
                      {...params}
                      label="Country" //handle required mark(*) on label
                      value={country}
                      name="country"
                      fullWidth
                      variant="standard"
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      validators={["required"]}
                      errorMessages={["This field is required!"]}
                    />
                  )}
                />
              </div>
            </div>
            <div className="privacy_text">
              <h4 className="MontserAExtraBold">Privacy policy</h4>
              <h6 className="MontserMedium">
                We know you care about how your personal information is used and
                shared, so we take your privacy seriously
              </h6>
              <a href="#/" className="privacy_text-link MontserSemiBold">
                Expand privacy policy
                <span>
                  <ArrowRight arrowsize="step_count-link-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="row p-xl-5 p-4 align-items-center justify-content-center">
        <div className="col-xl-5 col-lg-4  col-12 text-center mb-3">
          <a href="#/" className="back_home MontserSemiBold">
            <span>
              <ArrowLeft arrowsize="step_count-link-arrow-left" />
            </span>
            Back to the home page
          </a>
        </div>
        <div className="col-xl-7 col-lg-8  col-12 text-center">
          <div className="row">
            <div className="col-lg-6 col-12">
              <button
                type="button"
                onClick={completedSteps}
                className="custom_button-skip"
              >
                Skip for now
              </button>
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="custom_button-next w-lg-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </ValidatorForm>
  );
};
const mapStateToProps = ({ steps }) => ({
  stepOneValue: steps.stepOneData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    stepOneData: (data) => dispatch(stepOne(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
