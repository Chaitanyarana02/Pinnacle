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
  
    const diliveryAddresGet = async () => {
      try {
        const projectId = projectState?.projectDetail?.id;
        if (!projectId) return;
        setTimeout(async () => {
          const diliver_Address = localStorage.getItem(projectId.toString());
          if (diliver_Address) {
            let diliveryAddress;
            try {
              diliveryAddress = JSON.parse(diliver_Address);
            } catch (parseError) {
              console.error('Error parsing delivery address JSON:', parseError);
              return;
            }
    
            if (diliveryAddress && diliveryAddress.deliveryAddress) {
              try {
                const finall_diliveryAddress = JSON.parse(diliveryAddress.deliveryAddress);
                console.log('Final delivery address:', finall_diliveryAddress);
                setAddress(finall_diliveryAddress);
              } catch (parseError) {
                console.error('Error parsing final delivery address JSON:', parseError);
              }
            } else {
              console.error('Delivery address data is missing or invalid.');
            }
          } else {
            console.error('No delivery address found in localStorage.');
          }
        }, 800); 
      } catch (err) {
        console.error('Error fetching or parsing delivery address:', err);
      }
    };
    
    useEffect(() => {
      diliveryAddresGet();
    }, []);
    

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
