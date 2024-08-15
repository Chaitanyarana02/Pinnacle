import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { updateCurrentStep, updateCurrentSubStepOfLastStep, updateCurrentSubStepOne, updateIsStepVisible } from "../../../store/feature/project-step.slice";
import { useNavigate } from "react-router-dom";
import { ProjectStatus } from "../../../enums/project.enum";
import { updateProjectDetails } from "../../../store/feature/project-list.slice";
import { useEffect, useState } from "react";
import { addressInterFace } from "./contract-approvel.component";

const DeliveryConfirmComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const projectState = useAppSelector(state => state.projectDetailState);
  const [address, setAddress] = useState<addressInterFace>({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    try {
        const addr = JSON.parse(projectState.projectDetail.deliveryAddress || '') || {};
        setAddress(addr)
    }catch (err) {
      console.log(err);
      
    }
  }, [])
    return (
        <div className="flex flex-column flex-wrap w-full align-content-center mt-6">
        <div className="text-3xl font-bold flex align-items-center justify-content-center mt-3">
        <img src="/delevery.png" alt="" />
      </div>
        <div className="text-3xl font-bold flex align-items-center justify-content-center mt-3">Your order is in transit</div>
        <div className="text-500 flex align-items-center justify-content-center mt-5">Estimated Delivery:</div>
        <div className="text-lg font-bold flex align-items-center justify-content-center mt-2">14th June 2024</div>
        <div className="text-500 flex align-items-center justify-content-center mt-5">Delivery Address: </div>
        <div className="text-lg font-bold flex align-items-center justify-content-center mt-2">{
          
            address.name ? `${address.zip || ''} ${address.name || ''} ${address.address || ''}  ${address.city || ''} ${address.state || ''}  ${address.country || ''}`  : projectState.projectDetail.address
          }</div>
        <div className="flex align-items-center justify-content-center mt-4">
          {" "}
          <Button
            label="Track Order"
            rounded
            severity="secondary"
            onClick={() => {
              dispatch(updateProjectDetails({
                ...projectState.projectDetail,
                projectStatus: ProjectStatus.delivered
              }))
              dispatch(updateCurrentStep(1));
              dispatch(updateCurrentSubStepOne(1));
              dispatch(updateCurrentSubStepOfLastStep(1));
              dispatch(updateIsStepVisible(true));
              navigate('/dashboard')
            }}
          />
        </div>
      </div>
    );
}

export default DeliveryConfirmComponent