import { useAppSelector } from "../../store/store.utils"
import AddEditHeaderComponent from "./common/add-edit-header.comonent"
import ProjectStep1Component from "./step1/project-step1.component";

const AddEditComoponent = () => {
    const projectStepState = useAppSelector((state) => state.projectStepState );
    const components: {[key: number]: any} = {
        1: <ProjectStep1Component currentStep={projectStepState.currentSubStepOfOne}/>
    }
    return <>
        <AddEditHeaderComponent isVisible={projectStepState.isVisible} projectName={projectStepState.projectName} currentStep={projectStepState.currentStep}/>
        {
            components[projectStepState.currentStep]
        }
    </>
}
export default AddEditComoponent