import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FunctionComponent, useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectService from "../../services/project.service";
import { Toast } from "primereact/toast";
import UtilityService from "../../services/utilit.service";
import { NotificationTypeEnum } from "../../enums/notificationType.enum";
import { AxiosError } from "axios";
export interface UserSignUpData {
  name: string;
  profession: string;
  mobile: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  companyAddress: string;
}
const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const [formValues, setFormValues] = useState<UserSignUpData>({
    name: "",
    profession: "",
    mobile: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    companyAddress: "",
  });

  const [formErrors, setFormErrors] = useState<UserSignUpData>({
    name: "",
    profession: "",
    mobile: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    companyAddress: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors: UserSignUpData = {} as UserSignUpData;
    if (!formValues.name) errors.name = "Full name is required";
    if (!formValues.profession) errors.profession = "Profession is required";
    if (!formValues.mobile) errors.mobile = "Contact phone is required";
    if (!formValues.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.companyName)
      errors.companyName = "Company name is required";
    if (!formValues.companyWebsite)
      errors.companyWebsite = "Company website is required";
    if (!formValues.companyAddress)
      errors.companyAddress = "Company address is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      ProjectService.createUser(formValues)
        .then(() => {
          UtilityService.ShowNotification(
            toast,
            NotificationTypeEnum.Success,
            "user created successfully"
          );
          setTimeout(() => {
            navigate("/");
          }, 4000);
        })
        .catch((e: AxiosError<{ error: { message: string } }>) => {
          console.log(e);
          const error = e.response?.data.error?.message;
          UtilityService.ShowNotification(
            toast,
            NotificationTypeEnum.Error,
            error || "something Went wrong"
          );
        });
    }
  };

  const openLoginPage = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="flex justify-content-between bg-white w-full p-4">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/logo.svg" alt="" />
        </div>
        <div>
          <div className="flex cursor-pointer logInBtnCustom">
            <Button label="Login" rounded onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>
      <div
        className="flex justify-content-around"
        style={{
          backgroundColor: "var(--color-gray-100)",
        }}
      >
        <Toast ref={toast} />
        <div
          className="align-content-center"
          style={{
            width: "40rem",
            height: "120vh",
          }}
        >
          <div>
            <span className="font-bold text-3xl">
              Let’s register your account.
            </span>
            <div className="text-500">
              <p>This service is designed for professional users.</p>
              <p>
                The registration process is easy – please provide the details
                below and we will respond to you by email with a confirmation
                within 24 hours.
              </p>
              <p>
                Once your registration is confirmed, you will get access to the
                full functionality of Pinnaqle Home.
              </p>
            </div>
          </div>
          <div>
            <div className="font-semibold mt-6">
              Personal Details
              <div>
                <div className="flex justify-content-between mt-4 flex-wrap">
                  <div className="w-18rem">
                    <InputText
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="Enter your Full name"
                      className="w-18rem"
                    />
                    {formErrors.name && (
                      <small className="p-error">{formErrors.name}</small>
                    )}
                  </div>
                  <div className="w-18rem">
                    <InputText
                      type="text"
                      name="profession"
                      value={formValues.profession}
                      onChange={handleInputChange}
                      placeholder="Select your Profession"
                      className="w-18rem"
                    />
                    {formErrors.profession && (
                      <small className="p-error">{formErrors.profession}</small>
                    )}
                  </div>
                </div>
                <div className="flex justify-content-between mt-4  flex-wrap">
                  <div className="w-18rem">
                    <InputText
                      type="number"
                      name="mobile"
                      value={formValues.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your Contact phone"
                      className="w-18rem"
                    />
                    {formErrors.mobile && (
                      <small className="p-error">{formErrors.mobile}</small>
                    )}
                  </div>
                  <div className="w-18rem">
                    <InputText
                      type="text"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Email address"
                      className="w-18rem"
                    />
                    {formErrors.email && (
                      <small className="p-error">{formErrors.email}</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold mt-6">
            Company Details
            <div>
              <div className="flex justify-content-between mt-4 flex-wrap">
                <div className="w-18rem">
                  <InputText
                    type="text"
                    name="companyName"
                    value={formValues.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your Company name"
                    className="w-18rem"
                  />
                  {formErrors.companyName && (
                    <small className="p-error">{formErrors.companyName}</small>
                  )}
                </div>
                <div className="w-18rem">
                  <InputText
                    type="text"
                    name="companyWebsite"
                    value={formValues.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="Enter your Company website"
                    className="w-18rem"
                  />
                  {formErrors.companyWebsite && (
                    <small className="p-error">
                      {formErrors.companyWebsite}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex justify-content-between mt-4  flex-wrap">
                <div>
                  <InputText
                    type="text"
                    name="companyAddress"
                    value={formValues.companyAddress}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your Company postal address"
                  />
                  {formErrors.companyAddress && (
                    <small className="p-error">
                      {formErrors.companyAddress}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button label="Submit" rounded onClick={handleSubmit} />
          </div>
          <div className="mt-4">
            <span className="text-500">
              Already have an account?
              <a
                onClick={openLoginPage}
                className="cursor-pointer text-primary underline"
              >
                &nbsp; Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
