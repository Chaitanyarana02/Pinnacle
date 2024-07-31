import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store.utils";
import AddEditHeaderComponent from "./common/add-edit-header.comonent";
import ProjectStep1Component from "./step1/project-step1.component";
import ProjectStep2Component from "./step2/project-step2.component";
import ProjectStep3Component from "./step3/project-step3.component";
import { useEffect } from "react";
import Payment from "./step4/payment.component";
import PaymentStepComponent from "./step4/payment-step.component";

const AddEditComponent = () => {
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if(id && !projectDetailState.projectDetail.id) {
      navigate('/dashboard');
      return;
    }
  },[])
  const projectStepState = useAppSelector((state) => state.projectStepState);
  const components: { [key: number]: unknown } = {
    1: (
      <ProjectStep1Component
        currentStep={projectStepState.currentSubStepOfOne}
      />
    ),
    2: <ProjectStep2Component />,
    3: <ProjectStep3Component />,
    4: <PaymentStepComponent  currentStep={projectStepState.currentSubStepOfLastStep || 1}></PaymentStepComponent>
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
