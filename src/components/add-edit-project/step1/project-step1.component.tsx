import DefineFloorsComponent from "./define-floors.component";
import DefineRoomsComponent from "./define-rooms.component";
import InfoStep from "./infoStep";
import BuildingAreasComponent from "./project-structure.component";
import ProjectStructureReviewComponent from "./projectStructureReview.component";

const ProjectStep1Component = ({ currentStep }: { currentStep: number }) => {
  const components: { [key: number]: unknown } = {
    1: <InfoStep />,
    2: <BuildingAreasComponent />,
    3: <DefineFloorsComponent />,
    4: <DefineRoomsComponent/>,
    5:<ProjectStructureReviewComponent/>
  };
  return <>{components[currentStep]}</>;
};
export default ProjectStep1Component;
