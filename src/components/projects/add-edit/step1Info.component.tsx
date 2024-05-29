import { useNavigate } from "react-router-dom";
import styles from "./step1Info.module.css";
const Step1Info = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.addDetailCustom}>
        <section className={styles.header2}>
          <div className={styles.testProjectWrapper}>
            <a className={styles.testProject}>Test Project</a>
          </div>
          <div className={styles.structureDiagram}>
            <div className={styles.structureIcons}>
              <div className={styles.shapeTrioParent}>
                <div className={styles.shapeTrio} />
                <a className={styles.placeholder}>1</a>
              </div>
              <div className={styles.structureLabels}>
                <a className={styles.projectStructure}>Project Structure</a>
              </div>
            </div>
            <div className={styles.structureIcons1}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <a className={styles.a}>2</a>
              </div>
              <div className={styles.projectFunctionWrapper}>
                <a className={styles.projectFunction}>Project Function</a>
              </div>
            </div>
            <div className={styles.structureIcons2}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameItem} />
                <a className={styles.a1}>3</a>
              </div>
              <div className={styles.projectDetailingWrapper}>
                <a className={styles.projectDetailing}>Project Detailing</a>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <img className={styles.xIcon} loading="lazy" alt="" src="/x.svg" />
          </div>
        </section>
        <div className="flex flex-wrap justify-content-center w-full">
          <div className="flex justify-content-center">
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
                        <h3 className={styles.createStructure}>
                          Create Structure
                        </h3>
                        <div className={styles.designYourClients}>
                          Design your client's dream smart home in three easy
                          steps: map their property (indoor/outdoor), plan
                          floors within each building, and then integrate smart
                          features room by room.
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
                        <h3 className={styles.defineFunctions}>
                          Define Functions
                        </h3>
                        <div className={styles.craftThePerfect}>
                          Craft the perfect harmony for your client's space.
                          Simply drag and drop functionalities like spotlights,
                          switches, or sensors into each room. Watch the
                          estimated price adjust as you build your client's
                          dream smart home.
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
                          Polish the final details! Here you'll specify things
                          like light dimming options, power levels, and blind
                          sizes. Fill out details directly or print a handy form
                          for on-site data collection. This step ensures a
                          precise final price quote.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button} onClick={() => navigate('/step1')}>
                    <div className={styles.label}>Let’s Begin</div>
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>

        <div className={styles.navigation}>
          <div className={styles.firstButtonParent}>
            <div className={styles.firstButton}>
              <button className={styles.button}>
                <img
                  className={styles.chevronRightIcon}
                  alt=""
                  src="chevron-right.svg"
                />
                <b className={styles.label}>Back</b>
              </button>
            </div>
            <div className={styles.secondButton}>
              <div className={styles.ellipseContainer}>
                <div className={styles.frameInner} />
                <div className={styles.ellipseDiv} />
                <div className={styles.frameChild1} />
              </div>
            </div>
            <button className={styles.button1}>
              <b className={styles.label1}>Define Floors</b>
              <img
                className={styles.chevronRightIcon1}
                alt=""
                src="chevron-right.svg"
              />
            </button>
          </div>
        </div>
      </div>
      {/* <Step1Info/> */}
    </>
  );
};

export default Step1Info;
