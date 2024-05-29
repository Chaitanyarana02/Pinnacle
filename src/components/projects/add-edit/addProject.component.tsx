// import Step1Info from "./step1Info.component";
import styles from "./addProject.module.css";
// import Step1 from "./step1.component";
// import Step3 from "./step3.component";
const AddEditProject = () => {
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
            {/* <Step1></Step1> */}
            {/* <Step3></Step3> */}
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
export default AddEditProject;
