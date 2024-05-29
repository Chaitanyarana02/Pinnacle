import { useNavigate } from "react-router-dom";
import styles from "./step2.module.css";

const Step2 = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.step2}>
      <header className={styles.header1}>
        <div className={styles.testProjectWrapper}>
          <h2 className={styles.testProject}>Test Project</h2>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.projectStructureWrapper}>
              <div className={styles.projectStructure}>Project Structure</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.projectFunctionWrapper}>
              <div className={styles.projectFunction}>Project Function</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameInner} />
              <div className={styles.div2}>3</div>
            </div>
            <div className={styles.projectDetailingWrapper}>
              <div className={styles.projectDetailing}>Project Detailing</div>
            </div>
          </div>
        </div>
        <div className={styles.xWrapper}>
          <img
            className={styles.xIcon}
            loading="lazy"
            alt=""
            src="x.svg"
          />
        </div>
      </header>
      <section className={styles.step2Inner}>
        <div className={styles.frameParent1}>
          <div className={styles.defineRoomsWithinEachFloorWrapper}>
            <h2 className={styles.defineRoomsWithin}>
              Define rooms within each floor
            </h2>
          </div>
          <div
            className={styles.forEachSelected}
          >{`For each selected area, choose the relevant floors from the available options. `}</div>
        </div>
      </section>
      <section className={styles.step2Child}>
        <div className={styles.frameParent2}>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.houseParent}>
                  <div className={styles.house}>House</div>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.houseWrapper}>
                    <div className={styles.house1}>House</div>
                  </div>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.indoorWrapper}>
                    <div className={styles.indoor}>Indoor</div>
                  </div>
                </div>
                <div className={styles.groundFloor}>Ground Floor</div>
              </div>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-5.svg"
              />
            </div>
            <div className={styles.component4Parent}>
              <button className={styles.component4}>
                <div className={styles.chipTick}>
                  <div className={styles.basementWrapper}>
                    <div className={styles.basement}>Kitchen</div>
                  </div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxChild} />
                    <img className={styles.checkIcon} alt="" src="/check.svg" />
                  </div>
                </div>
                <div className={styles.copy06Wrapper}>
                  <img className={styles.copy06Icon} alt="" src="/copy06.svg" />
                </div>
              </button>
              <div className={styles.component5}>
                <div className={styles.chipTick1}>
                  <div className={styles.basementContainer}>
                    <div className={styles.basement1}>Bedroom</div>
                  </div>
                  <div className={styles.checkbox1}>
                    <div className={styles.checkboxItem} />
                    <img
                      className={styles.checkIcon1}
                      alt=""
                      src="/check-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Container}>
                  <img
                    className={styles.copy06Icon1}
                    alt=""
                    src="/copy06-1.svg"
                  />
                </div>
              </div>
              <div className={styles.component6}>
                <div className={styles.chipTick2}>
                  <div className={styles.basementFrame}>
                    <div className={styles.basement2}>Bathroom</div>
                  </div>
                  <div className={styles.checkbox2}>
                    <div className={styles.checkboxInner} />
                    <img
                      className={styles.checkIcon2}
                      alt=""
                      src="/check-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Frame}>
                  <img
                    className={styles.copy06Icon2}
                    alt=""
                    src="/copy06-2.svg"
                  />
                </div>
              </div>
              <div className={styles.component8}>
                <div className={styles.chipTick3}>
                  <div className={styles.basementWrapper1}>
                    <div className={styles.basement3}>Laundry</div>
                  </div>
                  <div className={styles.checkbox3}>
                    <div className={styles.checkboxChild1} />
                    <img
                      className={styles.checkIcon3}
                      alt=""
                      src="/check-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper1}>
                  <img
                    className={styles.copy06Icon3}
                    alt=""
                    src="/copy06-3.svg"
                  />
                </div>
              </div>
              <div className={styles.component7}>
                <div className={styles.chipTick4}>
                  <div className={styles.basementWrapper2}>
                    <div className={styles.basement4}>Stairs</div>
                  </div>
                  <div className={styles.checkbox4}>
                    <div className={styles.checkboxChild2} />
                    <img
                      className={styles.checkIcon4}
                      alt=""
                      src="/check-4.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper2}>
                  <img
                    className={styles.copy06Icon4}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <div className={styles.component10}>
                <div className={styles.chipTick5}>
                  <div className={styles.basementWrapper3}>
                    <div className={styles.basement5}>Shower</div>
                  </div>
                  <div className={styles.checkbox5}>
                    <div className={styles.checkboxChild3} />
                    <img
                      className={styles.checkIcon5}
                      alt=""
                      src="/check-5.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper3}>
                  <img
                    className={styles.copy06Icon5}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <div className={styles.component11}>
                <div className={styles.chipTick6}>
                  <div className={styles.basementWrapper4}>
                    <div className={styles.basement6}>TV Room</div>
                  </div>
                  <div className={styles.checkbox6}>
                    <div className={styles.checkboxChild4} />
                    <img
                      className={styles.checkIcon6}
                      alt=""
                      src="/check-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper4}>
                  <img
                    className={styles.copy06Icon6}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <div className={styles.component12}>
                <div className={styles.chipTick7}>
                  <div className={styles.basementWrapper5}>
                    <div className={styles.basement7}>Dining Room</div>
                  </div>
                  <div className={styles.checkbox7}>
                    <div className={styles.checkboxChild5} />
                    <img
                      className={styles.checkIcon7}
                      alt=""
                      src="/check-7.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper5}>
                  <img
                    className={styles.copy06Icon7}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <div className={styles.component9}>
                <div className={styles.chipTick8}>
                  <div className={styles.basementWrapper6}>
                    <div className={styles.basement8}>Living Room</div>
                  </div>
                  <div className={styles.checkbox8}>
                    <div className={styles.checkboxChild6} />
                    <img
                      className={styles.checkIcon8}
                      alt=""
                      src="/check-8.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper6}>
                  <img
                    className={styles.copy06Icon8}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <button className={styles.component13}>
                <div className={styles.chipTick9}>
                  <div className={styles.basementWrapper7}>
                    <div className={styles.basement9}>Entrance Hall</div>
                  </div>
                  <div className={styles.checkbox9}>
                    <div className={styles.checkboxChild7} />
                    <img
                      className={styles.checkIcon9}
                      alt=""
                      src="/check-9.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper7}>
                  <img
                    className={styles.copy06Icon9}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </button>
              <button className={styles.component14}>
                <div className={styles.chipTick10}>
                  <div className={styles.basementWrapper8}>
                    <div className={styles.basement10}>Utility Room</div>
                  </div>
                  <div className={styles.checkbox10}>
                    <div className={styles.checkboxChild8} />
                    <img
                      className={styles.checkIcon10}
                      alt=""
                      src="/check-10.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper8}>
                  <img
                    className={styles.copy06Icon10}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </button>
              <div className={styles.component15}>
                <div className={styles.chipTick11}>
                  <div className={styles.basementWrapper9}>
                    <div className={styles.basement11}>Cinema</div>
                  </div>
                  <div className={styles.checkbox11}>
                    <div className={styles.checkboxChild9} />
                    <img
                      className={styles.checkIcon11}
                      alt=""
                      src="/check-11.svg"
                    />
                  </div>
                </div>
                <div className={styles.copy06Wrapper9}>
                  <img
                    className={styles.copy06Icon11}
                    alt=""
                    src="/copy06.svg"
                  />
                </div>
              </div>
              <div className={styles.addAnother}>+Add another</div>
            </div>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.houseGroup}>
                <div className={styles.house2}>House</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.houseContainer}>
                  <div className={styles.house3}>House</div>
                </div>
                <div className={styles.ellipseFrame}>
                  <div className={styles.frameChild3} />
                </div>
                <div className={styles.indoorContainer}>
                  <div className={styles.indoor1}>Indoor</div>
                </div>
              </div>
              <div className={styles.firstFloor}>First Floor</div>
            </div>
            <img className={styles.frameChild4} alt="" src="/group-5-1.svg" />
          </div>
          <div className={styles.frameChild5} />
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <div className={styles.manCaveParent}>
                <div className={styles.manCave}>Man Cave</div>
                <div className={styles.rectangleFrame}>
                  <div className={styles.frameChild6} />
                </div>
                <div className={styles.houseFrame}>
                  <div className={styles.house4}>House</div>
                </div>
                <div className={styles.ellipseWrapper1}>
                  <div className={styles.frameChild7} />
                </div>
                <div className={styles.indoorFrame}>
                  <div className={styles.indoor2}>Indoor</div>
                </div>
              </div>
              <div className={styles.firstFloor1}>First Floor</div>
            </div>
            <img className={styles.frameChild8} alt="" src="/group-5-2.svg" />
          </div>
          <div className={styles.frameChild9} />
          <div className={styles.frameParent9}>
            <div className={styles.frameParent10}>
              <div className={styles.carGarageParent}>
                <div className={styles.carGarage}>Car Garage</div>
                <div className={styles.rectangleWrapper1}>
                  <div className={styles.frameChild10} />
                </div>
                <div className={styles.houseWrapper1}>
                  <div className={styles.house5}>House</div>
                </div>
                <div className={styles.ellipseWrapper2}>
                  <div className={styles.frameChild11} />
                </div>
                <div className={styles.indoorWrapper1}>
                  <div className={styles.indoor3}>Indoor</div>
                </div>
              </div>
              <div className={styles.firstFloor2}>First Floor</div>
            </div>
            <img className={styles.frameChild12} alt="" src="/group-5-3.svg" />
          </div>
          <div className={styles.frameChild13} />
        </div>
      </section>
      <footer className={styles.frameFooter}>
        <div className={styles.buttonParent}>
          <button className={styles.button} onClick={() => navigate('/step1')}>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="chevron-right.svg"
            />
            <div className={styles.label}>Back</div>
          </button>
          <div className={styles.frameParent11}>
            <div className={styles.frameWrapper}>
              <div className={styles.ellipseParent1}>
                <div className={styles.frameChild14} />
                <div className={styles.frameChild15} />
                <div className={styles.frameChild16} />
              </div>
            </div>
            <button className={styles.button1} onClick={() => navigate('/step3')}>
              <div className={styles.label1}>Review Final Structure</div>
              <img
                className={styles.chevronRightIcon1}
                alt=""
                src="chevron-right.svg"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Step2;