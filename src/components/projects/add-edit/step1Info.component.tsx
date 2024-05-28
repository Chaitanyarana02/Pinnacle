import styles from './step1Info.module.css'
const Step1Info = () => {
  return (
    <>
      <div className={styles.addDetails1}>
        <header className={styles.header1}>
          <h1 className={styles.testProject}>Test Project</h1>
          <div className={styles.projectStructure}>
            <img
              className={styles.xIcon}
              loading="lazy"
              alt=""
              src="x.svg"
            />
          </div>
        </header>
        <div className={styles.designingASystemConsistsOfWrapper}>
          <h1 className={styles.designingASystem}>
            Designing a system consists of 3 steps
          </h1>
        </div>
        <section className={styles.flowchart}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.div}>1</div>
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
                <h3 className={styles.createStructure}>Create Structure</h3>
                <div className={styles.designYourClients}>
                  Design your client's dream smart home in three easy steps: map
                  their property (indoor/outdoor), plan floors within each
                  building, and then integrate smart features room by room.
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.div1}>2</div>
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
                <div className={styles.craftThePerfect}>
                  Craft the perfect harmony for your client's space. Simply drag
                  and drop functionalities like spotlights, switches, or sensors
                  into each room. Watch the estimated price adjust as you build
                  your client's dream smart home.
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div2}>3</div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.doneStepParent}>
                    <div className={styles.doneStep}>
                      <div className={styles.doneIcon} />
                    </div>
                    <div className={styles.allDone}>All Done</div>
                  </div>
                </div>
              </div>
              <div className={styles.provideTechDetailsParent}>
                <h3 className={styles.provideTechDetails}>
                  Provide Tech Details
                </h3>
                <div className={styles.polishTheFinal}>
                  Polish the final details! Here you'll specify things like
                  light dimming options, power levels, and blind sizes. Fill out
                  details directly or print a handy form for on-site data
                  collection. This step ensures a precise final price quote.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.label}>Let’s Begin</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1Info;
