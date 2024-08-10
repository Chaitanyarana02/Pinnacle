import { ReactNode } from "react";
import { useAppSelector } from "../../../store/store.utils";
import ContractComponent from "./contract-approvel.component";
import PaymentConfirmedComponent from "./payment-confirmed";
import DeliveryConfirmComponent from "./delevery-confirm.component";

const PaymentStepComponent = ({ currentStep }: { currentStep: number }) => {
  const projectDetail = useAppSelector((state) => state.projectDetailState);
  const stepState = useAppSelector((state) => state.projectStepState);
  const price = useAppSelector(state => state.priceValueSlice);
  const userData = useAppSelector(state => state.userDataSlice)
  const components: { [key: number]: ReactNode } = {
    1: <ContractComponent />,
    2: <PaymentConfirmedComponent/>,
    3: <DeliveryConfirmComponent/>
  };
  const getSuccessIcon = (
    name: string,
    step: number,
    lastStepSubStep?: number
  ) => {
    let icon = <></>;
    if ((stepState.currentStep > step && !lastStepSubStep) || (lastStepSubStep && (stepState.currentSubStepOfLastStep || 0) > lastStepSubStep)) {
      icon = (
        <>
          <span className="bg-green-600 border-circle p-2 flex align-items-center justify-content-center">
            <i
              className="pi pi-check text-white"
              style={{ fontSize: "0.6rem" }}
            ></i>
          </span>
        </>
      );
    } else if (
      stepState.currentStep === step &&
      stepState.currentSubStepOfLastStep === lastStepSubStep
    ) {
      icon = (
        <>
          <span className="bg-yellow-400 border-circle p-2 flex align-items-center justify-content-center">
            <i
              className="pi pi-clock text-white"
              style={{ fontSize: "0.6rem" }}
            ></i>
          </span>
        </>
      );
    } else {
      icon = (
        <>
          <span className="bg-gray-400 border-circle p-2 flex align-items-center justify-content-center">
            <i
              className="pi pi-clock text-white"
              style={{ fontSize: "0.6rem" }}
            ></i>
          </span>
        </>
      );
    }
    return (
      <div className="flex align-content-center mt-2">
        <div className="mr-3 align-content-center">{icon}</div>
        <div className="align-content-center font-semibold text-800">
          {name}
        </div>
      </div>
    );
  };
  //   return <>{components[currentStep]}</>;
  return (
    <>
      <div className="mt-3">
        <div className="flex justify-content-around">
          <div className="w-29rem flex flex-column">
            <div className="text-3xl font-semibold flex justify-content-center text-800">
              Congratulations!
            </div>
            <div className="flex justify-content-center mt-3 text-700">
              Project complete! Review contract & pay to get your smart home
              shipped. Track delivery & receive a rebate upon arrival
            </div>
            <div className="mt-4 flex justify-content-center">
              <div className="border-bottom-1 border-black-alpha-20 w-10rem "></div>
            </div>
          </div>
        </div>
        <div className="flex justify-content-center flex-wrap mt-5">
          <div className="bg-gray-100 w-25rem p-4 pl-5 border-round-3xl">
            <div className="border-bottom-1 border-black-alpha-20 pb-3 text-xl font-semibold text-500">
              Project Summary
            </div>
            <div className="mt-4 border-bottom-1 border-black-alpha-20 pb-4">
              <div className="font-bold text-xl">
                {projectDetail.projectDetail.name}
              </div>
              <div className="mt-3 text-700">
                <span>
                  {projectDetail.projectDetail.projectType.toLocaleLowerCase()}
                </span>
                <span> • </span>
                <span>
                  {projectDetail.projectDetail.projectResidentType.toLocaleLowerCase()}
                </span>
                <span> • </span>
                <span>
                  {projectDetail.projectDetail.projectScope.toLocaleLowerCase()}
                </span>
              </div>
              <div className="mt-3">
                <span className="text-500 font-semibold">Address: &nbsp;</span>
                <span>{projectDetail.projectDetail.address}</span>
              </div>
              <div className="mt-4">
                {getSuccessIcon("Project Structure", 1)}
                {getSuccessIcon("Project Functions", 2)}
                {getSuccessIcon("Project Tech Details", 3)}
                {getSuccessIcon("Contract Approval", 4, 1)}
                {getSuccessIcon("Final Payment", 4, 2)}
                {getSuccessIcon("Delivery", 4, 3)}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-content-between">
              <div>
                <span className="font-semibold text-600 text-xl">
                  Final Price:
                </span>
                <span className="font-semibold text-xl"> £{price.value}</span>
              </div>
              <div>
                <span className="font-semibold text-600 text-xl">Rebate:</span>
                <span className="font-semibold text-xl"> £{userData.userData.rebateRate}</span>
              </div>
            </div>

            <div className="mt-6 text-primary font-semibold">
              <div className="mb-3">
                <i className="pi pi-cloud-download mr-2"></i>
                Download Tech Specification Sheet
              </div>
              <div>
              <i className="pi pi-cloud-download mr-2"></i>

                Download Sales Brochure
                </div>
            </div>
          </div>
          <div className="w-25rem">
            {components[currentStep]}

          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentStepComponent;
