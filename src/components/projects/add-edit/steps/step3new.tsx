import { useCallback } from "react";
import styles from "./step3new.module.css";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import { useAppSelector } from "../../../../store/store.utils";

const Step3new = () => {
  const navigate = useNavigate();
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const onXIconClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className={styles.step3new}>
      <header className={styles.header1}>
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
            src="x.svg"
            onClick={onXIconClick}
          />
        </div>
      </header>
      <div className={styles.projectStructureReviewWrapper}>
        <h2 className={styles.projectStructureReview}>
          Project Structure Review
        </h2>
      </div>
      <section className="flex w-full justify-content-center">
        <div
          className=""
          style={{ width: "55rem", backgroundColor: "rgb(247, 247, 247)" }}
        >
          <div className="p-4">
            <div className="flex justify-content-between text-xl text-500">
              <b>Selected areas</b>
              <b>Selected floors</b>
              <b>Selected rooms</b>
            </div>

            <div>
              {projectDetailState.projectDetail?.buildingAreas?.indoorArea.map(
                (area) => {
                  return (
                    <>
                      <Divider className="m-0 p-4 " />
                      <div className="flex justify-content-between ">
                        <div>
                          <div>
                            <span className="text-xl font-semibold text-500">
                              {area.name}
                            </span>
                          </div>
                          <div className="text-500 text-sm">
                            <span>{area.internalName}</span>
                            <span className="mr-1 ml-1">&#8226;</span>
                            <span>{"Indoor"}</span>
                          </div>
                        </div>
                        <div className="flex flex-column align-items-start w-full" style={{marginLeft:'15rem'}}>
                          {area.floors.map((floor) => {
                            return (
                              <div className="flex justify-content-between  w-full ">
                                <div>
                                  <span className="text-xl font-semibold text-500 mb-5">
                                    {floor.name}
                                  </span>
                                </div>
                                <div className="w-15rem">
                                  {floor.floorRooms.map((room) => (
                                    <>
                                      <span className="text-xl font-semibold text-500">
                                        {room.name} |{" "}
                                      </span>
                                    </>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div></div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.step3newInner}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.selectedAreasParent}>
                <b className={styles.selectedAreas}>Selected areas</b>
                <b className={styles.selectedFloors}>Selected floors</b>
                <b className={styles.selectedRooms}>Selected rooms</b>
              </div>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.houseParent}>
                <b className={styles.house}>House</b>
                <div className={styles.houseGroup}>
                  <div className={styles.house1}>House</div>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.indoor}>Indoor</div>
                </div>
              </div>
              <div className={styles.groundFloorParent}>
                <b className={styles.groundFloor}>Ground Floor</b>
                <b className={styles.firstFloor}>First Floor</b>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.kitchenParent}>
                  <b className={styles.kitchen}>Kitchen</b>
                  <div className={styles.frameChild1} />
                  <b className={styles.bathroom}>Bathroom</b>
                  <div className={styles.frameChild2} />
                  <b className={styles.entranceHall}>Entrance Hall</b>
                  <div className={styles.frameChild3} />
                  <b className={styles.cinema}>Cinema</b>
                  <div className={styles.frameChild4} />
                  <b className={styles.utilityRoom}>Utility Room</b>
                </div>
                <div className={styles.kitchenGroup}>
                  <b className={styles.kitchen1}>Kitchen</b>
                  <div className={styles.frameChild5} />
                  <b className={styles.guestBedroom}>Guest Bedroom</b>
                  <div className={styles.frameChild6} />
                  <b className={styles.bathroom1}>Bathroom</b>
                  <div className={styles.frameChild7} />
                  <b className={styles.storeRoom}>Store room</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild8} />
            <div className={styles.frameParent6}>
              <div className={styles.manCaveParent}>
                <b className={styles.manCave}>Man Cave</b>
                <div className={styles.shedParent}>
                  <div className={styles.shed}>Shed</div>
                  <div className={styles.ellipseFrame}>
                    <div className={styles.frameChild9} />
                  </div>
                  <div className={styles.indoor1}>Indoor</div>
                </div>
              </div>
              <b className={styles.groundFloor1}>Ground floor</b>
              <div className={styles.tvRoomParent}>
                <b className={styles.tvRoom}>TV room</b>
                <div className={styles.frameChild10} />
                <b className={styles.studyRoom}>Study room</b>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild11} />
            <div className={styles.frameParent7}>
              <div className={styles.carGarageParent}>
                <b className={styles.carGarage}>Car Garage</b>
                <div className={styles.garageParent}>
                  <div className={styles.garage}>Garage</div>
                  <div className={styles.ellipseWrapper1}>
                    <div className={styles.frameChild12} />
                  </div>
                  <div className={styles.indoor2}>Indoor</div>
                </div>
              </div>
              <b className={styles.groundFloor2}>Ground floor</b>
              <div className={styles.carParkingParent}>
                <b className={styles.carParking}>Car Parking</b>
                <div className={styles.frameChild13} />
                <b className={styles.storeRoom1}>Store room</b>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild14} />
            <div className={styles.frameParent8}>
              <div className={styles.frontGardenParent}>
                <b className={styles.frontGarden}>Front Garden</b>
                <div className={styles.gardenAreaParent}>
                  <div className={styles.gardenArea}>Garden Area</div>
                  <div className={styles.ellipseWrapper2}>
                    <div className={styles.frameChild15} />
                  </div>
                  <div className={styles.outdoor}>Outdoor</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent9}>
                  <div className={styles.groundFloorWrapper}>
                    <b className={styles.groundFloor3}>Ground floor</b>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>--</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className={styles.step3newChild}>
        <div className={styles.frameParent10}>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              onClick={() => navigate("/step2")}
            >
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="chevron-right.svg"
              />
              <b className={styles.label}>Back</b>
            </button>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.ellipseParent1}>
              <div className={styles.frameChild16} />
              <div className={styles.frameChild17} />
              <div className={styles.frameChild18} />
            </div>
          </div>
          <button className={styles.button1} onClick={() => navigate("/step5")}>
            <div className={styles.label1}>{`Save & Proceed`}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3new;
