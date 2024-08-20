import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { countyList } from "../../../mock/country-list";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { updateCurrentSubStepOfLastStep } from "../../../store/feature/project-step.slice";
import { updateProjectDetails } from "../../../store/feature/project-list.slice";
import { ProjectStatus } from "../../../enums/project.enum";
export interface addressInterFace {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ContractComponentProps {
  onData: (data: addressInterFace) => void;
}



const ContractComponent:React.FC<ContractComponentProps> = ({onData}) => {
  const [contractSigned, setContractSigned] = useState(false);
  const projectState = useAppSelector((state) => state.projectDetailState);
  const dispatch = useAppDispatch();
  const [addressDialogVisible, setAddressDialogVisible] = useState(false);
  const [addressDialog, setAddressDialog] = useState<addressInterFace>({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  useEffect(() => {
    if (projectState.projectDetail.deliveryAddress) {
      try {
        const parsedAddress = JSON.parse(
          projectState.projectDetail.deliveryAddress
        );
        setAddressDialog(parsedAddress);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  
  const addEditDialogFooter = (
    <>
      <Button
        label="Save & Continue"
        style={{ float: "left" }}
        rounded
        onClick={() => {
          onData(addressDialog);
          dispatch(
            updateProjectDetails({
              ...projectState.projectDetail,
              projectStatus: ProjectStatus.transition,
              deliveryAddress: JSON.stringify(addressDialog),
            })
          );
          dispatch(updateCurrentSubStepOfLastStep(2));
        }}
      />
    </>
  );
  return (
    <>
      <div className="p-5">
        <div className="text-xl font-semibold">Review & Sign Contract</div>
        <div className="text-400 mt-3 text-xs">
          Review the contract details and electronically sign to secure your
          dream smart home.
        </div>
        {!contractSigned ? (
          <div className="mt-4">
            <Button
              label="Review & Sign Contract"
              rounded
              onClick={() => {
                setContractSigned(true);
              }}
            />

            <div className="mt-4">
              <div className="text-400">Want to sign physically?</div>
              <div className="mt-1">
                <Button
                  label="Print Contract"
                  rounded
                  severity="secondary"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-green-600 mt-4">
            Contract Signed Successfully
          </div>
        )}

        <div className="mt-5">
          <div className="text-xl font-semibold">Payment</div>
          {!contractSigned ? (
            <>
              <div className="text-400 text-sm mt-2">
                Contract needs to be signed first
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="text-400 text-sm mt-2">
                  Once payment is received, the package will be prepared and
                  shipped to you.
                </div>
                <Button
                  className="mt-2"
                  label="Add Delivery Address"
                  rounded
                  onClick={() => {
                    setAddressDialogVisible(true);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Dialog
        visible={addressDialogVisible}
        style={{ width: "550px" }}
        header="Delivery Address"
        modal
        className="p-fluid"
        footer={addEditDialogFooter}
        onHide={() => setAddressDialogVisible(false)}
      >
        <div className="text-500 mb-4">
          Enter delivery address where we will be shipping all the functions
        </div>
        <div className="flex justify-content-between">
          <div className="w-full">
            <InputText
              id="Full Name"
              value={addressDialog?.name}
              onChange={(e) => {
                setAddressDialog({
                  ...addressDialog,
                  name: e?.target?.value || "",
                });
              }}
              placeholder="Enter Name"
              required
              autoFocus
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <InputText
            id="Full Address"
            value={addressDialog?.address}
            onChange={(e) => {
              setAddressDialog({
                ...addressDialog,
                address: e?.target?.value || "",
              });
            }}
            placeholder="Full Address"
            required
          />
        </div>
        <div className="flex justify-content-between mt-4">
          <div>
            <InputText
              id="City"
              value={addressDialog?.city}
              onChange={(e) => {
                setAddressDialog({
                  ...addressDialog,
                  city: e?.target?.value || "",
                });
              }}
              placeholder="City"
              required
            />
          </div>
          <div>
            <InputText
              id="State/Province/Region"
              value={addressDialog?.state}
              onChange={(e) => {
                setAddressDialog({
                  ...addressDialog,
                  state: e?.target?.value || "",
                });
              }}
              placeholder="State/Province/Region"
              required
            />
          </div>
        </div>
        <div className="flex justify-content-between mt-4">
          <div>
            <InputText
              id="Zip"
              value={addressDialog?.zip}
              onChange={(e) => {
                setAddressDialog({
                  ...addressDialog,
                  zip: e?.target?.value || "",
                });
              }}
              placeholder="ZIP/Postal Code"
              required
            />
          </div>
          <div className="w-15rem">
            <Dropdown
              value={addressDialog?.country}
              onChange={(e) =>
                setAddressDialog({ ...addressDialog, country: e.value })
              }
              options={countyList}
              optionLabel="name"
              optionValue="code"
              placeholder="Select a Country"
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ContractComponent;
