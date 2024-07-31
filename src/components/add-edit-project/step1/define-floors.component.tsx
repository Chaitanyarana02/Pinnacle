import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store/store.utils";
import { ProjectAreas } from "../../../interfaces/project.interface";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Divider } from "primereact/divider";
import { updateCurrentSubStepOne } from "../../../store/feature/project-step.slice";
import { addFloorToProject, updateFloorSelection } from "../../../store/feature/project-detail.slice";
import { Toast } from "primereact/toast";
import UtilityService from "../../../services/utilit.service";
import { NotificationTypeEnum } from "../../../enums/notificationType.enum";

const DefineFloorsComponent = () => {
  const toast = useRef<Toast>(null);
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [areaIndex, setAreaIndex] = useState<{
    buildingAreaIndex: number;
    areaIndex: number;
  }>({
    buildingAreaIndex: 0,
    areaIndex: 0,
  });
  const [dialogState, setDialogState] = useState<string>("");
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const addEditDialogFooter = (
    <>
      <Button
        label="Add"
        style={{ float: "left" }}
        rounded
        onClick={() => {
          dispatch(addFloorToProject({
            buildingAreaIndex: areaIndex.buildingAreaIndex,
            areaIndex: areaIndex.areaIndex,
            area: {
              name: dialogState,
              isSelected: true,
              floorRooms: [],
            }
          }))
          setAddEditDialog(false);
          setDialogState('')
        }}
      />
    </>
  );
  const headerTemplate = (
    areaName: string,
    areaType: string,
    areaDisplayName: string,
    buildingAreaIndex: number,
    areaIndex: number
  ) => {
    return (

      <div
        style={{ width: "50rem" }}
        key={buildingAreaIndex + "header" + areaIndex}
      >
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
    );
  };
  const getSection = (
    area: ProjectAreas,
    buildingAreaName: string,
    buildingAreaIndex: number,
    areaIndex: number
  ) => {
    return (
      <div
        className="flex w-full justify-content-center pl-5 mt-0 pr-5"
        key={buildingAreaIndex + "_" + areaIndex}
      >
        <div style={{ width: "58rem" }}>
          <Divider className="m-0 mt-4" />
          <div className="mt-2">
            <Accordion activeIndex={0}>
              <AccordionTab
                header="Header I"
                headerTemplate={headerTemplate(
                  area.internalName || '',
                  buildingAreaName,
                  area.name,
                  buildingAreaIndex,
                  areaIndex
                )}
              >
                <div className="flex align-items-center flex-wrap">
                  {area.floors.map((floor, index) => {
                    return (
                      <div
                        key={floor.name + index}
                        className={floor.isSelected ? 'inline p-3 font-semibold text-lg m-2 text-primary' : 'inline p-3 font-semibold text-lg m-2'}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "2rem",
                        }}
                      >
                        {floor.name}
                        <i onClick={
                          () => {
                            dispatch(
                              updateFloorSelection({
                                buildingAreaIndex,
                                areaIndex,
                                floorIndex: index,
                                isSelected:!floor.isSelected,
                              })
                            )
                          }
                        }
                          className= {floor.isSelected? 'pi pi-check ml-4 mr-2 p-2 bg-primary': 'pi pi-check ml-4 mr-2 p-2 text-white'}
                          style={{
                            border:  floor.isSelected ? "1px solid #2D74FE" : '1px solid #ddd',
                            borderRadius: "1.5rem",
                          }}
                        ></i>
                      </div>
                    );
                  })}
                  <div>
                    <b
                      className="text-primary mt-3 w-2 cursor-pointer"
                      onClick={() => {
                    
                        setDialogState("");
                        setAreaIndex({
                          buildingAreaIndex,
                          areaIndex,
                        });
                        setAddEditDialog(true);
                      }}
                    >
                      <i className="pi pi-plus " /> Add another
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

  const checkValidation = () =>{
    let selected = 0;
    projectDetailState.projectDetail.buildingAreas.forEach( buildingArea => {
        buildingArea.areas.forEach(area => {
          selected += area.floors.filter(v => v.isSelected).length;
        })
    })
    if(selected) {
      dispatch(updateCurrentSubStepOne(4))

    }else{
      UtilityService.ShowNotification(toast, NotificationTypeEnum.Error , 'Please select at list one floor')
    }
  }
  return (
    
    <div className="flex justify-content-around mt-3 mb-5">
         <Toast ref={toast} />
      <div>
        <section className="mt-4">
          <div className="m-auto max-w-max text-4xl font-semibold">
            Define floors within each area
          </div>
          <p className="m-auto max-w-max text-500 text-lg mt-3">
            For each selected area, choose the relevant floors from the
            available options.
          </p>
        </section>
        {projectDetailState?.projectDetail?.buildingAreas?.map(
          (buildingArea, buildingAreaIndex) => (
            <section key={buildingAreaIndex}>
              {buildingArea.areas.map((area, areaIndex) =>
              area.isSelected ? 
                getSection(
                  area,
                  buildingArea.name,
                  buildingAreaIndex,
                  areaIndex
                ): null
              )}
            </section>
          )
        )}

        <div className="flex justify-content-between align-content-center">
          <div>
            <Button
              label="Back"
              icon="pi pi-angle-left"
              rounded
              severity="secondary"
              size="large"
              onClick={() => dispatch(updateCurrentSubStepOne(2))}
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
              label="Define Rooms"
              icon="pi pi-angle-right"
              rounded
              iconPos="right"
              size="large"
              onClick={() => checkValidation()}
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
export default DefineFloorsComponent;
