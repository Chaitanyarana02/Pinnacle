import { useCallback } from "react";
import styles from "./step5.module.css"

const Step5 = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Add Details 5" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Add Details 6" to the project
  }, []);

  const onXIconClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onFrameButton1Click = useCallback(() => {
    // Please sync "Add Details 8" to the project
  }, []);

  return (
    <div className={styles.step5}>
      <div className={styles.header1Wrapper}>
        <header className={styles.header1}>
          <div className={styles.testProjectWrapper}>
            <a className={styles.testProject}>Test Project</a>
          </div>
          <nav className={styles.frameParent}>
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
            <div
              className={styles.frameContainer}
              onClick={onFrameContainer1Click}
            >
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-5-1.svg"
              />
              <div className={styles.projectFunctionWrapper}>
                <a className={styles.projectFunction}>Project Function</a>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameInner} />
                <a className={styles.a}>3</a>
              </div>
              <div className={styles.projectDetailingWrapper}>
                <a className={styles.projectDetailing}>Project Detailing</a>
              </div>
            </div>
          </nav>
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
      </div>
      <div className={styles.step5Inner}>
        <div className={styles.frameParent1}>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/chevronright.svg"
              />
              <b className={styles.label}>Edit Functions</b>
            </button>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.defineTechDetailsForYourSWrapper}>
              <h1 className={styles.defineTechDetails}>
                Define Tech details for your system
              </h1>
            </div>
            <p className={styles.startByAssigning}>
              Start by assigning mulitple functions needed for your project
              Structure
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>
              <img className={styles.printerIcon} alt="" src="/printer.svg" />
              <div className={styles.label1}>Print Sales Brochure</div>
            </button>
          </div>
        </div>
      </div>
      <main className={styles.lineParent}>
        <div className={styles.lineDiv} />
        <section className={styles.frameSection}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
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
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameParent6}>
                    <button className={styles.kitchenWrapper}>
                      <b className={styles.kitchen}>Kitchen</b>
                    </button>
                    <div className={styles.bathroomWrapper}>
                      <b className={styles.bathroom}>Bathroom</b>
                    </div>
                    <div className={styles.entranceWrapper}>
                      <b className={styles.entrance}>Entrance</b>
                    </div>
                    <div className={styles.cinemaWrapper}>
                      <b className={styles.cinema}>Cinema</b>
                    </div>
                    <div className={styles.utilityWrapper}>
                      <b className={styles.utility}>Utility</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild2} />
                  <div className={styles.houseGroup}>
                    <b className={styles.house2}>House</b>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild3} />
                    </div>
                    <div className={styles.houseContainer}>
                      <div className={styles.house3}>House</div>
                    </div>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild4} />
                    </div>
                    <div className={styles.indoorContainer}>
                      <div className={styles.indoor1}>Indoor</div>
                    </div>
                  </div>
                </div>
                <b className={styles.firstFloor}>First Floor</b>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
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
                </div>
                <b className={styles.groundFloor1}>Ground Floor</b>
              </div>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild8} />
                <div className={styles.frameParent9}>
                  <div className={styles.carGarageParent}>
                    <b className={styles.carGarage}>Car Garage</b>
                    <div className={styles.rectangleWrapper1}>
                      <div className={styles.frameChild9} />
                    </div>
                    <div className={styles.garageWrapper}>
                      <div className={styles.garage}>Garage</div>
                    </div>
                    <div className={styles.ellipseWrapper1}>
                      <div className={styles.frameChild10} />
                    </div>
                    <div className={styles.indoorWrapper1}>
                      <div className={styles.indoor3}>Indoor</div>
                    </div>
                  </div>
                  <b className={styles.groundFloor2}>Ground Floor</b>
                </div>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild11} />
                  <div className={styles.gardenAreaParent}>
                    <div className={styles.gardenArea}>Garden Area</div>
                    <div className={styles.ellipseWrapper2}>
                      <div className={styles.frameChild12} />
                    </div>
                    <div className={styles.outdoor}>Outdoor</div>
                  </div>
                </div>
                <b className={styles.frontGarden}>Front Garden</b>
              </div>
            </div>
          </div>
          <div className={styles.frameChild13} />
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent11}>
              <div className={styles.frameParent12}>
                <div className={styles.lightsParent}>
                  <b className={styles.lights}>Lights</b>
                  <b className={styles.dimmable}>Dimmable</b>
                  <b className={styles.wattage}>Wattage</b>
                  <b className={styles.wiring}>Wiring</b>
                  <b className={styles.color}>Color</b>
                </div>
                <div className={styles.spotLightParent}>
                  <b className={styles.spotLight}>Spot Light</b>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <b className={styles.yes}>Yes</b>
                  </div>
                  <div className={styles.frameParent13}>
                    <div className={styles.radioParent}>
                      <input
                        className={styles.radio}
                        type="radio"
                        name="radioGroup-1"
                      />
                      <b className={styles.w}>{`<200W`}</b>
                    </div>
                    <div className={styles.radioGroup}>
                      <input
                        className={styles.radio1}
                        type="radio"
                        name="radioGroup-1"
                      />
                      <b className={styles.w1}>{`>200W`}</b>
                    </div>
                  </div>
                  <div className={styles.frameParent14}>
                    <div className={styles.radioContainer}>
                      <input
                        className={styles.radio2}
                        type="radio"
                        name="radioGroup-2"
                      />
                      <b className={styles.concealed}>Concealed</b>
                    </div>
                    <div className={styles.radioParent1}>
                      <input
                        className={styles.radio3}
                        type="radio"
                        name="radioGroup-2"
                      />
                      <div className={styles.directToSwitch}>
                        Direct to switch
                      </div>
                    </div>
                    <div className={styles.radioParent2}>
                      <input
                        className={styles.radio4}
                        type="radio"
                        name="radioGroup-2"
                      />
                      <b className={styles.socket}>Socket</b>
                    </div>
                  </div>
                  <div className={styles.frameParent15}>
                    <div className={styles.radioParent3}>
                      <input
                        className={styles.radio5}
                        type="radio"
                        name="radioGroup-3"
                      />
                      <b className={styles.white}>White</b>
                    </div>
                    <div className={styles.radioParent4}>
                      <input
                        className={styles.radio6}
                        type="radio"
                        name="radioGroup-3"
                      />
                      <b className={styles.black}>Black</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild14} />
                <div className={styles.pendantsParent}>
                  <b className={styles.pendants}>Pendants</b>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <b className={styles.no}>No</b>
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.radioParent5}>
                      <input
                        className={styles.radio7}
                        type="radio"
                        name="radioGroup-4"
                      />
                      <b className={styles.w2}>{`<200W`}</b>
                    </div>
                    <div className={styles.radioParent6}>
                      <input
                        className={styles.radio8}
                        type="radio"
                        name="radioGroup-4"
                      />
                      <b className={styles.w3}>{`>200W`}</b>
                    </div>
                  </div>
                  <div className={styles.frameParent17}>
                    <div className={styles.radioParent7}>
                      <input
                        className={styles.radio9}
                        type="radio"
                        name="radioGroup-5"
                      />
                      <b className={styles.concealed1}>Concealed</b>
                    </div>
                    <div className={styles.radioParent8}>
                      <input
                        className={styles.radio10}
                        type="radio"
                        name="radioGroup-5"
                      />
                      <div className={styles.directToSwitch1}>
                        Direct to switch
                      </div>
                    </div>
                    <div className={styles.radioParent9}>
                      <input
                        className={styles.radio11}
                        type="radio"
                        name="radioGroup-5"
                      />
                      <b className={styles.socket1}>Socket</b>
                    </div>
                  </div>
                  <div className={styles.frameParent18}>
                    <div className={styles.radioParent10}>
                      <input
                        className={styles.radio12}
                        type="radio"
                        name="radioGroup-6"
                      />
                      <b className={styles.white1}>White</b>
                    </div>
                    <div className={styles.radioParent11}>
                      <input
                        className={styles.radio13}
                        type="radio"
                        name="radioGroup-6"
                      />
                      <b className={styles.black1}>Black</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild15} />
                <div className={styles.wallLightsParent}>
                  <b className={styles.wallLights}>Wall Lights</b>
                  <div className={styles.vectorContainer}>
                    <img
                      className={styles.vectorIcon2}
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <b className={styles.no1}>No</b>
                  </div>
                  <div className={styles.frameParent19}>
                    <div className={styles.radioParent12}>
                      <input
                        className={styles.radio14}
                        type="radio"
                        name="radioGroup-7"
                      />
                      <b className={styles.w4}>{`<200W`}</b>
                    </div>
                    <div className={styles.radioParent13}>
                      <input
                        className={styles.radio15}
                        type="radio"
                        name="radioGroup-7"
                      />
                      <b className={styles.w5}>{`>200W`}</b>
                    </div>
                  </div>
                  <div className={styles.frameParent20}>
                    <div className={styles.radioParent14}>
                      <input
                        className={styles.radio16}
                        type="radio"
                        name="radioGroup-8"
                      />
                      <b className={styles.concealed2}>Concealed</b>
                    </div>
                    <div className={styles.radioParent15}>
                      <input
                        className={styles.radio17}
                        type="radio"
                        name="radioGroup-8"
                      />
                      <div className={styles.directToSwitch2}>
                        Direct to switch
                      </div>
                    </div>
                    <div className={styles.radioParent16}>
                      <input
                        className={styles.radio18}
                        type="radio"
                        name="radioGroup-8"
                      />
                      <b className={styles.socket2}>Socket</b>
                    </div>
                  </div>
                  <div className={styles.frameParent21}>
                    <div className={styles.radioParent17}>
                      <input
                        className={styles.radio19}
                        type="radio"
                        name="radioGroup-9"
                      />
                      <b className={styles.white2}>White</b>
                    </div>
                    <div className={styles.radioParent18}>
                      <input
                        className={styles.radio20}
                        type="radio"
                        name="radioGroup-9"
                      />
                      <b className={styles.black2}>Black</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent22}>
                <div className={styles.sensorsParent}>
                  <b className={styles.sensors}>Sensors</b>
                  <b className={styles.wiring1}>Wiring</b>
                </div>
                <div className={styles.windowParent}>
                  <b className={styles.window}>Window</b>
                  <div className={styles.frameParent23}>
                    <div className={styles.radioParent19}>
                      <input
                        className={styles.radio21}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.wired}>Wired</b>
                    </div>
                    <div className={styles.radioParent20}>
                      <input
                        className={styles.radio22}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.battery}>Battery</b>
                    </div>
                  </div>
                </div>
                <div className={styles.doorParent}>
                  <b className={styles.door}>Door</b>
                  <div className={styles.frameParent24}>
                    <div className={styles.radioParent21}>
                      <input
                        className={styles.radio23}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.wired1}>Wired</b>
                    </div>
                    <div className={styles.radioParent22}>
                      <input
                        className={styles.radio24}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.battery1}>Battery</b>
                    </div>
                  </div>
                </div>
                <div className={styles.leakageParent}>
                  <b className={styles.leakage}>Leakage</b>
                  <div className={styles.frameParent25}>
                    <div className={styles.radioParent23}>
                      <input
                        className={styles.radio25}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.wired2}>Wired</b>
                    </div>
                    <div className={styles.radioParent24}>
                      <input
                        className={styles.radio26}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.battery2}>Battery</b>
                    </div>
                  </div>
                </div>
                <div className={styles.presenceParent}>
                  <b className={styles.presence}>Presence</b>
                  <div className={styles.frameParent26}>
                    <div className={styles.radioParent25}>
                      <input
                        className={styles.radio27}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.wired3}>Wired</b>
                    </div>
                    <div className={styles.radioParent26}>
                      <input
                        className={styles.radio28}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.battery3}>Battery</b>
                    </div>
                  </div>
                </div>
                <div className={styles.smokeParent}>
                  <b className={styles.smoke}>Smoke</b>
                  <div className={styles.frameParent27}>
                    <div className={styles.radioParent27}>
                      <input
                        className={styles.radio29}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.wired4}>Wired</b>
                    </div>
                    <div className={styles.radioParent28}>
                      <input
                        className={styles.radio30}
                        type="radio"
                        name="radioGroup-10"
                      />
                      <b className={styles.battery4}>Battery</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.blindsParent}>
                  <b className={styles.blinds}>Blinds</b>
                  <b className={styles.type}>Type</b>
                  <b className={styles.wiring2}>Wiring</b>
                  <b className={styles.color1}>Color</b>
                  <b className={styles.direction}>Direction</b>
                  <div className={styles.sizeInInches}>Size (in inches)</div>
                </div>
                <div className={styles.leftWindowBlindParent}>
                  <div className={styles.leftWindowBlind}>
                    Left Window Blind
                  </div>
                  <div className={styles.frameParent29}>
                    <div className={styles.radioParent29}>
                      <input
                        className={styles.radio31}
                        type="radio"
                        name="radioGroup-11"
                      />
                      <b className={styles.roller}>Roller</b>
                    </div>
                    <div className={styles.radioParent30}>
                      <input
                        className={styles.radio32}
                        type="radio"
                        name="radioGroup-11"
                      />
                      <b className={styles.venetian}>Venetian</b>
                    </div>
                  </div>
                  <div className={styles.frameParent30}>
                    <div className={styles.radioParent31}>
                      <input
                        className={styles.radio33}
                        type="radio"
                        name="radioGroup-12"
                      />
                      <b className={styles.wired5}>Wired</b>
                    </div>
                    <div className={styles.radioParent32}>
                      <input
                        className={styles.radio34}
                        type="radio"
                        name="radioGroup-12"
                      />
                      <b className={styles.battery5}>Battery</b>
                    </div>
                  </div>
                  <div className={styles.frameParent31}>
                    <div className={styles.radioParent33}>
                      <input
                        className={styles.radio35}
                        type="radio"
                        name="radioGroup-13"
                      />
                      <b className={styles.white3}>White</b>
                    </div>
                    <div className={styles.radioParent34}>
                      <input
                        className={styles.radio36}
                        type="radio"
                        name="radioGroup-13"
                      />
                      <b className={styles.black3}>Black</b>
                    </div>
                  </div>
                  <div className={styles.frameParent32}>
                    <div className={styles.radioParent35}>
                      <input
                        className={styles.radio37}
                        type="radio"
                        name="radioGroup-14"
                      />
                      <b className={styles.front}>Front</b>
                    </div>
                    <div className={styles.radioParent36}>
                      <input
                        className={styles.radio38}
                        type="radio"
                        name="radioGroup-14"
                      />
                      <b className={styles.back}>Back</b>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <img
                      className={styles.startAdornmentIcon}
                      alt=""
                      src="/startadornment.svg"
                    />
                    <div className={styles.widthXHeight}>width x height</div>
                    <img
                      className={styles.endAdornmentIcon}
                      alt=""
                      src="/endadornment.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameChild16} />
                <div className={styles.rightWindowBlindParent}>
                  <div className={styles.rightWindowBlind}>
                    Right Window Blind
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.radioParent37}>
                      <input
                        className={styles.radio39}
                        type="radio"
                        name="radioGroup-15"
                      />
                      <b className={styles.roller1}>Roller</b>
                    </div>
                    <div className={styles.radioParent38}>
                      <input
                        className={styles.radio40}
                        type="radio"
                        name="radioGroup-15"
                      />
                      <b className={styles.venetian1}>Venetian</b>
                    </div>
                  </div>
                  <div className={styles.frameParent34}>
                    <div className={styles.radioParent39}>
                      <input
                        className={styles.radio41}
                        type="radio"
                        name="radioGroup-16"
                      />
                      <b className={styles.wired6}>Wired</b>
                    </div>
                    <div className={styles.radioParent40}>
                      <input
                        className={styles.radio42}
                        type="radio"
                        name="radioGroup-16"
                      />
                      <b className={styles.battery6}>Battery</b>
                    </div>
                  </div>
                  <div className={styles.frameParent35}>
                    <div className={styles.radioParent41}>
                      <input
                        className={styles.radio43}
                        type="radio"
                        name="radioGroup-17"
                      />
                      <b className={styles.white4}>White</b>
                    </div>
                    <div className={styles.radioParent42}>
                      <input
                        className={styles.radio44}
                        type="radio"
                        name="radioGroup-17"
                      />
                      <b className={styles.black4}>Black</b>
                    </div>
                  </div>
                  <div className={styles.frameParent36}>
                    <div className={styles.radioParent43}>
                      <input
                        className={styles.radio45}
                        type="radio"
                        name="radioGroup-18"
                      />
                      <b className={styles.front1}>Front</b>
                    </div>
                    <div className={styles.radioParent44}>
                      <input
                        className={styles.radio46}
                        type="radio"
                        name="radioGroup-18"
                      />
                      <b className={styles.back1}>Back</b>
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <img
                      className={styles.startAdornmentIcon1}
                      alt=""
                      src="/startadornment.svg"
                    />
                    <div className={styles.widthXHeight1}>width x height</div>
                    <img
                      className={styles.endAdornmentIcon1}
                      alt=""
                      src="/endadornment.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent37}>
                <div className={styles.controlsParent}>
                  <b className={styles.controls}>Controls</b>
                  <div className={styles.noOfButtons}>No. of buttons</div>
                  <b className={styles.color2}>Color</b>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.switchByEntranceParent}>
                    <div className={styles.switchByEntrance}>
                      Switch by Entrance
                    </div>
                    <div className={styles.contentWrapper}>
                      <div className={styles.content2}>
                        <img
                          className={styles.startAdornmentIcon2}
                          alt=""
                          src="/startadornment.svg"
                        />
                        <img
                          className={styles.endAdornmentIcon2}
                          alt=""
                          src="/endadornment.svg"
                        />
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameChild17} />
                          <div className={styles.div}>-</div>
                        </div>
                        <div className={styles.wrapper}>
                          <b className={styles.b}>2</b>
                        </div>
                        <div className={styles.ellipseParent1}>
                          <div className={styles.frameChild18} />
                          <div className={styles.div1}>+</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent38}>
                      <div className={styles.radioParent45}>
                        <input
                          className={styles.radio47}
                          type="radio"
                          name="radioGroup-19"
                        />
                        <b className={styles.white5}>White</b>
                      </div>
                      <div className={styles.radioParent46}>
                        <input
                          className={styles.radio48}
                          type="radio"
                          name="radioGroup-19"
                        />
                        <b className={styles.black5}>Black</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild19} />
                <div className={styles.frameWrapper3}>
                  <div className={styles.switchByWindowParent}>
                    <div className={styles.switchByWindow}>
                      Switch by Window
                    </div>
                    <div className={styles.contentParent}>
                      <div className={styles.content3}>
                        <img
                          className={styles.startAdornmentIcon3}
                          alt=""
                          src="/startadornment.svg"
                        />
                        <img
                          className={styles.endAdornmentIcon3}
                          alt=""
                          src="/endadornment.svg"
                        />
                        <div className={styles.ellipseParent2}>
                          <div className={styles.frameChild20} />
                          <div className={styles.div2}>-</div>
                        </div>
                        <div className={styles.container}>
                          <b className={styles.b1}>4</b>
                        </div>
                        <div className={styles.ellipseParent3}>
                          <div className={styles.frameChild21} />
                          <div className={styles.div3}>+</div>
                        </div>
                      </div>
                      <div className={styles.frameParent39}>
                        <div className={styles.radioParent47}>
                          <input
                            className={styles.radio49}
                            type="radio"
                            name="radioGroup-20"
                          />
                          <b className={styles.white6}>White</b>
                        </div>
                        <div className={styles.radioParent48}>
                          <input
                            className={styles.radio50}
                            type="radio"
                            name="radioGroup-20"
                          />
                          <b className={styles.black6}>Black</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.lineGroup}>
        <div className={styles.frameChild22} />
        <div className={styles.frameParent40}>
          <div className={styles.frameParent41}>
            <div className={styles.finalPriceParent}>
              <b className={styles.finalPrice}>Final Price:</b>
              <b className={styles.b2}>£800-£1200</b>
            </div>
            <div className={styles.rebateParent}>
              <b className={styles.rebate}>Rebate:</b>
              <b className={styles.b3}>£164</b>
            </div>
          </div>
          <button className={styles.frameButton} onClick={onFrameButton1Click}>
            <div className={styles.confirmProceedToOrderParent}>
              <div
                className={styles.confirmProceed}
              >{`Confirm & Proceed to Order`}</div>
              <img
                className={styles.chevronRightIcon1}
                alt=""
                src="/chevronright-1.svg"
              />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Step5;