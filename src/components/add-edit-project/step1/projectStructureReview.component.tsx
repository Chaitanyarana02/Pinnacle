import { Button } from "primereact/button";
import { updateCurrentStep, updateCurrentSubStepOne } from "../../../store/feature/project-step.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { Divider } from "primereact/divider";

const ProjectStructureReviewComponent = () => {
  const dispatch = useAppDispatch();
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  return (
    <div className="flex justify-content-around mt-3 mb-5">
      <div>
        <section className="mt-4">
          <div className="m-auto max-w-max text-4xl font-semibold">
            Project Structure Review
          </div>
        </section>

        <section className="flex w-full justify-content-center mt-7 mb-4" >
          <div
            className=""
            style={{ width: "55rem", backgroundColor: "rgb(247, 247, 247)" , borderRadius: "30px"}}
          >
            <div className="p-7">
              <div className="flex justify-content-between text-xl text-500">
                <b>Selected areas</b>
                <b>Selected floors</b>
                <b>Selected rooms</b>
              </div>

              <div>
                {projectDetailState.projectDetail?.buildingAreas?.map(
                  (buildingArea, buildingAreaIndex) => {
                    return (
                      <>
                        {buildingArea.areas.map(
                          (area) => {
                            return (
                              <>
                                <Divider className="m-0 p-4 " key={'divider' + buildingAreaIndex}/>
                                <div className="flex justify-content-between " key={buildingAreaIndex}>
                                  <div>
                                    <div>
                                      <span className="text-xl font-semibold text-500">
                                        {area.name}
                                      </span>
                                    </div>
                                    <div className="text-500 text-sm">
                                      <span>{area.internalName}</span>
                                      <span className="mr-1 ml-1">&#8226;</span>
                                      <span>{buildingArea.name}</span>
                                    </div>
                                  </div>
                                  <div
                                    className="flex flex-column align-items-start w-full"
                                    style={{ marginLeft: "15rem" }}
                                  >
                                    {area.floors.map((floor) => {
                                      return (
                                        <div className="flex justify-content-between  w-full mt-2">
                                          <div>
                                            <span className="text-xl font-semibold text-500 mb-5">
                                              {floor.name}
                                            </span>
                                          </div>
                                          <div className="w-15rem flex flex-wrap">
                                            {floor.floorRooms.map((room, roomIndex, rooms) => (
                                                <div className= {rooms.length -1 === roomIndex ? "text-xl font-semibold text-500 ml-2 mt-1" : "text-xl font-semibold text-500 ml-2 mt-1 border-right-3 border-400 pr-2"}>
                                                  {room.name}
                                                </div>
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
                      </>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
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
         
          <div>
            <Button
              label="Save & Proceed"
              icon="pi pi-angle-right"
              rounded
              iconPos="right"
              size="large"
              onClick={() => dispatch(updateCurrentStep(2))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStructureReviewComponent;
