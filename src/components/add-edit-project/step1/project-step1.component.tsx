import InfoStep from "./infoStep"
import ProjectStructureComponent from "./project-structure.component"

const ProjectStep1Component = ({currentStep}: {currentStep : number}) => {
    const components: {[key: number]: any} = {
        1: <InfoStep/>,
        2:<ProjectStructureComponent/>
    }
    return (
        <>
            {components[currentStep]}
        </>
    )
}
export default ProjectStep1Component