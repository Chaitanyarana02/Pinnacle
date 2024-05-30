import { useNavigate } from "react-router-dom";
import styles from "./step2.module.css";
import { Divider } from "primereact/divider";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useAppSelector } from "../../../../store/store.utils";
import { ProjectAreaFloors, ProjectAreas, ProjectFloorRooms } from "../../../../interfaces/project.interface";

const Step2Sub = () => {
  const navigate = useNavigate();
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  // const dispatch = useAppDispatch();
  const headerTemplate = (
    areaName: string,
    areaType: string,
    areaDisplayName: string
  ) => {
    return (
      <>
        <div style={{ width: "50rem" }}>
          <div className="flex justify-content-between">
            <div>
              <div className="text-500 text-sm">
                <span>{areaName}</span>
                <span className="mr-1 ml-1">&#8226;</span>
                <span>{areaType}</span>
              </div>
              <div>
                <h3>{areaDisplayName}</h3>
              </div>
            </div>

            <span className="">
              <i
                className="pi pi-chevron-down border-circle surface-200 p-3"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </span>
          </div>
        </div>
      </>
    );
  };
  const getSection = (floor: ProjectAreaFloors, type: string) => {
    return (
      <div className="flex w-full justify-content-center pl-5 mt-0 pr-5">
        <div style={{ width: "58rem" }}>
          <Divider className="m-0 mt-4" />
          <div className="mt-2">
            <Accordion activeIndex={0}>
              <AccordionTab
                header="Header I"
                headerTemplate={headerTemplate(
                  floor.name,
                  type,
                  floor.name
                )}
              >
                <div className="flex align-items-center flex-wrap">
                  {floor?.floorRooms?.map((room) => {
                    return (
                      <div
                        className="inline p-3 font-semibold text-lg m-2  "
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "2rem",
                        }}
                      >
                        {room.name}
                        <i
                          className="pi pi-check ml-4 mr-2 p-1 bg-primary"
                          style={{
                            border: "1px solid #2D74FE",
                            borderRadius: "1.5rem",
                          }}
                        ></i>
                      </div>
                    );
                  })}
                  <div>
                    <b className="text-primary mt-3">
                      <i className="pi pi-plus" /> Add another
                    </b>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
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
          <img className={styles.xIcon} loading="lazy" alt="" src="x.svg" />
        </div>
      </header>

      <section className={styles.step2Inner}>
        <div>
          <div>
            <h4>Define rooms within each floor</h4>
          </div>
          <p className="text-500 text-lg -mt-5">For each selected area, choose the relevant Rooms from the available options. </p>
        </div>
      </section>
      <div className="w-full">
        {projectDetailState?.projectDetail?.buildingAreas?.indoorArea[0].floors.map(
          (area) => getSection(area, "Indoor")
        )}
        {projectDetailState?.projectDetail?.buildingAreas?.outDoorArea[0].floors.map(
          (area) => getSection(area, "Outdoor")
        )}
      </div>

      {/* <section className="flex w-full justify-content-center p-5">

        <div style={{ width: '58rem' }}>
          <Divider className="m-0 mt-4" />
          <div className="mt-2">

            <Accordion activeIndex={0}>
              <AccordionTab header="Header I" headerTemplate={headerTemplate()}>
                <div className="flex align-items-center flex-wrap">
                  <div className="inline p-3 font-semibold text-lg" style={{ border: '1px solid #ddd', borderRadius: '2rem' }}>
                    Basement
                    <i className="pi pi-check ml-4 mr-2 p-1 bg-primary" style={{ border: '1px solid #2D74FE', borderRadius: '1.5rem' }}></i>
                  </div>
                  <div>
                    <b className="text-primary mt-3"><i className="pi pi-plus" /> Add another</b>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>

          </div>
        </div>
      </section> */}

      <footer className={styles.frameFooter}>
        <div className={styles.buttonParent}>
          <button className={styles.button} onClick={() => navigate("/step2")}>
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
            <button
              className={styles.button1}
              onClick={() => navigate("/step3")}
            >
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

export default Step2Sub;
