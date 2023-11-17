import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { getUserByToken, register } from "../core/_requests";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { PasswordMeterComponent } from "../../../../_metronic/assets/ts/components";
import { useAuth } from "../core/Auth";
import { Form, Button, ProgressBar } from "react-bootstrap";
import "./registration.scss";
import Steps from "./Steps";
import user from "./../../../assets/users.svg";
import education from "./../../../assets/education.svg";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  lastname: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Last name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  changepassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required("You must accept the terms and conditions"),
});
// ... інші імпорти ...

export function Registration() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        );
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The registration details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Опрацьовуємо подання форми
  };

  return (
    <div className="registration">
      <Steps step={step} />
      <div className="d-flex justify-content-center align-items-center w-70 registration_wrapper">
        <Form className="registration_form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="buttons_wrapper">
              <div className="button">
                <input type="radio" id="a25" name="check-substitution-2" />
                <label className="btn btn-default" for="a25">
                  <div className="registration_button_wrapper">
                    <div>
                      <img src={user} />
                    </div>
                    <div className="registration_button_text">
                      {" "}
                      <div className="registration_button_title">Creator</div>
                      <div className="registration_button_subtitle">
                        Sign-up as a creator
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="button">
                <input type="radio" id="a25" name="check-substitution-2" />
                <label className="btn btn-default" for="a25">
                  <div className="registration_button_wrapper">
                    <div>
                      <img src={education} />
                    </div>
                    <div className="registration_button_text">
                      {" "}
                      <div className="registration_button_title">Agency</div>
                      <div className="registration_button_subtitle">
                        Sign-up as agency
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            // <div className="registration_button_block">
            //   <button className="registration_button">
            //     <div className="registration_button_wrapper">
            //       <div>
            //         <img src={user} />
            //       </div>
            //       <div className="registration_button_text">
            //         {" "}
            //         <div>Creator</div>
            //         <div>Sign-up as a creator</div>
            //       </div>
            //     </div>
            //   </button>
            // </div>
          )}
          {step === 2 && (
            <Form.Group controlId="formStep2">
              <Form.Group controlId="formStep2">
                <form
                  className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                  noValidate
                  id="kt_login_signup_form"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">
                      Account details
                    </h1>
                    {/* end::Title */}

                    <div className="text-gray-500 fw-semibold fs-6">
                      Your Social Campaigns
                    </div>
                  </div>
                  {/* end::Heading */}

                  {/* begin::Login options */}
                  <div className="row g-3 mb-9">
                    {/* begin::Col */}
                    <div className="col-md-6">
                      {/* begin::Google link */}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/google-icon.svg"
                          )}
                          className="h-15px me-3"
                        />
                        Sign in with Google
                      </a>
                      {/* end::Google link */}
                    </div>
                    {/* end::Col */}

                    {/* begin::Col */}
                    <div className="col-md-6">
                      {/* begin::Google link */}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/apple-black.svg"
                          )}
                          className="theme-light-show h-15px me-3"
                        />
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/brand-logos/apple-black-dark.svg"
                          )}
                          className="theme-dark-show h-15px me-3"
                        />
                        Sign in with Apple
                      </a>
                      {/* end::Google link */}
                    </div>
                    {/* end::Col */}
                  </div>
                  {/* end::Login options */}

                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">
                      Or with email
                    </span>
                  </div>

                  {formik.status && (
                    <div className="mb-lg-15 alert alert-danger">
                      <div className="alert-text font-weight-bold">
                        {formik.status}
                      </div>
                    </div>
                  )}

                  {/* begin::Form group Firstname */}
                  <div className="fv-row mb-8">
                    <input
                      placeholder="First name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("firstname")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.firstname && formik.errors.firstname,
                        },
                        {
                          "is-valid":
                            formik.touched.firstname &&
                            !formik.errors.firstname,
                        }
                      )}
                    />
                    {formik.touched.firstname && formik.errors.firstname && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{formik.errors.firstname}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      placeholder="Last name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("lastname")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.lastname && formik.errors.lastname,
                        },
                        {
                          "is-valid":
                            formik.touched.lastname && !formik.errors.lastname,
                        }
                      )}
                    />
                    {formik.touched.lastname && formik.errors.lastname && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{formik.errors.lastname}</span>
                        </div>
                      </div>
                    )}
                    {/* end::Form group */}
                  </div>

                  {/* begin::Form group Email */}
                  <div className="fv-row mb-8">
                    <input
                      placeholder="Email"
                      type="email"
                      autoComplete="off"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.email && formik.errors.email,
                        },
                        {
                          "is-valid":
                            formik.touched.email && !formik.errors.email,
                        }
                      )}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{formik.errors.email}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* end::Form group */}

                  {/* begin::Form group Password */}
                  <div className="fv-row mb-8" data-kt-password-meter="true">
                    <div className="mb-1">
                      <div className="position-relative mb-3">
                        <input
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          {...formik.getFieldProps("password")}
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid":
                                formik.touched.password &&
                                formik.errors.password,
                            },
                            {
                              "is-valid":
                                formik.touched.password &&
                                !formik.errors.password,
                            }
                          )}
                        />
                        {formik.touched.password && formik.errors.password && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{formik.errors.password}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* begin::Meter */}
                      <div
                        className="d-flex align-items-center mb-3"
                        data-kt-password-meter-control="highlight"
                      >
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                      </div>
                      {/* end::Meter */}
                    </div>
                  </div>

                  <div className="fv-row mb-5">
                    <input
                      type="password"
                      placeholder="Password confirmation"
                      autoComplete="off"
                      {...formik.getFieldProps("changepassword")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.changepassword &&
                            formik.errors.changepassword,
                        },
                        {
                          "is-valid":
                            formik.touched.changepassword &&
                            !formik.errors.changepassword,
                        }
                      )}
                    />
                    {formik.touched.changepassword &&
                      formik.errors.changepassword && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">
                              {formik.errors.changepassword}
                            </span>
                          </div>
                        </div>
                      )}
                  </div>
                  {/* end::Form group */}

                  {/* begin::Form group */}
                  <div className="fv-row mb-8">
                    <label
                      className="form-check form-check-inline"
                      htmlFor="kt_login_toc_agree"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="kt_login_toc_agree"
                        {...formik.getFieldProps("acceptTerms")}
                      />
                      <span>
                        I Accept the{" "}
                        <a
                          href="https://keenthemes.com/metronic/?page=faq"
                          target="_blank"
                          className="ms-1 link-primary"
                        >
                          Terms
                        </a>
                        .
                      </span>
                    </label>
                    {formik.touched.acceptTerms &&
                      formik.errors.acceptTerms && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">
                              {formik.errors.acceptTerms}
                            </span>
                          </div>
                        </div>
                      )}
                  </div>
                </form>
              </Form.Group>
            </Form.Group>
          )}
          {step === 3 && (
            <Form.Group controlId="formStep3">
              {/* Ваші поля для кроку 3 */}
            </Form.Group>
          )}
          <div className="d-flex justify-content-between registration_continue_button">
            {/* {step > 1 && (
              <Button variant="secondary" onClick={handlePrevious}>
                <>Back</>
              </Button>
            )} */}
            {step < 3 ? (
              <Button
                className={step > 1 ? "buttonfull w-100" : ""}
                variant="primary"
                onClick={handleNext}
              >
                Continue
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
