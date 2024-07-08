import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import {
  ProjectAreas,
  ProjectAreaFloors,
} from "../../../interfaces/project.interface";
import { updateRoomSelection } from "../../../store/feature/project-detail.slice";
import { useAppSelector } from "../../../store/store.utils";

const ProjectStep2Component = () => {
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number
  ) => {
    return (
      <div
        style={{ width: "50rem" }}
        key={buildingAreaIndex + "header" + areaIndex + "_" + floorIndex}
      >
        <div className="flex justify-content-between align-content-center">
          <div>
            <div className="text-500 text-sm">
              <span className="text-xl mr-2">{area.name}</span>
              <img src="Rectangle.png" className="mr-2" alt="" />
              <span>{area.internalName}</span>
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
        key={buildingAreaIndex + "_" + areaIndex + "_" + floorIndex}
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
                      <div className="w-full">
                        <div className="flex justify-content-between">
                            <div className="text-xl text-1000" draggable  onDragStart={(e) => {
                                   e.dataTransfer.setData('text/plain', 'hii'); // Set the data being dragged
                                   console.log('sas');
                                   
                            }}> 
                              {room.name}
                            </div>
                            <div className="text-primary" >
                                Reset
                            </div>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="p-4 mt-6">
        <div className="flex justify-content-between mb-3">
          <Button
            label="Edit Structure"
            icon="pi pi-angle-left"
            rounded
            severity="secondary"
            size="large"
            onClick={() => {}}
          />
          <div>
            <div className="m-auto max-w-max text-4xl font-semibold">
              Define Functions for each room
            </div>
            <p className="m-auto max-w-max text-500 text-lg mt-3">
              Start by assigning multiple functions needed for your project
              Structure.
            </p>
          </div>
          <Button
            label="Print Sales Brochure"
            icon="pi pi-print"
            rounded
            severity="secondary"
            size="large"
            onClick={() => {}}
          />
        </div>
        <div className="flex justify-content-between">
          <div>
            {projectDetailState?.projectDetail?.buildingAreas?.map(
              (buildingArea, buildingAreaIndex) => (
                <section key={buildingAreaIndex}>
                  {buildingArea.areas.map((area, areaIndex) => (
                    <>
                      {area.floors.map((floor, floorIndex) => {
                        return getSection(
                          floor,
                          buildingArea.name,
                          buildingAreaIndex,
                          area,
                          areaIndex,
                          floorIndex
                        );
                      })}
                    </>
                  ))}
                </section>
              )
            )}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProjectStep2Component;
