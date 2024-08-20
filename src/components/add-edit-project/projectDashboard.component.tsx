import { useEffect, useRef, useState } from "react";
import {
  createProjectApi,
  deleteProjectApi,
  fetchProjectList,
} from "../../store/feature/project-list.slice";
import { useAppDispatch, useAppSelector } from "../../store/store.utils";
import {
  ProjectBasicDetail,
  ProjectDetail,
} from "../../interfaces/project.interface";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import styles from "./projectDashboard.module.css";
import {
  projectColorScheme,
  projectResidentType,
  projectScope,
  ProjectStatus,
  projectType,
} from "../../enums/project.enum";
import { useNavigate } from "react-router-dom";
import { setProjectDetail } from "../../store/feature/project-detail.slice";
import {
  updateCurrentStep,
  updateCurrentSubStepOfLastStep,
  updateCurrentSubStepOne,
  updateIsStepVisible,
  updateProjectStepProjectName,
} from "../../store/feature/project-step.slice";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useCookies } from "react-cookie";

const ProjectDashboard = () => {
  const user = useAppSelector((state) => state.userDataSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const productListState = useAppSelector((state) => state.projectListState);
  const [isCreateProjectVisible, setCreateProjectVisible] =
    useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectBasicDetail>();
  const [newProjectData, setNewProjectData] = useState<ProjectBasicDetail>({
    projectType: projectType.residential,
    projectResidentType: projectResidentType.house,
    projectScope: projectScope.newBuild,
    projectColorScheme: projectColorScheme.white,
  } as ProjectBasicDetail);

  const projectStatusColors: {
    [key in ProjectStatus]: { color: string; backGroundColor: string };
  } = {
    [ProjectStatus.transition]: {
      color: "#9c9600",
      backGroundColor: "#fff5e2",
    },
    [ProjectStatus.submitted]: {
      color: "#9c9600",
      backGroundColor: "#fff5e2",
    },
    [ProjectStatus.pending]: { color: "#919191", backGroundColor: "#eee" },
    [ProjectStatus.delivered]: { color: "#039309", backGroundColor: "#e0f6e0" },
    [ProjectStatus.buildingAreas]: { color: "", backGroundColor: "" },
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

  const projectStatusLabels: { [key in ProjectStatus]: string } = {
    [ProjectStatus.transition]: "IN TRANSIT",
    [ProjectStatus.submitted]: "IN TRANSIT",
    [ProjectStatus.pending]: "TECH DETAILS PENDING",
    [ProjectStatus.delivered]: "DELIVERY COMPLETED",
    [ProjectStatus.buildingAreas]: "DELIVERY COMPLETED",
  };

  const [, setCookie] = useCookies(["userData"]);
  const menuLeft = useRef<Menu>(null);
  const items = [
    {
      label: "Account",
      items: [
        {
          label: "Log Out",
          command: () => {
            setCookie("userData", "");
            navigate("/login");
          },
        },
      ],
    },
  ];
  useEffect(() => {
    dispatch(fetchProjectList());
  }, []);
  const navigateToProjectDetails = (projectDetail: ProjectDetail) => {
    dispatch(updateProjectStepProjectName(projectDetail.name));
    let projectDetailLocalStorage: ProjectDetail = {} as ProjectDetail;

    if (localStorage.getItem(projectDetail.id?.toString() || "")) {
      try {
        projectDetailLocalStorage = JSON.parse(
          localStorage.getItem(projectDetail.id?.toString() || "") || ""
        );
        dispatch(setProjectDetail(projectDetailLocalStorage));
      } catch (e) {
        console.log(e);
        projectDetailLocalStorage = projectDetail;
        dispatch(setProjectDetail(projectDetail));
      }
    } else {
      projectDetailLocalStorage = projectDetail;
      dispatch(setProjectDetail(projectDetail));
    }
    if (projectDetail?.projectStatus) {
      if (projectDetail.projectStatus === ProjectStatus.pending) {
        dispatch(updateIsStepVisible(true));
        dispatch(updateCurrentStep(2));
      } else if (projectDetail.projectStatus === ProjectStatus.submitted) {
        dispatch(updateIsStepVisible(false));
        dispatch(updateCurrentStep(4));
        dispatch(updateCurrentSubStepOfLastStep(1));
      } else if (projectDetail.projectStatus === ProjectStatus.transition) {
        dispatch(updateIsStepVisible(false));
        dispatch(updateCurrentStep(4));
        dispatch(updateCurrentSubStepOfLastStep(2));
      } else if (projectDetail.projectStatus === ProjectStatus.delivered) {
        dispatch(updateIsStepVisible(false));
        dispatch(updateCurrentStep(4));
        dispatch(updateCurrentSubStepOfLastStep(3));
      }
    } else {
      dispatch(updateCurrentStep(1));
      let stepNo = 1;
      let isStepVisible = false;
      let isBuildingArea = false;
      let isFloorArea = false;
      let isRoomArea = false;
      projectDetailLocalStorage.buildingAreas.forEach((buildingArea) => {
        if (!buildingArea.areas.filter((v) => v.isSelected).length) {
          isStepVisible = true;
          isBuildingArea = true;
        } else {
          buildingArea?.areas?.forEach((area) => {
            if (!area?.floors.filter((v) => v.isSelected).length) {
              isStepVisible = true;
              isFloorArea = true;
            } else {
              area?.floors?.forEach((floor) => {
                if (!floor?.floorRooms.filter((v) => v.isSelected).length) {
                  isStepVisible = true;
                  isRoomArea = true;
                }
              });
            }
          });
        }
      });
      if (isRoomArea) {
        stepNo = 4;
      } else if (isFloorArea) {
        stepNo = 3;
      } else if (isBuildingArea) {
        stepNo = 2;
      }
      dispatch(updateCurrentSubStepOne(stepNo));
      dispatch(updateIsStepVisible(isStepVisible));
    }
    navigate(`/edit/${projectDetail.id}`);
  };
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
      <Button
        label="Save & Continue"
        className="p-button-rounded"
        onClick={() => {
          dispatch(
            createProjectApi({
              ...newProjectData,
              buildingAreas: [],
            })
          ).then((v) => {
            const data = v.payload as unknown;
            dispatch(updateProjectStepProjectName(newProjectData.name));
            dispatch(setProjectDetail(data as ProjectDetail));
            dispatch(updateIsStepVisible(false));
            dispatch(updateCurrentStep(1));
            dispatch(updateCurrentSubStepOne(1));
            navigate(`/edit/${(data as ProjectDetail)?.id}`);
          });
          setCreateProjectVisible(false);
        }}
      ></Button>
    </div>
  );
  return (
    <>
      <div>
        <div className="flex justify-content-between bg-white w-full p-4">
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/logo.svg" alt="" />
          </div>
          <div>
            <div
              className="flex cursor-pointer"
              onClick={(event) => {
                menuLeft?.current?.toggle?.(event);
              }}
            >
              {user.userData.id ? (
                <>
                  <Avatar
                    size="large"
                    label={user.userData.name[0].toUpperCase()}
                    style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                    shape="circle"
                  />
                  <div className="pl-2">
                    <span className="font-bold">{user.userData.name}</span>
                    <br />
                    <span className="text-sm">{user.userData.profession}</span>
                  </div>
                </>
              ) : null}
            </div>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
          </div>
        </div>
        <main className="">
          <div>
            <div className="flex m-4 align-content-center justify-content-between">
              <div className="">
                <h1>Your Projects</h1>
              </div>
              <div className="align-content-center">
                <Button
                  label="New Project"
                  className="p-button-rounded"
                  onClick={() => setCreateProjectVisible(true)}
                />
              </div>

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
                      className="w-full mt-1"
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
                          <label htmlFor="projectType1" className="ml-2 cursor-pointer">
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
                          <label htmlFor="projectType2" className="ml-2 cursor-pointer">
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
                            className="ml-2 cursor-pointer"
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
                            className="ml-2 cursor-pointer"
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
                        <label htmlFor="projectScope1" className="ml-2 cursor-pointer">
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
                        <label htmlFor="projectScope2" className="ml-2 cursor-pointer">
                          New Build
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="projectScope3"
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
                        <label htmlFor="projectScope3" className="ml-2 cursor-pointer">
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
                        <label htmlFor="productColor1" className="ml-2 cursor-pointer">
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
                        <label htmlFor="productColor2" className="ml-2 cursor-pointer">
                          Mixed
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="productColor3"
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
                        <label htmlFor="productColor3" className="ml-2 cursor-pointer">
                          Black
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
            <div className="flex justify-content-around w-full flex-wrap pr-7 pl-7">
              <div className="flex flex-wrap justify-content-center">
                {productListState.projectList.map((projectDetail) => {
                  return (
                    <div className="m-3 w-25rem" key={projectDetail.id}>
                      <div
                        className={styles.frameParent1 + " w-25rem relative"}
                      >
                        <div>
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
                            onClick={() => {
                              navigateToProjectDetails(projectDetail);
                            }}
                            label={
                              !projectDetail.projectStatus ||
                              projectDetail.projectStatus ===
                                ProjectStatus.pending
                                ? "Resume"
                                : "View Details"
                            }
                            outlined
                            rounded
                          />
                          {
                           !( projectDetail.projectStatus === ProjectStatus.delivered || projectDetail.projectStatus === ProjectStatus.transition) ? <>
                                     <div className="pt-2 mr-3 flex align-content-center">
                            <img
                              src="/edit.svg"
                              className="cursor-pointer"
                              onClick={() => {
                                dispatch(
                                  updateProjectStepProjectName(
                                    projectDetail.name
                                  )
                                );
                                dispatch(setProjectDetail(projectDetail));
                                navigate(`/edit/${projectDetail.id}`);
                              }}
                            />
                              <img
                                className="ml-3 cursor-pointer"
                               src="/trash.svg"
                                onClick={() => {
                                  setSelectedProject(projectDetail);
                                  setDeleteDialog(true);
                                 
                                }}
                              />
                          </div>
                            
                            
                            </> : null
                          }
                 
                        </div>
                      </div>
                      <div
                        className={
                          styles.techDetailsPendingWrapper + " w-25rem"
                        }
                        style={{
                          backgroundColor:
                            projectStatusColors[
                              projectDetail.projectStatus as ProjectStatus
                            ]?.backGroundColor,
                          color:
                            projectStatusColors[
                              projectDetail.projectStatus as ProjectStatus
                            ]?.color,
                        }}
                      >
                        <div className={styles.techDetailsPending}>
                          {projectStatusLabels[
                            projectDetail.projectStatus as ProjectStatus
                          ] || projectStatusLabels[ProjectStatus.pending]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleDiv} />
            </div>
          </div>
        </main>
      </div>
      <Dialog
        visible={deleteDialog}
        style={{ width: "400px" }}
        header=  {<span style={{ fontSize: "1.3rem" }}>{`Are you sure you want to delete ${selectedProject?.name} project ?`}</span>}
        modal
        className="p-fluid "
        footer={() => {
          return (
            <div className="p-d-flex justify-content-end">
              <Button
                label="Yes, Delete Project"
                onClick={() => {
                  dispatch(deleteProjectApi(selectedProject?.id as number));
                  setDeleteDialog(false);
                }}
                rounded
                severity="danger"
                style={{ float: "left"  }}
              />
            </div>
          );
        }}
        onHide={() => setDeleteDialog(false)}
      >
        <div className="flex justify-content-between">
          <div className="w-full">
            <p className="text-500">
              This will permanently delete the project from your dashboard.
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectDashboard;
