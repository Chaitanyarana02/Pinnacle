import { Divider } from "primereact/divider";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  updateProjectData,
  updateBuildingAreaData,
  addAreaToProject,
} from "../../../store/feature/project-detail.slice";
import {
  updateCurrentStep,
  updateCurrentSubStepOne,
  updateIsStepVisible,
} from "../../../store/feature/project-step.slice";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { getDefaultConfig } from "../../../store/feature/default-config.slice";
import { Toast } from "primereact/toast";
import UtilityService from "../../../services/utilit.service";
import { NotificationTypeEnum } from "../../../enums/notificationType.enum";

const BuildingAreasComponent = () => {
  const toast = useRef<Toast>(null);
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const defaultConfigState = useAppSelector((state) => state.defaultConfigState);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [areaIndex, setAreaIndex] = useState<number>(0);
  const [dialogState, setDialogState] = useState<string>("");
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(updateCurrentStep(1));
    dispatch(updateIsStepVisible(true));

    if (id) {
      console.log('data fatch');
      if(!projectDetailState.projectDetail.buildingAreas.length) {
        dispatch(getDefaultConfig())

      }
    } else {
      dispatch(getDefaultConfig())
    
    }

    
  }, []);
  useEffect(() => {
    if (id) {
    
      if(!projectDetailState.projectDetail.buildingAreas.length) {
        dispatch(
          updateProjectData(defaultConfigState.defaultAreas)
        );

      }
      // dispatch(fetchProjectDetail(id));
    }else {
      dispatch(
        updateProjectData(defaultConfigState.defaultAreas)
      );
    }
  

  }, [defaultConfigState]);
  const checkValidation = () =>{
      let selected = 0;
      projectDetailState.projectDetail.buildingAreas.forEach( buildingArea => {
        selected += buildingArea.areas.filter(area => area.isSelected).length;
      })
      if(selected) {
        localStorage.setItem(projectDetailState.projectDetail.id?.toString() || '', JSON.stringify(projectDetailState.projectDetail));
        dispatch(updateCurrentSubStepOne(3))

      }else{
        UtilityService.ShowNotification(toast, NotificationTypeEnum.Error , 'Please select at   list one area')
      }
    }
  const addEditDialogFooter = (
    <>
      <Button
        label="Add"
        style={{ float: "left" }}
        rounded
        onClick={() => {
          setAddEditDialog(false);
          dispatch(
            addAreaToProject({
              areaIndex,
              area: {
                name: dialogState,
                internalName: dialogState,
                description: "",
                isSelected: false,
                floors: [],
              },
            })
          );
        }}
      />
    </>
  );
  return (
    <div className="flex justify-content-around mt-3">
    <Toast ref={toast} />

      <div>
        <section className="mt-4">
          <div className="m-auto max-w-max text-4xl font-semibold">
            Define building areas
          </div>
          <p className="text-500 text-lg mt-3 pl-4 pr-4">
            Choose the areas included in your building by selecting from the
            options below. These are grouped by Indoor and Outdoor locations.
          </p>
        </section>
        {projectDetailState?.projectDetail?.buildingAreas?.map(
          (buildingArea, buildingAreaIndex) => (
            <section
              className="flex w-full justify-content-center p-5"
              key={buildingAreaIndex}
            >
              <div style={{ maxWidth: "55rem" , padding: '5px'}}>
                <div className="w-full">
                  <span className="text-2xl font-semibold">
                    {buildingArea.name}
                  </span>

                  <Divider className="m-0 mt-4" />
                </div>
                <div className="flex flex-column w-full mt-3">
                  {buildingArea?.areas?.map((area, index) => {
                    return (
                      <div
                        className="flex justify-content-between align-items-center  h-4rem"
                        key={buildingAreaIndex + "_" + index}
                      >
                        <div className="w-14rem">
                          <Checkbox
                            onChange={(e) => {
                              dispatch(
                                updateBuildingAreaData({
                                  buildingAreaIndex,
                                  index,
                                  value: { ...area, isSelected: e.checked },
                                })
                              );
                            }}
                            checked={area.isSelected || false}
                          ></Checkbox>
                          <span className="text-xl font-semibold text-600">
                            {" "}
                            {area.internalName}
                          </span>
                        </div>
                        <InputText
                        className="mr-3"
                          placeholder={area.name}
                          value={area.name}
                          onChange={(e) =>
                            dispatch(
                              updateBuildingAreaData({
                                buildingAreaIndex,
                                index,
                                value: { ...area, name: e.target?.value },
                              })
                            )
                          }
                          autoFocus
                        />
                        {
                          area.isSelected ?  <InputText
                          className="w-18rem"
                          placeholder="Additional Comment (Optional)"
                          value={area.description}
                          onChange={(e) =>
                            dispatch(
                              updateBuildingAreaData({
                                buildingAreaIndex,
                                index,
                                value: {
                                  ...area,
                                  description: e.target?.value,
                                },
                              })
                            )
                          }
                        /> : <div className="w-18rem"></div>
                        }
                       
                      </div>
                    );
                  })}
                  <b className="text-primary mt-3 w-2" onClick={() => {
                        setDialogState("");
                        setAreaIndex(buildingAreaIndex);
                        setAddEditDialog(true);
                      }}>
                    <i
                      className="pi pi-plus cursor-move"
                   
                    />{" "}
                    Add another
                  </b>
                </div>
              </div>
            </section>
          )
        )}
        <div className="flex justify-content-between align-content-center mb-4">
          <div>
            <Button
              label="Back"
              icon="pi pi-angle-left"
              rounded
              severity="secondary"
              size="large"
              onClick={() => {
                dispatch(updateIsStepVisible(false));
                dispatch(updateCurrentSubStepOne(1))
              }}
            />
          </div>
          <div className="flex">
            {[2, 3, 4].map((v) => (
              <div
                className=" mr-2"
                key={v}
                style={{
                  height: "0.625rem",
                  width: "0.625rem",
                  borderRadius: "50%",

                  background:
                    v == projectStepState.currentSubStepOfOne
                      ? "#2D74FE"
                      : "#D9D9D9",
                }}
              ></div>
            ))}
          </div>
          <div>
            <Button
              label="Define Floors"
              icon="pi pi-angle-right"
              rounded
              iconPos="right"
              size="large"
              onClick={() =>{ checkValidation()}}
            />
          </div>
        </div>
      </div>
      <Dialog
        visible={addEditDialog}
        style={{ width: "350px" }}
        header="Add new Entity"
        modal
        className="p-fluid"
        footer={addEditDialogFooter}
        onHide={() => setAddEditDialog(false)}
      >
        <div className="flex justify-content-between">
          <div className="w-full">
            <InputText
              id="name"
              value={dialogState}
              onChange={(e) => {
                setDialogState(e?.target?.value || "");
              }}
              placeholder="Enter Entity Name"
              required
              autoFocus
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BuildingAreasComponent;
