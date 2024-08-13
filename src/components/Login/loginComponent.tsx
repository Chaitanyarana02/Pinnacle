import { FunctionComponent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ProjectService from "../../services/project.service";
import { AxiosError, AxiosResponse } from "axios";
import { InputText } from "primereact/inputtext";
import { NotificationTypeEnum } from "../../enums/notificationType.enum";
import UtilityService from "../../services/utilit.service";
import { Checkbox } from "primereact/checkbox";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../store/store.utils";
import { UserList } from "../../interfaces/users.interface";
import { setUserData } from "../../store/feature/user-data.slice";
export interface LoginData {
  email: string;
  password: string;
}
const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useRef<Toast>(null);
  const [, setCookie] = useCookies(["userData"]);
  const [checked, setChecked] = useState(false);
  const [formValues, setFormValues] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<LoginData>({
    email: "",
    password: "",
  });

  const validate = () => {
    const errors: LoginData = {} as LoginData;

    if (!formValues.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.password) errors.password = "please enter a password";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = () => {
    if (validate()) {
      ProjectService.loginUser(formValues)
        .then(
          (
            res: AxiosResponse<{
              data: {
                data: UserList;
              };
            }>
          ) => {
            dispatch(setUserData(res?.data?.data?.data));
            setCookie("userData", res?.data?.data?.data);

            UtilityService.ShowNotification(
              toast,
              NotificationTypeEnum.Success,
              "Login successful"
            );

            setTimeout(() => {
              navigate("/dashboard");
            }, 1100);
          }
        )
        .catch((e: AxiosError<{ error: { message: string } }>) => {
          const error = e.response?.data.error?.message;
          UtilityService.ShowNotification(
            toast,
            NotificationTypeEnum.Error,
            error || "something Went wrong"
          );
        });
    }
  };
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
            <Button
              label="Register"
              rounded
              onClick={() => navigate("/signUp")}
            />
          </div>
        </div>
      </div>
      <div
        className="flex justify-content-around"
        style={{
          backgroundColor: "var(--color-gray-100)",
          height: "100vh",
        }}
      >
        <Toast ref={toast} />
        <div
          className="align-content-center"
          style={{
            width: "22rem",
            height: "70vh",
          }}
        >
          <div>
            <span className="font-bold text-3xl">Login to your account</span>
          </div>
          <div>
            <div className="font-semibold mt-6">
              <div>
                <div className="w-full">
                  <InputText
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full"
                  />
                  {formErrors.email && (
                    <small className="p-error">{formErrors.email}</small>
                  )}
                </div>
                <div className="w-full mt-4">
                  <InputText
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full"
                  />
                  {formErrors.password && (
                    <small className="p-error">{formErrors.password}</small>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-content-between mt-3 align-content-center">
            <div className="text-600">
              <Checkbox
                className="mr-2"
                onChange={(e) => setChecked(e?.checked || false)}
                checked={checked}
              ></Checkbox>
              Remember Me
            </div>
            <div>
              <span
                className="text-500 underline cursor-pointer"
                onClick={() => {
                  ProjectService.sendForgotPassWord(formValues.email)
                    .then(() => {
                      UtilityService.ShowNotification(
                        toast,
                        NotificationTypeEnum.Success,
                        "Reset Password Link has been sent to your registered email address."
                      );
                    })
                    .catch(() => {
                      UtilityService.ShowNotification(
                        toast,
                        NotificationTypeEnum.Error,
                        "Failed to send forgot password email"
                      );
                    });
                }}
              >
                Forgot Password
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Button label="Login" rounded onClick={handleSubmit} />
          </div>
          <div className="mt-4">
            <span className="text-500">
              New Here?
              <a
                onClick={() => navigate("/signUp")}
                className="text-primary underline cursor-pointer"
              >
                &nbsp; Register Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
