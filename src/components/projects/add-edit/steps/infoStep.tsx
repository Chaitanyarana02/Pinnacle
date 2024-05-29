import { useCallback } from "react";
import styles from "./infoStep.module.css";

const InfoStep = () => {
  const onXIconClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.infostep}>
      <header className={styles.header1}>
        <a className={styles.testProject}>Test Project</a>
        <div className={styles.xWrapper}>
          <img
            className={styles.xIcon}
            loading="lazy"
            alt=""
            src="/x.svg"
            onClick={onXIconClick}
          />
        </div>
      </header>
      <div className={styles.designingASystemConsistsOfWrapper}>
        <h1 className={styles.designingASystem}>
          Designing a system consists of 3 steps
        </h1>
      </div>
      <section className={styles.infostepInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <b className={styles.b}>1</b>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.chevronsRightIcon}
                    loading="lazy"
                    alt=""
                    src="chevrons-right.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.createStructureParent}>
              <b className={styles.createStructure}>Create Structure</b>
              <p className={styles.designYourClients}>
                Design your client's dream smart home in three easy steps: map
                their property (indoor/outdoor), plan floors within each
                building, and then integrate smart features room by room.
              </p>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameInner} />
                <b className={styles.b1}>2</b>
              </div>
              <div className={styles.chevronsRightWrapper}>
                <img
                  className={styles.chevronsRightIcon1}
                  alt=""
                  src="chevrons-right.svg"
                />
              </div>
            </div>
            <div className={styles.defineFunctionsParent}>
              <h3 className={styles.defineFunctions}>Define Functions</h3>
              <p className={styles.craftThePerfect}>
                Craft the perfect harmony for your client's space. Simply drag
                and drop functionalities like spotlights, switches, or sensors
                into each room. Watch the estimated price adjust as you build
                your client's dream smart home.
              </p>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.ellipseContainer}>
                <div className={styles.ellipseDiv} />
                <b className={styles.b2}>3</b>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent4}>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameChild1} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.provideTechDetailsParent}>
              <h3 className={styles.provideTechDetails}>
                Provide Tech Details
              </h3>
              <p className={styles.polishTheFinal}>
                Polish the final details! Here you'll specify things like light
                dimming options, power levels, and blind sizes. Fill out details
                directly or print a handy form for on-site data collection. This
                step ensures a precise final price quote.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <b className={styles.label}>Let’s Begin</b>
        </button>
      </div>
    </div>
  );
};

export default InfoStep;