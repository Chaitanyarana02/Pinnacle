import { useCallback } from "react";
import styles from "./step1New.module.css";
import { useNavigate } from "react-router-dom";

const Step1new = () => {
  const onXIconClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);
  const navigate = useNavigate()
  return (
    <div className={styles.step1new}>
      <header className={styles.header2}>
        <div className={styles.testProjectWrapper}>
          <a className={styles.testProject}>Test Project</a>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <a className={styles.a}>1</a>
            </div>
            <div className={styles.projectStructureWrapper}>
              <a className={styles.projectStructure}>Project Structure</a>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <a className={styles.a1}>2</a>
            </div>
            <div className={styles.projectFunctionWrapper}>
              <a className={styles.projectFunction}>Project Function</a>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameInner} />
              <a className={styles.a2}>3</a>
            </div>
            <div className={styles.projectDetailingWrapper}>
              <a className={styles.projectDetailing}>Project Detailing</a>
            </div>
          </div>
        </div>
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
      <section className={styles.step1newInner}>
        <div className={styles.frameParent1}>
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
      <section className={styles.step1newChild}>
        <div className={styles.frameParent2}>
          <div className={styles.indoorAreaParent}>
            <input
              className={styles.indoorArea}
              placeholder="Indoor Area"
              type="text"
            />
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.checkboxIconscheckedParent}>
                <div className={styles.checkboxIconschecked}>
                  <div className={styles.checkboxIconscheckedChild} />
                  <input className={styles.check} type="checkbox" />
                </div>
                <b className={styles.house}>House</b>
              </div>
              <div className={styles.input}>
                <div className={styles.label}>Label</div>
                <div className={styles.content}>
                  <img
                    className={styles.startAdornmentIcon}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <input
                    className={styles.placeholder}
                    placeholder="House"
                    type="text"
                  />
                  <img
                    className={styles.endAdornmentIcon}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext}>HelpText</div>
              </div>
              <div className={styles.input1}>
                <div className={styles.label1}>Label</div>
                <div className={styles.content1}>
                  <img
                    className={styles.startAdornmentIcon1}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder1}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon1}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon1}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext1}>HelpText</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.checkboxIconscheckedGroup}>
                <div className={styles.checkboxIconschecked1}>
                  <div className={styles.checkboxIconscheckedItem} />
                  <input className={styles.check1} type="checkbox" />
                </div>
                <b className={styles.garage}>Garage</b>
              </div>
              <div className={styles.input2}>
                <div className={styles.label2}>Label</div>
                <div className={styles.content2}>
                  <img
                    className={styles.startAdornmentIcon2}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <input
                    className={styles.placeholder2}
                    placeholder="Car Garage"
                    type="text"
                  />
                  <img
                    className={styles.endAdornmentIcon2}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon2}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext2}>HelpText</div>
              </div>
              <div className={styles.input3}>
                <div className={styles.label3}>Label</div>
                <div className={styles.content3}>
                  <img
                    className={styles.startAdornmentIcon3}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder3}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon3}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon3}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext3}>HelpText</div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.checkboxIconscheckedContainer}>
                <div className={styles.checkboxIconschecked2}>
                  <div className={styles.checkboxIconscheckedInner} />
                  <input className={styles.check2} type="checkbox" />
                </div>
                <b className={styles.shed}>{`Shed `}</b>
              </div>
              <div className={styles.input4}>
                <div className={styles.label4}>Label</div>
                <div className={styles.content4}>
                  <img
                    className={styles.startAdornmentIcon4}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder4}>Man Cave</div>
                  <img
                    className={styles.endAdornmentIcon4}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon4}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext4}>HelpText</div>
              </div>
              <div className={styles.input5}>
                <div className={styles.label5}>Label</div>
                <div className={styles.content5}>
                  <img
                    className={styles.startAdornmentIcon5}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder5}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon5}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon5}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext5}>HelpText</div>
              </div>
            </div>
            <b className={styles.addAnother}>+Add another</b>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameParent7}>
          <div className={styles.outdoorAreaParent}>
            <input
              className={styles.outdoorArea}
              placeholder="Outdoor Area"
              type="text"
            />
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.frameParent8}>
            <div className={styles.frameParent9}>
              <div className={styles.checkboxIconscheckedParent1}>
                <div className={styles.checkboxIconschecked3}>
                  <div className={styles.checkboxIconscheckedChild1} />
                  <input className={styles.check3} type="checkbox" />
                </div>
                <b className={styles.frontGarden}>Front Garden</b>
              </div>
              <div className={styles.input6}>
                <div className={styles.label6}>Label</div>
                <div className={styles.content6}>
                  <img
                    className={styles.startAdornmentIcon6}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <input
                    className={styles.placeholder6}
                    placeholder="Give a name"
                    type="text"
                  />
                  <img
                    className={styles.endAdornmentIcon6}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon6}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext6}>HelpText</div>
              </div>
              <div className={styles.input7}>
                <div className={styles.label7}>Label</div>
                <div className={styles.content7}>
                  <img
                    className={styles.startAdornmentIcon7}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder7}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon7}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon7}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext7}>HelpText</div>
              </div>
            </div>
            <div className={styles.buildingAreaComponent}>
              <div className={styles.checkboxIconsuncheckParent}>
                <input
                  className={styles.checkboxIconsuncheck}
                  type="checkbox"
                />
                <b className={styles.house1}>Back Garden</b>
              </div>
              <div className={styles.input8}>
                <div className={styles.label8}>Label</div>
                <div className={styles.content8}>
                  <img
                    className={styles.startAdornmentIcon8}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder8}>House</div>
                  <img
                    className={styles.endAdornmentIcon8}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon8}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext8}>HelpText</div>
              </div>
              <div className={styles.input9}>
                <div className={styles.label9}>Label</div>
                <div className={styles.content9}>
                  <img
                    className={styles.startAdornmentIcon9}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder9}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon9}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon9}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext9}>HelpText</div>
              </div>
            </div>
            <div className={styles.buildingAreaComponent1}>
              <div className={styles.checkboxIconsuncheckGroup}>
                <input
                  className={styles.checkboxIconsuncheck1}
                  type="checkbox"
                />
                <b className={styles.house2}>Terrace</b>
              </div>
              <div className={styles.input10}>
                <div className={styles.label10}>Label</div>
                <div className={styles.content10}>
                  <img
                    className={styles.startAdornmentIcon10}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder10}>House</div>
                  <img
                    className={styles.endAdornmentIcon10}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon10}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext10}>HelpText</div>
              </div>
              <div className={styles.input11}>
                <div className={styles.label11}>Label</div>
                <div className={styles.content11}>
                  <img
                    className={styles.startAdornmentIcon11}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder11}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon11}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon11}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext11}>HelpText</div>
              </div>
            </div>
            <div className={styles.buildingAreaComponent2}>
              <div className={styles.checkboxIconsuncheckContainer}>
                <input
                  className={styles.checkboxIconsuncheck2}
                  type="checkbox"
                />
                <div className={styles.house3}>Right of House</div>
              </div>
              <div className={styles.input12}>
                <div className={styles.label12}>Label</div>
                <div className={styles.content12}>
                  <img
                    className={styles.startAdornmentIcon12}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder12}>House</div>
                  <img
                    className={styles.endAdornmentIcon12}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon12}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext12}>HelpText</div>
              </div>
              <div className={styles.input13}>
                <div className={styles.label13}>Label</div>
                <div className={styles.content13}>
                  <img
                    className={styles.startAdornmentIcon13}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder13}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon13}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon13}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext13}>HelpText</div>
              </div>
            </div>
            <div className={styles.buildingAreaComponent3}>
              <div className={styles.checkboxIconsuncheckParent1}>
                <input
                  className={styles.checkboxIconsuncheck3}
                  type="checkbox"
                />
                <div className={styles.house4}>Left of House</div>
              </div>
              <div className={styles.input14}>
                <div className={styles.label14}>Label</div>
                <div className={styles.content14}>
                  <img
                    className={styles.startAdornmentIcon14}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder14}>House</div>
                  <img
                    className={styles.endAdornmentIcon14}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon14}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext14}>HelpText</div>
              </div>
              <div className={styles.input15}>
                <div className={styles.label15}>Label</div>
                <div className={styles.content15}>
                  <img
                    className={styles.startAdornmentIcon15}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder15}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon15}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon15}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext15}>HelpText</div>
              </div>
            </div>
            <div className={styles.buildingAreaComponent4}>
              <div className={styles.checkboxIconsuncheckParent2}>
                <input
                  className={styles.checkboxIconsuncheck4}
                  type="checkbox"
                />
                <b className={styles.house5}>Balcony</b>
              </div>
              <div className={styles.input16}>
                <div className={styles.label16}>Label</div>
                <div className={styles.content16}>
                  <img
                    className={styles.startAdornmentIcon16}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder16}>House</div>
                  <img
                    className={styles.endAdornmentIcon16}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon16}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext16}>HelpText</div>
              </div>
              <div className={styles.input17}>
                <div className={styles.label17}>Label</div>
                <div className={styles.content17}>
                  <img
                    className={styles.startAdornmentIcon17}
                    alt=""
                    src="/startadornment.svg"
                  />
                  <div className={styles.placeholder17}>
                    Additional Comment (Optional)
                  </div>
                  <img
                    className={styles.endAdornmentIcon17}
                    alt=""
                    src="/endadornment.svg"
                  />
                  <img
                    className={styles.selectarrowIcon17}
                    alt=""
                    src="/selectarrow.svg"
                  />
                </div>
                <div className={styles.helptext17}>HelpText</div>
              </div>
            </div>
            <b className={styles.addAnother1}>+Add another</b>
          </div>
        </div>
      </section>
      <div className={styles.step1newInner1}>
        <div className={styles.frameParent10}>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={() => navigate('/step1Info')}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="chevron-right.svg"
              />
              <b className={styles.label18}>Back</b>
            </button>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseParent1}>
              <div className={styles.ellipseDiv} />
              <div className={styles.frameChild2} />
              <div className={styles.frameChild3} />
            </div>
          </div>
          <button className={styles.button1} onClick={() => navigate('/step2')}>
            <b className={styles.label19}>Define Floors</b>
            <img
              className={styles.chevronRightIcon1}
              alt=""
              src="chevron-right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1new;