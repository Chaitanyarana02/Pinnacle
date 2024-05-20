import styles from './header.module.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const redirect = (url: string) => navigate(url)
    return (
        <div>
            <header className={styles.mainHeader}>
                <div className={styles.pinnaqleWrapper} onClick={() => redirect('')}>
                    <div className={styles.pinnaqleLogo}>Pinnaqle</div>
                </div>
                <div className={styles.autoLayoutHorizontal}>
                    <div className={styles.homeOwnersBtn} onClick={() => redirect('home-owners')}>
                        <div className={styles.label}>Homeowners</div>
                    </div>
                    <div className={styles.professionalsBtn} onClick={() => redirect('professionals')}>
                        <div className={styles.label1}>Professionals</div>
                    </div>
                    <button className={styles.logInBtn} onClick={() => redirect('login')}>
                        <div className={styles.label2}>Log In</div>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
