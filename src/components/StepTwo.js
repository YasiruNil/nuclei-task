import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import Radio from "@mui/material/Radio";
import { stepTwo } from "../action/Index";
import Slider from "@mui/material/Slider";
import { ArrowLeft } from "../icons/Arrows";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
function valuetext(value) {
  return `${value}°C`;
}
const marks = [
  {
    value: 0,
    label: "$10,000",
  },
  {
    value: 20,
    label: "$50,000",
  },
  {
    value: 40,
    label: "$100,000",
  },
  {
    value: 60,
    label: "$200,000",
  },
  {
    value: 80,
    label: "$500,000",
  },
  {
    value: 100,
    label: "$1,000,000",
  },
];
const StepTwo = ({
  fieldsStepTwo,
  setFieldsStepTwo,
  completedSteps,
  setFormSteps,
  StepTwoData,
  stepTwoValue,
}) => {
  useEffect(() => {
    if (stepTwoValue.investFrom !== "" && stepTwoValue.investTo !== "") {
      setFieldsStepTwo({ ...fieldsStepTwo, stepTwoValue });
      var savedVal2;
      var savedVal1;
      if (stepTwoValue.investTo === 10000) {
        savedVal2 = 0;
      }
      if (stepTwoValue.investTo === 50000) {
        savedVal2 = 20;
      }
      if (stepTwoValue.investTo === 100000) {
        savedVal2 = 40;
      }
      if (stepTwoValue.investTo === 200000) {
        savedVal2 = 60;
      }
      if (stepTwoValue.investTo === 500000) {
        savedVal2 = 80;
      }
      if (stepTwoValue.investTo === 1000000) {
        savedVal2 = 100;
      }
      if (stepTwoValue.investFrom === 10000) {
        savedVal1 = 0;
      }
      if (stepTwoValue.investFrom === 50000) {
        savedVal1 = 20;
      }
      if (stepTwoValue.investFrom === 100000) {
        savedVal1 = 40;
      }
      if (stepTwoValue.investFrom === 200000) {
        savedVal1 = 60;
      }
      if (stepTwoValue.investFrom === 500000) {
        savedVal1 = 80;
      }
      if (stepTwoValue.investFrom === 1000000) {
        savedVal1 = 100;
      }
      setValue([savedVal2, savedVal1]);
    }
  }, []);
  const [value, setValue] = useState([0, 0]);
  const handleSubmit = () => {
    StepTwoData(fieldsStepTwo);
    setFormSteps((currentStp) => currentStp + 1);
  };
  const handleChange = (e) => {
    setFieldsStepTwo({ ...fieldsStepTwo, [e.target.name]: e.target.value });
  };
  completedSteps = () => {
    setFieldsStepTwo({
      ...fieldsStepTwo,
      investFrom: 0,
      investTo: 0,
      accreditedInvestor: "no",
    });
    setValue([0, 0]);
    StepTwoData({
      ...fieldsStepTwo,
      investFrom: 0,
      investTo: 0,
      accreditedInvestor: "no",
    });
    setFormSteps((currentStp) => currentStp + 1);
  };
  const handleSliderChange = (event, newValue) => {
    var actualVal1;
    var actualVal2;
    if (event.target.value[0] === 0) {
      actualVal1 = 10000;
    }
    if (event.target.value[0] === 20) {
      actualVal1 = 50000;
    }
    if (event.target.value[0] === 40) {
      actualVal1 = 100000;
    }
    if (event.target.value[0] === 60) {
      actualVal1 = 200000;
    }
    if (event.target.value[0] === 80) {
      actualVal1 = 500000;
    }
    if (event.target.value[0] === 100) {
      actualVal1 = 1000000;
    }
    if (event.target.value[1] === 0) {
      actualVal2 = 10000;
    }
    if (event.target.value[1] === 20) {
      actualVal2 = 50000;
    }
    if (event.target.value[1] === 40) {
      actualVal2 = 100000;
    }
    if (event.target.value[1] === 60) {
      actualVal2 = 200000;
    }
    if (event.target.value[1] === 80) {
      actualVal2 = 500000;
    }
    if (event.target.value[1] === 100) {
      actualVal2 = 1000000;
    }

    setValue(newValue);
    setFieldsStepTwo({
      ...fieldsStepTwo,
      investFrom: actualVal1,
      investTo: actualVal2,
    });
  };
  const { investFrom, investTo, accreditedInvestor } = fieldsStepTwo;
  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <section className="p-xl-5 p-4">
        <div className="row justify-content-xl-start justify-content-center mb-2">
          <div className="col-9">
            <div className="investment_plans">
              <h4 className="MontserASemiBold">Investment plans</h4>
              <h6 className="MontserMedium">
                Let us know about your investment plans. This will help us get
                you to the right expert who will help you further
              </h6>
            </div>
            <div className="investment_plans-topic">
              <h4 className="MontserASemiBold">
                How much are you planning to invest in this year?
              </h4>
            </div>
            <div className="row">
              <div className="col-6">
                <TextValidator
                  label="From"
                  value={investFrom}
                  name="investFrom"
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  disabled
                />
              </div>
              <div className="col-6">
                <TextValidator
                  label="To"
                  value={investTo}
                  name="investTo"
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  disabled
                />
              </div>
            </div>
            <div className="mb-4 mt-4">
              <Box sx={{ width: "auto" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  step={20}
                  marks={marks}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </div>
            <div className="acc_investor mt-3">
              <h4 className="MontserASemiBold">
                Are you an accredited investor?
              </h4>

              <RadioGroup
                row
                aria-label="position"
                onChange={handleChange}
                name="accreditedInvestor"
                value={accreditedInvestor}
              >
                <FormControlLabel
                  value="yes"
                  className={
                    accreditedInvestor === "yes" ? "radioYes" : "radioNo"
                  }
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  className={
                    accreditedInvestor === "no" ? "radioYes" : "radioNo"
                  }
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </div>
          </div>
        </div>
      </section>
      <div className="row p-xl-5 p-4 align-items-center justify-content-center">
        <div className="col-xl-5 col-lg-4  col-12 text-center mb-lg-0 mb-3">
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
  stepTwoValue: steps.stepTwoData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    StepTwoData: (data) => dispatch(stepTwo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
