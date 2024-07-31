import { Button } from "primereact/button";
import { useAppDispatch } from "../../../store/store.utils";
import { updateCurrentSubStepOfLastStep } from "../../../store/feature/project-step.slice";

const PaymentConfirmedComponent = () => {
    const dispatch = useAppDispatch();
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
      <div className="text-lg font-bold flex align-items-center justify-content-center mt-2">39547 Kemmer Overpass Suite 971</div>
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
