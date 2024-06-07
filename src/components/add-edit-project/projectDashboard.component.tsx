import { useEffect, useState } from "react";
import { fetchProjectList } from "../../store/feature/project-list.slice";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
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
  projectStatus,
  projectType,
} from "../../enums/project.enum";
import { useNavigate } from "react-router-dom";

const ProjectDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const productListState = useAppSelector((state) => state.projectListState);
  const [isCreateProjectVisible, setCreateProjectVisible] =
    useState<boolean>(false);
  const [newProjectData, setNewProjectData] = useState<ProjectBasicDetail>({
    projectType: projectType.residential,
    projectResidentType: projectResidentType.house,
    projectScope: projectScope.newBuild,
    projectColorScheme: projectColorScheme.white,
  } as ProjectBasicDetail);

  const projectStatusColors: {
    [key in projectStatus]: { color: string; backGroundColor: string };
  } = {
    [projectStatus.transition]: {
      color: "#9c9600",
      backGroundColor: "#fff5e2",
    },
    [projectStatus.pending]: { color: "#919191", backGroundColor: "#eee" },
    [projectStatus.delivered]: { color: "#039309", backGroundColor: "#e0f6e0" },
  };
  const projectResidentLabels: {
    [key in projectResidentType]: string;
  } = {
    [projectResidentType.flat]: "Flat",
    [projectResidentType.house]: "House",
  };

  const projectTypeLabels: { [key in projectType]: string } = {
    [projectType.residential]: "Residential",
    [projectType.commercial]: "Commercial",
  };
  const projectScopeLabels: { [key in projectScope]: string } = {
    [projectScope.fullRefurbishment]: "Full Refurbishment",
    [projectScope.newBuild]: "New Build",
    [projectScope.systemInstallation]: "System Installation Only",
  };

  const projectStatusLabels: { [key in projectStatus]: string } = {
    [projectStatus.transition]: "IN TRANSIT",
    [projectStatus.pending]: "TECH DETAILS PENDING",
    [projectStatus.delivered]: "DELIVERY COMPLETED",
  };
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
                {productListState.projectList.map(
                  (projectDetail: ProjectBasicDetail) => {
                    return (
                      <div className={styles.frameDiv} key={projectDetail.id}>
                        <div className={styles.frameParent1}>
                          <div className={styles.projectParentFrame}>
                            <h3 className="text-2xl mt-0">
                              {projectDetail.name}
                            </h3>
                            <div className={styles.residentialParent}>
                              <span>
                                {projectTypeLabels[projectDetail.projectType]}{" "}
                              </span>
                              <span>&#8226;</span>
                              <span>
                                {
                                  projectResidentLabels[
                                    projectDetail.projectResidentType
                                  ]
                                }
                              </span>
                              <span>&#8226;</span>
                              <span>
                                {projectScopeLabels[projectDetail.projectScope]}
                              </span>
                            </div>
                            <div className="flex mt-1">
                              <span className="text-500 font-medium">
                                Address:
                              </span>
                              <span className="ml-2">
                                {projectDetail.address}
                              </span>
                            </div>
                          </div>
                          <div className="flex fle justify-content-between w-full">
                            <Button
                              onClick={() => navigate('/step1Info')}
                              label={
                                
                                projectDetail.projectStatus ===
                                projectStatus.pending
                                  ? "Resume"
                                  : "View Details"
                              }
                              outlined
                              rounded
                            />
                            {projectDetail.projectStatus ===
                            projectStatus.pending ? (
                              <div className="pt-2 mr-3">
                                <i className="pi pi-file-edit text-3xl text-500 ml-3"></i>
                                <i className="pi pi-trash text-3xl text-500 ml-3"></i>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div
                          className={styles.techDetailsPendingWrapper}
                          style={{
                            backgroundColor:
                              projectStatusColors[
                                projectDetail.projectStatus as projectStatus
                              ]?.backGroundColor,
                            color:
                              projectStatusColors[
                                projectDetail.projectStatus as projectStatus
                              ]?.color,
                          }}
                        >
                          <div className={styles.techDetailsPending}>
                            {
                              projectStatusLabels[
                                projectDetail.projectStatus as projectStatus
                              ]
                            }
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
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
