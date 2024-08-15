import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { updateCurrentSubStepOfLastStep } from "../../../store/feature/project-step.slice";
import { useState, useEffect } from "react";
import { addressInterFace } from "./contract-approvel.component";

const PaymentConfirmedComponent = () => {
    const dispatch = useAppDispatch();
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
          const addr = JSON.parse(projectState.projectDetail.deliveryAddress || '') || {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
          };
          setAddress(addr)
      }catch (err) {
        console.log(err);
        
      }
    }, [])
  return (
    <div className="flex flex-column flex-wrap w-full align-content-center mt-6">

      <div className="text-3xl font-bold flex align-items-center justify-content-center mt-3">
        <img src="/payment.png" alt="" />
      </div>
      <div className="text-3xl font-bold flex align-items-center justify-content-center mt-3">Payment Completed!</div>
      <div className="text-lg text-800  flex align-items-center justify-content-center mt-3">Your order is now confirmed.</div>
      <div className="text-500 flex align-items-center justify-content-center mt-5">Estimated Delivery:</div>
      <div className="text-lg font-bold flex align-items-center justify-content-center mt-2">14th June 2024</div>
      <div className="text-500 flex align-items-center justify-content-center mt-5">Delivery Address: </div>
      <div className="text-lg font-bold flex align-items-center justify-content-center mt-2">{
          
         address.name ?  `${address.zip || ''} ${address.name || ''} ${address.address || ''}  ${address.city || ''} ${address.state || ''}  ${address.country || ''}` : projectState.projectDetail.address
        }</div>
      <div className="flex align-items-center justify-content-center mt-4">
        <Button
          label="Track Order"
          rounded
          severity="secondary"
          onClick={() => {
            dispatch(updateCurrentSubStepOfLastStep(3))
          }}
        />
      </div>
    </div>
  );
};

export default PaymentConfirmedComponent;
