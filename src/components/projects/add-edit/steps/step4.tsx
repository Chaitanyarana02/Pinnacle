import { useCallback } from "react";
import styles from "./step4.module.css";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Add Details 5" to the project
  }, []);

  const onXIconClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onFrameButton2Click = useCallback(() => {
    // Please sync "Add Details 7" to the project
  }, []);

  return (
    <div className={styles.step4}>
      <header className={styles.header1}>
        <div className={styles.testProjectWrapper}>
          <a className={styles.testProject}>Test Project</a>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup} onClick={onFrameContainerClick}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-5.svg"
            />
            <div className={styles.projectStructureWrapper}>
              <a className={styles.projectStructure}>Project Structure</a>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <a className={styles.a}>2</a>
            </div>
            <div className={styles.projectFunctionWrapper}>
              <a className={styles.projectFunction}>Project Function</a>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameInner} />
              <a className={styles.a1}>3</a>
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
            src="x.svg"
            onClick={onXIconClick}
          />
        </div>
      </header>
      <main className={styles.step4Inner}>
        <section className={styles.frameSection}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button}>
                    <img
                      className={styles.chevronRightIcon}
                      alt=""
                      src="chevron-right.svg"
                    />
                    <b className={styles.label}>Edit Structure</b>
                  </button>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.defineFunctionsForEachRoomWrapper}>
                    <h1 className={styles.defineFunctionsFor}>
                      Define Functions for each room
                    </h1>
                  </div>
                  <p className={styles.startByAssigning}>
                    Start by assigning mulitple functions needed for your
                    project Structure
                  </p>
                </div>
              </div>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button1}>
                <img className={styles.printerIcon} alt="" src="/printer.svg" />
                <div className={styles.label1}>Print Sales Brochure</div>
              </button>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.frameParent8}>
                    <div className={styles.houseParent}>
                      <b className={styles.house}>House</b>
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
                    <b className={styles.groundFloor}>Ground Floor</b>
                  </div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-5-1.svg"
                  />
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.kitchenParent}>
                    <b className={styles.kitchen}>Kitchen</b>
                    <div className={styles.resetWrapper}>
                      <b className={styles.reset}>Reset</b>
                    </div>
                  </div>
                  <div className={styles.buttonParent}>
                    <div className={styles.button2}>
                      <div className={styles.wallLightWrapper}>
                        <b className={styles.wallLight}>Wall Light</b>
                      </div>
                      <div className={styles.checkbox}>
                        <div className={styles.checkboxChild} />
                        <img
                          className={styles.minusIcon}
                          alt=""
                          src="/minus.svg"
                        />
                      </div>
                      <div className={styles.frameParent10}>
                        <div className={styles.wrapper}>
                          <b className={styles.b}>2</b>
                        </div>
                        <div className={styles.checkbox1}>
                          <div className={styles.checkboxItem} />
                          <img
                            className={styles.plusIcon}
                            alt=""
                            src="/plus.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.button3}>
                      <b className={styles.window}>Window</b>
                      <div className={styles.checkbox2}>
                        <div className={styles.checkboxInner} />
                        <img
                          className={styles.minusIcon1}
                          alt=""
                          src="/minus-1.svg"
                        />
                      </div>
                      <div className={styles.container}>
                        <b className={styles.b1}>2</b>
                      </div>
                      <div className={styles.checkbox3}>
                        <div className={styles.checkboxChild1} />
                        <img
                          className={styles.plusIcon1}
                          alt=""
                          src="/plus-1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <b className={styles.smoke}>Smoke</b>
                      <img
                        className={styles.checkboxIcon}
                        alt=""
                        src="/checkbox.svg"
                      />
                      <div className={styles.frame}>
                        <b className={styles.b2}>1</b>
                      </div>
                      <div className={styles.checkbox4}>
                        <div className={styles.checkboxChild2} />
                        <img
                          className={styles.plusIcon2}
                          alt=""
                          src="/plus-2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.thermostatWrapper}>
                        <b className={styles.thermostat}>Thermostat</b>
                      </div>
                      <img
                        className={styles.checkboxIcon1}
                        alt=""
                        src="/checkbox-1.svg"
                      />
                      <div className={styles.wrapper1}>
                        <b className={styles.b3}>1</b>
                      </div>
                      <div className={styles.checkbox5}>
                        <div className={styles.checkboxChild3} />
                        <img
                          className={styles.plusIcon3}
                          alt=""
                          src="/plus-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <div className={styles.bathroomParent}>
                    <b className={styles.bathroom}>Bathroom</b>
                    <div className={styles.selectFunctionsWrapper}>
                      <b className={styles.selectFunctions}>Select Functions</b>
                    </div>
                  </div>
                  <div className={styles.dragAndDropFunctionsHereOParent}>
                    <div className={styles.dragAndDrop}>
                      Drag and Drop functions here or
                    </div>
                    <b className={styles.selectFunctions1}>Select functions</b>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <div className={styles.entranceParent}>
                    <b className={styles.entrance}>Entrance</b>
                    <div className={styles.selectFunctionsContainer}>
                      <b className={styles.selectFunctions2}>
                        Select Functions
                      </b>
                    </div>
                  </div>
                  <div className={styles.dragAndDropFunctionsHereOWrapper}>
                    <p className={styles.dragAndDropContainer}>
                      <span>{`Drag and Drop functions here or `}</span>
                      <span className={styles.selectFunctions3}>
                        Select functions
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.cinemaParent}>
                    <b className={styles.cinema}>Cinema</b>
                    <div className={styles.selectFunctionsFrame}>
                      <b className={styles.selectFunctions4}>
                        Select Functions
                      </b>
                    </div>
                  </div>
                  <div className={styles.dragAndDropFunctionsHereOContainer}>
                    <div className={styles.dragAndDropContainer1}>
                      <span>{`Drag and Drop functions here or `}</span>
                      <span className={styles.selectFunctions5}>
                        Select functions
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.utilityParent}>
                    <b className={styles.utility}>Utility</b>
                    <div className={styles.selectFunctionsWrapper1}>
                      <b className={styles.selectFunctions6}>
                        Select Functions
                      </b>
                    </div>
                  </div>
                  <div className={styles.dragAndDropFunctionsHereOFrame}>
                    <p className={styles.dragAndDropContainer2}>
                      <span>{`Drag and Drop functions here or `}</span>
                      <span className={styles.selectFunctions7}>
                        Select functions
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.frameChild1} />
                <div className={styles.frameParent15}>
                  <div className={styles.frameParent16}>
                    <div className={styles.houseGroup}>
                      <b className={styles.house2}>House</b>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameChild2} />
                      </div>
                      <div className={styles.houseContainer}>
                        <div className={styles.house3}>House</div>
                      </div>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.frameChild3} />
                      </div>
                      <div className={styles.indoorContainer}>
                        <div className={styles.indoor1}>Indoor</div>
                      </div>
                    </div>
                    <b className={styles.firstFloor}>First Floor</b>
                  </div>
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/group-5-2.svg"
                  />
                </div>
                <div className={styles.frameChild5} />
                <div className={styles.frameParent17}>
                  <div className={styles.frameParent18}>
                    <div className={styles.manCaveParent}>
                      <b className={styles.manCave}>Man Cave</b>
                      <div className={styles.rectangleFrame}>
                        <div className={styles.frameChild6} />
                      </div>
                      <div className={styles.shedWrapper}>
                        <div className={styles.shed}>Shed</div>
                      </div>
                      <div className={styles.ellipseFrame}>
                        <div className={styles.frameChild7} />
                      </div>
                      <div className={styles.indoorFrame}>
                        <div className={styles.indoor2}>Indoor</div>
                      </div>
                    </div>
                    <b className={styles.groundFloor1}>Ground Floor</b>
                  </div>
                  <img
                    className={styles.frameChild8}
                    alt=""
                    src="/group-5-3.svg"
                  />
                </div>
                <div className={styles.frameChild9} />
                <div className={styles.frameParent19}>
                  <div className={styles.frameParent20}>
                    <div className={styles.carGarageParent}>
                      <b className={styles.carGarage}>Car Garage</b>
                      <div className={styles.rectangleWrapper1}>
                        <div className={styles.frameChild10} />
                      </div>
                      <div className={styles.garageWrapper}>
                        <div className={styles.garage}>Garage</div>
                      </div>
                      <div className={styles.ellipseWrapper1}>
                        <div className={styles.frameChild11} />
                      </div>
                      <div className={styles.indoorWrapper1}>
                        <div className={styles.indoor3}>Indoor</div>
                      </div>
                    </div>
                    <b className={styles.groundFloor2}>Ground Floor</b>
                  </div>
                  <img
                    className={styles.frameChild12}
                    alt=""
                    src="/group-5-4.svg"
                  />
                </div>
                <div className={styles.frameChild13} />
                <div className={styles.frameParent21}>
                  <div className={styles.frameParent22}>
                    <div className={styles.gardenAreaParent}>
                      <div className={styles.gardenArea}>Garden Area</div>
                      <div className={styles.ellipseWrapper2}>
                        <div className={styles.frameChild14} />
                      </div>
                      <div className={styles.outdoor}>Outdoor</div>
                    </div>
                    <b className={styles.frontGarden}>Front Garden</b>
                  </div>
                  <img
                    className={styles.frameChild15}
                    alt=""
                    src="/group-5-5.svg"
                  />
                </div>
                <div className={styles.frameChild16} />
              </div>
            </div>
            <form className={styles.frameForm}>
              <div className={styles.frameParent23}>
                <div className={styles.dragDropFunctionsInRoomsParent}>
                  <div
                    className={styles.dragDrop}
                  >{`Drag & Drop Functions in rooms`}</div>
                  {/* <p className={styles.hintDoubleClick}>
                    HINT: Double click a function to add to all rooms
                  </p> */}
                </div>
                {/* <div className={styles.frameParent24}>
                  <div className={styles.lightsParent}>
                    <b className={styles.lights}>Lights</b>
                    <button className={styles.button6}>
                      <div className={styles.spotlightsWrapper}>
                        <b className={styles.spotlights}>Spotlights</b>
                      </div>
                      <img
                        className={styles.buttonChild}
                        alt=""
                        src="/frame-12300.svg"
                      />
                    </button>
                    <div className={styles.button7}>
                      <div className={styles.chandelierWrapper}>
                        <b className={styles.chandelier}>Chandelier</b>
                      </div>
                      <img
                        className={styles.buttonItem}
                        alt=""
                        src="/frame-12300-1.svg"
                      />
                    </div>
                    <button className={styles.button8}>
                      <div className={styles.wallLightContainer}>
                        <b className={styles.wallLight1}>Wall Light</b>
                      </div>
                      <img
                        className={styles.buttonInner}
                        alt=""
                        src="/frame-12300-2.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.socketsParent}>
                    <b className={styles.sockets}>Sockets</b>
                    <button className={styles.button9}>
                      <div className={styles.gangWrapper}>
                        <b className={styles.gang}>2 Gang</b>
                      </div>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/frame-12300-3.svg"
                      />
                    </button>
                    <button className={styles.button10}>
                      <div className={styles.gangContainer}>
                        <b className={styles.gang1}>1 Gang</b>
                      </div>
                      <img
                        className={styles.buttonChild1}
                        alt=""
                        src="/frame-12300-4.svg"
                      />
                    </button>
                    <button className={styles.button11}>
                      <div className={styles.wusbWrapper}>
                        <b className={styles.wusb}>W/USB</b>
                      </div>
                      <img
                        className={styles.buttonChild2}
                        alt=""
                        src="/frame-12300-5.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.sensorsParent}>
                    <b className={styles.sensors}>Sensors</b>
                    <div className={styles.button12}>
                      <div className={styles.pirWrapper}>
                        <b className={styles.pir}>PIR</b>
                      </div>
                      <img
                        className={styles.buttonChild3}
                        alt=""
                        src="/frame-12300-6.svg"
                      />
                    </div>
                    <div className={styles.button13}>
                      <div className={styles.windowWrapper}>
                        <b className={styles.window1}>Window</b>
                      </div>
                      <img
                        className={styles.buttonChild4}
                        alt=""
                        src="/frame-12300-7.svg"
                      />
                    </div>
                    <div className={styles.button14}>
                      <div className={styles.doorWrapper}>
                        <b className={styles.door}>Door</b>
                      </div>
                      <img
                        className={styles.buttonChild5}
                        alt=""
                        src="/frame-12300-8.svg"
                      />
                    </div>
                    <div className={styles.button15}>
                      <input
                        className={styles.frameInput}
                        placeholder="Smoke"
                        type="text"
                      />
                      <img
                        className={styles.buttonChild6}
                        alt=""
                        src="/frame-12300-9.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.shadesParent}>
                    <b className={styles.shades}>Shades</b>
                    <div className={styles.button16}>
                      <b className={styles.blinds}>Blinds</b>
                      <img
                        className={styles.buttonChild7}
                        alt=""
                        src="/frame-12300-10.svg"
                      />
                    </div>
                    <div className={styles.button17}>
                      <div className={styles.curtainsWrapper}>
                        <b className={styles.curtains}>Curtains</b>
                      </div>
                      <img
                        className={styles.buttonChild8}
                        alt=""
                        src="/frame-12300-11.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.controlsParent}>
                    <b className={styles.controls}>Controls</b>
                    <div className={styles.button18}>
                      <b className={styles.switch}>Switch</b>
                      <div className={styles.buttonInner1}>
                        <img
                          className={styles.frameChild17}
                          alt=""
                          src="/frame-12300-12.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button19}>
                      <b className={styles.thermostat1}>Thermostat</b>
                      <div className={styles.buttonInner2}>
                        <img
                          className={styles.frameChild18}
                          alt=""
                          src="/frame-12300-13.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button20}>
                      <b className={styles.screen}>Screen</b>
                      <div className={styles.buttonInner3}>
                        <img
                          className={styles.frameChild19}
                          alt=""
                          src="/frame-12300-14.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.doorsParent}>
                    <b className={styles.doors}>Doors</b>
                    <div className={styles.button21}>
                      <b className={styles.garage1}>Garage</b>
                      <div className={styles.buttonInner4}>
                        <img
                          className={styles.frameChild20}
                          alt=""
                          src="/frame-12300-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button22}>
                      <b className={styles.gate}>Gate</b>
                      <div className={styles.buttonInner5}>
                        <img
                          className={styles.frameChild21}
                          alt=""
                          src="/frame-12300-16.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.button23}>
                      <b className={styles.carGate}>Car Gate</b>
                      <div className={styles.buttonInner6}>
                        <img
                          className={styles.frameChild22}
                          alt=""
                          src="/frame-12300-17.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleWrapper2}>
                    <div className={styles.frameChild23} />
                  </div>
                </div> */}
                <div className={styles.button24}>
                  <div className={styles.button25}>
                    <div className={styles.button26}>
                      Auto Recommend Functions
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent25}>
                  <div className={styles.frameParent26}>
                    <button className={styles.reverseLeftParent}>
                      <img
                        className={styles.reverseLeftIcon}
                        alt=""
                        src="/reverseleft.svg"
                      />
                      <b className={styles.undo}>Undo</b>
                    </button>
                    <button className={styles.reverseRightParent}>
                      <img
                        className={styles.reverseRightIcon}
                        alt=""
                        src="/reverseright.svg"
                      />
                      <b className={styles.redo}>Redo</b>
                    </button>
                  </div>
                  <b className={styles.resetAll}>Reset all</b>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <div className={styles.frameParent27}>
        <footer className={styles.frameFooter}>
          <div className={styles.frameWrapper2}>
            <div className={styles.setQualityLevelParent}>
              <div className={styles.setQualityLevel}>Set Quality Level:</div>
              <div className={styles.radiosParent}>
                <div className={styles.radios}>
                  <div className={styles.icons}>
                    <input
                      className={styles.radioIconsradioOn}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <b className={styles.label2}>{`Budget `}</b>
                </div>
                <div className={styles.radios1}>
                  <div className={styles.icons1}>
                    <input
                      className={styles.radioIconsradioOff}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className={styles.label3}>Standard</div>
                </div>
                <div className={styles.radios2}>
                  <div className={styles.icons2}>
                    <input
                      className={styles.radioIconsradioOff1}
                      type="radio"
                      name="radioGroup-1"
                    />
                  </div>
                  <div className={styles.label4}>Premium</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleWrapper3}>
            <div className={styles.frameChild24} />
          </div>
          <div className={styles.estimatedPriceRangeWrapper}>
            <div className={styles.estimatedPriceRange}>
              Estimated Price Range:
            </div>
          </div>
          <div className={styles.wrapper2}>
            <b className={styles.b4}>£800-£1200</b>
          </div>
        </footer>
        <button
          className={styles.confirmAddTechDetailsParent}
          onClick={() => navigate('/step5')}
        >
          <div
            className={styles.confirmAdd}
          >{`Confirm & Add Tech Details`}</div>
          <img
            className={styles.chevronRightIcon1}
            alt=""
            src="chevron-right.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Step4;