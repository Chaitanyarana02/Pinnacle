import styles from "./infoStep2.module.css";
import { useAppDispatch } from "../../../store/store.utils";
import {
  updateCurrentSubStepOne,
  updateIsStepVisible,
} from "../../../store/feature/project-step.slice";
import { Button } from "primereact/button";

const InfoStep = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-content-around">
      <div
        style={{
          width: "48rem",
        }}
      >
        <div className="text-3xl mt-4 font-semibold flex justify-content-around">
          <div>Designing a system consists of 3 steps</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.createStructure}>Create Structure</div>
            </div>
            <div className={styles.designYourClients}>
              Design your client's dream smart home in three easy steps: map
              their property (indoor/outdoor), plan floors within each building,
              and then integrate smart features room by room.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <div className={styles.div1}>2</div>
              </div>
              <div className={styles.defineFunctions}>Define Functions</div>
            </div>
            <div className={styles.craftThePerfect}>
              Craft the perfect harmony for your client's space. Simply drag and
              drop functionalities like spotlights, switches, or sensors into
              each room. Watch the estimated price adjust as you build your
              client's dream smart home.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <div className={styles.div2}>3</div>
              </div>
              <div className={styles.defineFunctions}>Provide Tech Details</div>
            </div>
            <div className={styles.polishTheFinal}>
              Polish the final details! Here you'll specify things like light
              dimming options, power levels, and blind sizes. Fill out details
              directly or print a handy form for on-site data collection. This
              step ensures a precise final price quote.
            </div>
          </div>
          <img
            className={styles.chevronsRightIcon}
            alt=""
            src="/chevrons-right.svg"
          />
          <img
            className={styles.chevronsRightIcon1}
            alt=""
            src="/chevrons-right.svg"
          />
          <div className={styles.frameItem} />
          <div className={styles.allDone}>All Done</div>
        </div>
        <div className="w-full flex justify-content-around mt-6">
          <Button
            label="Let's Begin"
            rounded
            onClick={() => {
              dispatch(updateCurrentSubStepOne(2));
              dispatch(updateIsStepVisible(true));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoStep;
