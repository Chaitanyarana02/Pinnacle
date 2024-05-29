import { useEffect, useState } from "react";
import { fetchProjectList } from "../../store/fearure/project-list.slice";
import { useAppDispatch } from "../../store/store.utils";
import { ProjectBasicDetail } from "../../interfaces/project.interface";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import styles from "./projectDashboard.module.css";
import {
  projectColorScheme,
  projectResidentType,
  projectScope,
  projectType,
} from "../../enums/project.enum";
import { useNavigate } from "react-router-dom";
const ProjectDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const productListState = useAppSelector((state) => state.projectListState);
  const [isCreateProjectVisible, setCreateProjectVisible] =
    useState<boolean>(false);
  const [newProjectData, setNewProjectData] = useState<ProjectBasicDetail>({
    projectType: projectType.residential,
    projectResidentType: projectResidentType.house,
    projectScope: projectScope.newBuild,
    projectColorScheme: projectColorScheme.white,
  } as ProjectBasicDetail);
  useEffect(() => {
    dispatch(fetchProjectList());
  }, []);

  const headerElement = (
    <div>
      <span className="text-3xl font-bold block">Create New Project</span>
      <span className="text-400 text-sm">
        Lets start with filling out the basic project details given below
      </span>
    </div>
  );
  const footerContent = (
    <div className="text-left">
      <Button label="Save & Continue" className="p-button-rounded"></Button>
    </div>
  );
  return (
    <>
      {/* <div className="off-white-background">
                <div className="flex justify-content-between p-4">
                    <div>
                        <span className="text-4xl font-bold ">Your Projects</span>
                    </div>
                    <div>
                        <Button label="Proceed" className="p-button-rounded" />
                    </div>
                </div>
                <div className="grid ml-4">
                    {
                        productListState.projectList.map((projectDetail: ProjectBasicDetail) => {
                            return (
                                <div key={projectDetail.id} className="col-4">
                                    <div className="border-solid border-1 border-200 border-round-3xl z-2 relative">
                                        <div className="p-4 ">
                                            <span className="text-2xl font-bold">{projectDetail.name}</span>
                                            <p className="">{projectDetail.address}</p>
                                        </div>
                                    </div>
                                    <div className={"relative border-solid border-1 border-200 border-round-3xl h-5rem -mt-6 surface-200 z-1"}>

                                    </div>
                                </div>
                            )   
                        })
                    }
                </div>
            </div> */}
      <div className={styles.dashboard}>
        <main className={styles.dashboardInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.yourProjectsWrapper}>
                <h1 className={styles.yourProjects}>Your Projects</h1>
              </div>
              <Button
                label="New Project"
                className="p-button-rounded"
                onClick={() => setCreateProjectVisible(true)}
              />
              <Dialog
                visible={isCreateProjectVisible}
                modal
                header={headerElement}
                footer={footerContent}
                style={{ width: "50rem" }}
                onHide={() => {
                  if (!isCreateProjectVisible) return;
                  setCreateProjectVisible(false);
                }}
              >
                <div className="w-full">
                  <div className="">
                    <InputText
                      className="w-full"
                      onChange={(e) => {
                        newProjectData.name = e.target.value;
                        setNewProjectData({ ...newProjectData });
                      }}
                      placeholder="Enter Project Name"
                    />
                  </div>
                  <div className="">
                    <InputText
                      className="w-full mt-3"
                      onChange={(e) => {
                        newProjectData.address = e.target.value;
                        setNewProjectData({ ...newProjectData });
                      }}
                      placeholder="Enter Project Address"
                    />
                  </div>
                  <div className="flex flex-wrap gap-7">
                    <div className="">
                      <h4>Project type</h4>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="projectType1"
                            name="projectType"
                            value={projectType.residential}
                            onChange={(e) => {
                              newProjectData.projectType = e.value;
                              setNewProjectData({ ...newProjectData });
                            }}
                            checked={
                              newProjectData.projectType ===
                              projectType.residential
                            }
                          />
                          <label htmlFor="projectType1" className="ml-2">
                            Residential
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="projectType2"
                            name="projectType"
                            value={projectType.commercial}
                            onChange={(e) => {
                              newProjectData.projectType = e.value;
                              console.log(e.value, e);

                              setNewProjectData({ ...newProjectData });
                            }}
                            checked={
                              newProjectData.projectType ===
                              projectType.commercial
                            }
                          />
                          <label htmlFor="projectType2" className="ml-2">
                            Commercial
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h4>Select Residence Type</h4>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="projectResidentType1"
                            name="projectResidentType"
                            value={projectResidentType.flat}
                            onChange={(e) => {
                              newProjectData.projectResidentType = e.value;
                              console.log(newProjectData, e.value);

                              setNewProjectData({ ...newProjectData });
                            }}
                            checked={
                              newProjectData.projectResidentType ===
                              projectResidentType.flat
                            }
                          />
                          <label
                            htmlFor="projectResidentType1"
                            className="ml-2"
                          >
                            Flat
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="projectResidentType2"
                            name="projectResidentType"
                            value={projectResidentType.house}
                            onChange={(e) => {
                              newProjectData.projectResidentType = e.value;
                              setNewProjectData({ ...newProjectData });
                            }}
                            checked={
                              newProjectData.projectResidentType ===
                              projectResidentType.house
                            }
                          />
                          <label
                            htmlFor="projectResidentType2"
                            className="ml-2"
                          >
                            House
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* scope */}
                  <div>
                    <h4>Select Project Scope</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="projectScope1"
                          name="projectScope"
                          value={projectScope.fullRefurbishment}
                          onChange={(e) => {
                            newProjectData.projectScope = e.value;
                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectScope ===
                            projectScope.fullRefurbishment
                          }
                        />
                        <label htmlFor="projectScope1" className="ml-2">
                          Full Refurbishment
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="projectScope2"
                          name="projectScope"
                          value={projectScope.newBuild}
                          onChange={(e) => {
                            newProjectData.projectScope = e.value;
                            console.log(e.value, e);

                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectScope ===
                            projectScope.newBuild
                          }
                        />
                        <label htmlFor="projectScope2" className="ml-2">
                          New Build
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="projectScope2"
                          name="projectScope"
                          value={projectScope.systemInstallation}
                          onChange={(e) => {
                            newProjectData.projectScope = e.value;
                            console.log(e.value, e);

                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectScope ===
                            projectScope.systemInstallation
                          }
                        />
                        <label htmlFor="projectScope2" className="ml-2">
                          System Installation Only
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* color */}
                  <div>
                    <h4>Select Color Scheme</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="productColor1"
                          name="productColor"
                          value={projectColorScheme.white}
                          onChange={(e) => {
                            newProjectData.projectColorScheme = e.value;
                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectColorScheme ===
                            projectColorScheme.white
                          }
                        />
                        <label htmlFor="productColor1" className="ml-2">
                          White
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="productColor2"
                          name="productColor"
                          value={projectColorScheme.Mixed}
                          onChange={(e) => {
                            newProjectData.projectColorScheme = e.value;
                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectColorScheme ===
                            projectColorScheme.Mixed
                          }
                        />
                        <label htmlFor="productColor2" className="ml-2">
                          Mixed
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="productColor2"
                          name="productColor"
                          value={projectColorScheme.black}
                          onChange={(e) => {
                            newProjectData.projectColorScheme = e.value;
                            console.log(e.value, e);

                            setNewProjectData({ ...newProjectData });
                          }}
                          checked={
                            newProjectData.projectColorScheme ===
                            projectColorScheme.black
                          }
                        />
                        <label htmlFor="productColor2" className="ml-2">
                          Black
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <div className={styles.testProjectParent}>
                      <h3 className={styles.testProject}>Test Project</h3>
                      <div className={styles.residentialParent}>
                        <div className={styles.residential}>Residential</div>
                        <div className={styles.projectShapeWrapper}>
                          <div className={styles.projectShape} />
                        </div>
                        <div className={styles.flat}>Flat</div>
                        <div className={styles.ellipseWrapper}>
                          <div className={styles.frameChild} />
                        </div>
                        <div className={styles.newBuild}>New Build</div>
                      </div>
                      <div className={styles.addressParent}>
                        <div className={styles.address}>Address:</div>
                        <div className={styles.kemmerOverpassSuite}>
                          39547 Kemmer Overpass Suite 971
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonParent}>
                      <button className={styles.button1} onClick={() => navigate('/step1Info')}>
                        <div className={styles.button2}>Resume</div>
                      </button>
                      <div className={styles.projectActionIconsWrapper}>
                        <div className={styles.projectActionIcons}>
                          <input className={styles.edit} type="checkbox" />
                          <img
                            className={styles.trash2Icon}
                            loading="lazy"
                            alt=""
                            src="/trash2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.techDetailsPendingWrapper}>
                    <div className={styles.techDetailsPending}>
                      Tech Details Pending
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.projectAbcParent}>
                      <h3 className={styles.projectAbc}>Project ABC</h3>
                      <div className={styles.commercialParent}>
                        <div className={styles.commercial}>Commercial</div>
                        <div className={styles.ellipseContainer}>
                          <div className={styles.frameItem} />
                        </div>
                        <div className={styles.onlySystem}>Only System</div>
                      </div>
                      <div className={styles.addressGroup}>
                        <div className={styles.address1}>Address:</div>
                        <div className={styles.kemmerOverpassSuite1}>
                          39547 Kemmer Overpass Suite 971
                        </div>
                      </div>
                    </div>
                    <button className={styles.button3} onClick={() => navigate('/step1Info')}>
                      <div className={styles.button4}>View Details</div>
                    </button>
                  </div>
                  <div className={styles.inTransitWrapper}>
                    <div className={styles.inTransit}>In Transit</div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameParent5}>
                    <div className={styles.projectXyzParent}>
                      <h3 className={styles.projectXyz}>Project XYZ</h3>
                      <div className={styles.commercialGroup}>
                        <div className={styles.commercial1}>Commercial</div>
                        <div className={styles.ellipseFrame}>
                          <div className={styles.frameInner} />
                        </div>
                        <div className={styles.onlySystem1}>Only System</div>
                      </div>
                      <div className={styles.addressContainer}>
                        <div className={styles.address2}>Address:</div>
                        <div className={styles.kemmerOverpassSuite2}>
                          39547 Kemmer Overpass Suite 971
                        </div>
                      </div>
                    </div>
                    <button className={styles.button5} onClick={() => navigate('/step1Info')}>
                      <div className={styles.button6}>View Details</div>
                    </button>
                  </div>
                  <div className={styles.deliveryCompletedWrapper}>
                    <div className={styles.deliveryCompleted}>
                      Delivery Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleDiv} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProjectDashboard;
