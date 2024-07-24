import { Avatar } from "primereact/avatar";
import { useAppSelector } from "../../../store/store.utils";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userDataSlice);
  const redirect = (url: string) => navigate(url);
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
            <div className="flex">
            <Avatar size="large"  label={user.userData.name[0].toUpperCase()} style={{ backgroundColor: '#9c27b0', color: '#ffffff' }}  shape="circle"/>
                <div className="pl-2">
                    <span className="font-bold">
                        {user.userData.name}
                    </span>
                    <br />
                    <span className="text-sm">{user.userData.profession}</span>
                </div>
            </div>  
            
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
