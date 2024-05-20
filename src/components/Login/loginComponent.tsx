import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../common/Input/input.component";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRegisterNowTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <main className={styles.loginInner}>
        <form className={styles.loginToYourAccountParent}>
          <h1 className={styles.loginToYour}>Login to your account</h1>
          <div className={styles.inputParent}>
            <Input
              label="Email address"
              placeholderPlaceholder="Email Address"
            />
            <Input
              label="Password"
              placeholderPlaceholder="Password"
              propWidth="74px"
            />
            <div className={styles.checksParent}>
              <div className={styles.checks}>
                <div className={styles.icon}>
                  <input
                    className={styles.checkboxIconsuncheck}
                    type="checkbox"
                  />
                </div>
                <div className={styles.label}>Remember me</div>
              </div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <button className={styles.button}>
              <div className={styles.label1}>Log In</div>
            </button>
            <div className={styles.newHereParent}>
              <div className={styles.newHere}>{`New here? `}</div>
              <div
                className={styles.registerNow}
                onClick={onRegisterNowTextClick}
              >
                Register Now
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
