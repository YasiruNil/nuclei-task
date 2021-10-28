import { ArrowLeft } from "../icons/Arrows";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { stepThree } from "../action/Index";
const StepThree = ({ fieldsStepThree, setFieldsStepThree, stepThreeData }) => {
  const {
    singleFamily,
    residentialMultifamily,
    commercialIndustrial,
    commercialHospitality,
    commercialWarehousing,
    commercialOffice,
    commercialRetail,
    other,
  } = fieldsStepThree;
  const handleCheckChange = (event) => {
    setFieldsStepThree({
      ...fieldsStepThree,
      [event.target.name]: event.target.checked,
    });
  };
  console.log(fieldsStepThree);
  const handleSubmit = () => {
    stepThreeData(fieldsStepThree);

    toast.success("Successfully Completed");
  };
  const handleClick = (name, singleFamily) => {
    setFieldsStepThree({
      ...fieldsStepThree,
      [name]: !singleFamily,
    });
  };
  return (
    <>
      <section className="p-5">
        <div className="row mb-2">
          <div className="col-9">
            <div className="investment_preferences">
              <h4 className="MontserASemiBold">Investment preferences</h4>
              <h6 className="MontserMedium">
                This will help us figure out what your investment options are so
                that we can show you only possibly intresting for you deals
              </h6>
            </div>
          </div>
        </div>
        <div className="investment_interest">
          <h4 className="MontserASemiBold">
            What kind of real estate are you interested in?
          </h4>
          <div className="row MontserAMedium">
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  singleFamily
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() => handleClick("singleFamily", singleFamily)}
              >
                <div>
                  <Checkbox
                    checked={singleFamily}
                    className={
                      singleFamily
                        ? "interest_box-checked"
                        : "interest_box-no-checked"
                    }
                    name="singleFamily"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Single Family
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  residentialMultifamily
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("residentialMultifamily", residentialMultifamily)
                }
              >
                <div>
                  <Checkbox
                    checked={residentialMultifamily}
                    name="residentialMultifamily"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Residential multifamily
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  commercialRetail
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("commercialRetail", commercialRetail)
                }
              >
                <div>
                  <Checkbox
                    checked={commercialRetail}
                    name="commercialRetail"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Commercial retail
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  commercialIndustrial
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("commercialIndustrial", commercialIndustrial)
                }
              >
                <div>
                  <Checkbox
                    checked={commercialIndustrial}
                    name="commercialIndustrial"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Commercial industrial
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  commercialHospitality
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("commercialHospitality", commercialHospitality)
                }
              >
                <div>
                  <Checkbox
                    checked={commercialHospitality}
                    name="commercialHospitality"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Commercial hospitality
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  commercialWarehousing
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("commercialWarehousing", commercialWarehousing)
                }
              >
                <div>
                  <Checkbox
                    checked={commercialWarehousing}
                    name="commercialWarehousing"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Commercial warehousing
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  commercialOffice
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() =>
                  handleClick("commercialOffice", commercialOffice)
                }
              >
                <div>
                  <Checkbox
                    checked={commercialOffice}
                    name="commercialOffice"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Commercial office
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 investment_interest-box">
              <div
                className={
                  other
                    ? "investment_interest-box-wrapperActive"
                    : "investment_interest-box-wrapper"
                }
                onClick={() => handleClick("other", other)}
              >
                <div>
                  <Checkbox
                    checked={other}
                    name="other"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div>
                  <h4 className="text-center p-2" style={{ fontSize: "14px" }}>
                    Other
                  </h4>
                </div>
              </div>
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
              <button type="button" className="custom_button-skip">
                Skip for now
              </button>
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button
                onClick={handleSubmit}
                type="submit"
                className="custom_button-finish"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepThreeData: (data) => dispatch(stepThree(data)),
  };
};

export default connect(null, mapDispatchToProps)(StepThree);
