import { Avatar } from "primereact/avatar";
import { useAppSelector } from "../../../store/store.utils";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import { useCookies } from "react-cookie";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userDataSlice);
  const redirect = (url: string) => navigate(url);
  const menuLeft = useRef<Menu>(null);
  const [, setCookie] = useCookies(["userData"]);

  const items = [
    {
      label: "Account",
      items: [
        {
          label: "Log Out",
          command: () => {
            setCookie("userData", "");
            navigate("/login");
          },
        },
      ],
    },
  ];
  return (
    <div>
      <header className={styles.mainHeader}>
        <div className={styles.pinnaqleWrapper} onClick={() => redirect("")}>
          <div className={styles.pinnaqleLogo}>Pinnaqle</div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div
            className={styles.homeOwnersBtn}
            onClick={() => redirect("home-owners")}
          >
            <div className={styles.label}>Homeowners</div>
          </div>
          <div
            className={styles.professionalsBtn}
            onClick={() => redirect("professionals")}
          >
            <div className={styles.label1}>Professionals</div>
          </div>
          {user.userData.id ? (
            <>
              <div className="flex cursor-pointer" onClick={(event) => {
                    menuLeft?.current?.toggle?.(event);
                  }}>
                <Avatar
                  size="large"
                  label={user.userData.name[0].toUpperCase()}
                  style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                  shape="circle"
                />
                <div className="pl-2">
                  <span className="font-bold">{user.userData.name}</span>
                  <br />
                  <span className="text-sm">{user.userData.profession}</span>
                </div>
              </div>
              <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            </>
          ) : (
            <button
              className={styles.logInBtn}
              onClick={() => redirect("login")}
            >
              <div className={styles.label2}>Log In</div>
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
