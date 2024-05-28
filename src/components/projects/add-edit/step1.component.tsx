import { useState } from "react";
import styles from "./step1.module.css";

const Step1 = ({
  className = "",
}) => {
  const [isAddNewPopupOpen, setAddNewPopupOpen] = useState(false);


  return (
    <>
      <div className={[styles.addDetailCustomStep1, className].join(" ")}>
        <section className={styles.addDetailCustomStep1Inner}>
          <div className={styles.frameParent}>
            <div className={styles.defineBuildingAreasWrapper}>
              <h1 className={styles.defineBuildingAreas}>
                Define building areas
              </h1>
            </div>
            <p className={styles.chooseTheAreas}>
              Choose the areas included in your building by selecting from the
              options below. These are grouped by Indoor and Outdoor locations.
            </p>
          </div>
        </section>
        <section className={styles.frameGroup}>
          <div className={styles.indoorAreaParent}>
            <div className={styles.indoorArea}>Indoor Area</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.checkboxIconscheckedParent}>
                <div className={styles.checkboxIconschecked}>
                  <input className={styles.check} type="checkbox" />
                </div>
                <b className={styles.house}>House</b>
              </div>
              <div className={styles.input}>
                <div className={styles.label}>Label</div>
                <div className={styles.content}>    
                  <input
                    className={styles.placeholder}
                    placeholder="House"
                    type="text"
                  />
                
                </div>
                <div className={styles.helptext}>HelpText</div>
              </div>
              <input
                className={styles.input1}
                placeholder="Additional Comment (Optional)"
                type="text"
              />
            </div>
            <b className={styles.addAnother}>
              +Add another
            </b>
          </div>
        </section>
        <footer className={styles.frameFooter}>
          <div className={styles.outdoorAreaParent}>
            <div className={styles.outdoorArea}>Outdoor Area</div>
            <div className={styles.frameItem} />
          </div>
          <footer className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.checkboxIconscheckedGroup}>
                <div className={styles.checkboxIconschecked1}>
                  <input className={styles.check1} type="checkbox" />
                </div>
                <b className={styles.frontGarden}>Front Garden</b>
              </div>
              <input
                className={styles.input2}
                placeholder="Give a name"
                type="text"
              />
              <input
                className={styles.input3}
                placeholder="Additional Comment (Optional)"
                type="text"
              />
            </div>
            <b className={styles.addAnother1}>+Add another</b>
          </footer>
        </footer>
      </div>
    </>
  );
};

export default Step1;
