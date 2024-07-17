import { useAppSelector } from "../../store/store.utils";
import AddEditHeaderComponent from "./common/add-edit-header.comonent";
import ProjectStep1Component from "./step1/project-step1.component";
import ProjectStep2Component from "./step2/project-step2.component";
import ProjectStep3Component from "./step3/project-step3.component";

const AddEditComponent = () => {
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const components: { [key: number]: unknown } = {
    1: (
      <ProjectStep1Component
        currentStep={projectStepState.currentSubStepOfOne}
      />
    ),
    2: <ProjectStep2Component />,
    3: <ProjectStep3Component />,
  };
  return (
    <>
      <AddEditHeaderComponent
        isVisible={projectStepState.isVisible}
        projectName={projectStepState.projectName}
        currentStep={projectStepState.currentStep}
      />
      {components[projectStepState.currentStep]}
    </>
  );
};
export default AddEditComponent;
