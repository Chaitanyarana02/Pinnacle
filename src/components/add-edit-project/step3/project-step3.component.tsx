import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { updateCurrentStep } from "../../../store/feature/project-step.slice";
import { Divider } from "primereact/divider";
import {
  ProjectAreas,
  ProjectAreaFloors,
} from "../../../interfaces/project.interface";
import { useEffect } from "react";
import ProjectService from "../../../services/project.service";

const ProjectStep3Component = () => {
  const dispatch = useAppDispatch();
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  useEffect(() => {
      const productIds: number[] = [];
      projectDetailState.projectDetail?.buildingAreas?.forEach(areas => {
        areas?.areas.forEach(area => {
          area?.floors.forEach(floor => {
            floor?.floorRooms.forEach(room => {
              room.functions.forEach( fun => {
                if(!productIds.includes(fun?.id)) {
                    productIds.push(fun?.id);
                }
              });
            })
          })
        })
      });
      console.log(productIds);
      ProjectService.getProductsByCategoryOptions(productIds).then(res => {
        console.log(res);
        
      })

  }, [])
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number
  ) => {
    return (
      <div key={buildingAreaIndex + "header" + areaIndex + "_" + floorIndex}>
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
            <div className="flex align-items-center flex-wrap">
              {headerTemplate(
                buildingAreaName,
                buildingAreaIndex,
                area,
                areaIndex,
                floor,
                floorIndex
              )}
              <div className="mt-3 pl-4" style={{
                      borderLeft: '1px solid #DDD'
                    }}>
                {floor.floorRooms.map((room, roomIndex) => {
                  return (
                    <div key={room.name + roomIndex} className="text-500 p-4" >
                      {room.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="p-4 mt-6">
        <div className="flex justify-content-between mb-6">
          <div>
            <Button
              label="Edit Functions"
              icon="pi pi-angle-left"
              rounded
              severity="secondary"
              size="large"
              onClick={() => dispatch(updateCurrentStep(2))}
            />
          </div>

          <div>
            <div className="m-auto max-w-max text-4xl font-semibold">
              Define Tech details for your system
            </div>
            <p className="m-auto max-w-max text-500 text-lg mt-3">
              Start by assigning multiple functions needed for your project
              Structure.
            </p>
          </div>
          <div>
            <Button
              label="Print Sales Brochure"
              icon="pi pi-print"
              rounded
              severity="secondary"
              size="large"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="border-1 border-200 flex">
        <div
          style={{
            width: "25%",
          }}
        >
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
        <div
          style={{
            width: "70%",
          }}
        >
          hi2
        </div>
      </div>
    </>
  );
};

export default ProjectStep3Component;
