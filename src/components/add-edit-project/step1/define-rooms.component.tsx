import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/store.utils";
import { ProjectAreaFloors, ProjectAreas } from "../../../interfaces/project.interface";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Divider } from "primereact/divider";
import { updateCurrentSubStepOne } from "../../../store/feature/project-step.slice";
import { addRoomToForProject, updateRoomSelection } from "../../../store/feature/project-detail.slice";
import { Toast } from "primereact/toast";
import { NotificationTypeEnum } from "../../../enums/notificationType.enum";
import UtilityService from "../../../services/utilit.service";

const DefineRoomsComponent = () => {
  const toast = useRef<Toast>(null);
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const [addEditDialog, setAddEditDialog] = useState<boolean>(false);
  const [areaIndex, setAreaIndex] = useState<{
    buildingAreaIndex: number;
    areaIndex: number;
    floorIndex: number;
  }>({
    buildingAreaIndex: 0,
    areaIndex: 0,
    floorIndex: 0,
  });
  const [dialogState, setDialogState] = useState<string>("");
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const dispatch = useAppDispatch();

  const addEditDialogFooter = (
    <>
      <Button
        label="Add"
        style={{ float: "left" }}
        rounded
        onClick={() => {
          dispatch(addRoomToForProject({
            buildingAreaIndex: areaIndex.buildingAreaIndex,
            areaIndex: areaIndex.areaIndex,
            floorIndex: areaIndex.floorIndex,
            room: {
              name: dialogState,
              isSelected: true,
              functions:[],
            
            }
          }))
          setAddEditDialog(false);
          setDialogState('')
        }}
      />
    </>
  );
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area:ProjectAreas ,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number
  ) => {
    return (
      <div
        style={{ width: "50rem" }}
        key={buildingAreaIndex + "header" + areaIndex + '_' + floorIndex }
      >
        <div className="flex justify-content-between align-content-center">
          <div>
            <div className="text-500 text-sm">
              <span className="text-xl mr-2">{area.description || area.name}</span>
              <img src="Rectangle.png" className="mr-2" alt="" />
              <span>{area.name}</span>
              <span className="mr-1 ml-1">&#8226;</span>
              <span>{buildingAreaName}</span>
            </div>
            <div className="mt-4">
              <span className="text-2xl">{floor.name}</span>
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
    floor: ProjectAreaFloors,
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floorIndex: number
  ) => {
    return (
      <div
        className="flex w-full justify-content-center pl-5 mt-0 pr-5"
        key={buildingAreaIndex + "_" + areaIndex + '_' + floorIndex}
      >
        <div style={{ width: "58rem" }}>
          <Divider className="m-0 mt-4" />
          <div className="mt-2">
            <Accordion activeIndex={0}>
              <AccordionTab
                header="Header I"
                headerTemplate={headerTemplate(
                 
                  buildingAreaName,
                  buildingAreaIndex,
                  area,
                  areaIndex,
                  floor,
                  floorIndex
                )}
              >
                <div className="flex align-items-center flex-wrap">
                  {floor.floorRooms.map((room, roomIndex) => {
                    return (
                      <div
                        key={room.name + roomIndex}
                        className={room.isSelected ? 'inline p-3 font-semibold text-lg m-2 text-primary' : 'inline p-3 font-semibold text-lg m-2'}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "2rem",
                        }}
                      >
                        {room.name}
                        <i onClick={
                          () => {
                            dispatch(
                              updateRoomSelection({
                                buildingAreaIndex,
                                areaIndex,
                                floorIndex,
                                roomIndex,
                                isSelected:!room.isSelected,
                              })
                            )
                          }
                        }
                          className= {room.isSelected? 'pi pi-check ml-4 mr-2 p-2 bg-primary': 'pi pi-check ml-4 mr-2 p-2 text-white'}
                          style={{
                            border:  room.isSelected ? "1px solid #2D74FE" : '1px solid #ddd',
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
                          floorIndex
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
          area.floors.forEach(floor => {
            selected += floor.floorRooms.filter(v => v.isSelected).length;
          })
        })
    })
    if(selected) {
      localStorage.setItem(projectDetailState.projectDetail.id?.toString() || '', JSON.stringify(projectDetailState.projectDetail)); 
      dispatch(updateCurrentSubStepOne(5))

    }else{
      UtilityService.ShowNotification(toast, NotificationTypeEnum.Error , 'Please select at list one Room')
    }
  }
  return (
    <div className="flex justify-content-around mt-3 mb-5">
         <Toast ref={toast} />
      <div>
        <section className="mt-4">
          <div className="m-auto max-w-max text-4xl font-semibold">
          Define rooms within each floor
          </div>
          <p className="m-auto max-w-max text-500 text-lg mt-3">For each selected area, choose the relevant floors from the available options. 
          </p>
        </section>
        {projectDetailState?.projectDetail?.buildingAreas?.map(
          (buildingArea, buildingAreaIndex) => (
            <section key={buildingAreaIndex}>
              {buildingArea.areas.map((area, areaIndex) => 
              <>
                { 
                  area.floors.map((floor, floorIndex) => {
                    return floor.isSelected ? 
                     getSection(
                        floor,
                        buildingArea.name,
                        buildingAreaIndex,
                        area,
                        areaIndex,
                        floorIndex,
                      ) : null
                  })
                }
              </>
         
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
              onClick={() => {
                dispatch(updateCurrentSubStepOne(3))
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
              label="Review Final Structure"
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
export default DefineRoomsComponent;
