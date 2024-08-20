import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import ContractComponent from "./contract-approvel.component";
import PaymentConfirmedComponent from "./payment-confirmed";
import DeliveryConfirmComponent from "./delevery-confirm.component";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ProjectStep3Pdf from "../step3/project-step3PDF.component";
import ProjectService from "../../../services/project.service";
import {
  CustomizationOptionByCategory,
  ProductAllPrice,
  customizationOptionsForTable,
} from "../step3/project-step3.component";
 interface addressInterFace {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
import { CustomizationProductTypeEnum } from "../../../enums/customizationProduct.enum";
import { ProjectDetail } from "../../../interfaces/project.interface";
import { updatePriceValue } from "../../../store/feature/priceValue.slice";
const PaymentStepComponent = ({ currentStep }: { currentStep: number }) => {
  const projectDetail = useAppSelector((state) => state.projectDetailState);
  const stepState = useAppSelector((state) => state.projectStepState);
  const price = useAppSelector((state) => state.priceValueSlice);
  const userData = useAppSelector((state) => state.userDataSlice);


  const [ , setDeliveryAddress] = useState<addressInterFace>();

  const getClaintAddress =  (data: addressInterFace) => {
    setDeliveryAddress(data);
  }

  const components: { [key: number]: ReactNode } = {
    1: <ContractComponent  onData={getClaintAddress} />,
    2: <PaymentConfirmedComponent />,
    3: <DeliveryConfirmComponent />,
  };

  const dispatch = useAppDispatch();
  const printPdf = () => {


    try{
      (document.getElementById("pdf-div") as HTMLElement).style.display = "block";

    }catch (e) {
        console.log(e);
        
    }
    const element = document.getElementById("pdf-div") as HTMLElement;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295; // A4 in nm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("document.pdf");
      try{
        (document.getElementById("pdf-div") as HTMLElement).style.display = "none";
  
      }catch (e) {
        console.log(e);
        
      } 
    });
  };
  const getSuccessIcon = (
    name: string,
    step: number,
    lastStepSubStep?: number
  ) => {
    let icon = <></>;
    if (
      (stepState.currentStep > step && !lastStepSubStep) ||
      (lastStepSubStep &&
        (stepState.currentSubStepOfLastStep || 0) > lastStepSubStep)
    ) {
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
  const [allProductPrice, setAllProductPrice] = useState<ProductAllPrice>([]);
  const [customizationOptions, setCustomizationOptions] =
    useState<customizationOptionsForTable>({});
  useEffect(() => {
    const productIds: number[] = [];
    projectDetail.projectDetail?.buildingAreas?.forEach((areas) => {
      areas?.areas.forEach((area) => {
        area?.floors.forEach((floor) => {
          floor?.floorRooms.forEach((room) => {
            room.functions.forEach((fun) => {
              if (!productIds.includes(fun?.id)) {
                productIds.push(fun?.id);
              }
            });
          });
        });
      });
    });
    ProjectService.getProductsByCategoryOptions(productIds).then((res) => {
      const data: CustomizationOptionByCategory[] = res.data.data;
      const customizationOptions: customizationOptionsForTable = {};
      data.forEach((option) => {
        if (customizationOptions[option.categoryId]) {
          customizationOptions[option.categoryId].products.push({
            id: option.id,
            name: option.name,
            categoryId: option.categoryId,
          });
        } else {
          customizationOptions[option.categoryId] = {
            products: [
              {
                id: option.id,
                name: option.name,
                categoryId: option.categoryId,
              },
            ],
            categoryId: option.categoryId,
            category: option.category,
            customizationOptions: option.customizationOptions,
          };
        }
      });
      setCustomizationOptions(customizationOptions);

      ProjectService.getAllProductCustomizationPrice(productIds).then((res) => {
        const data: ProductAllPrice = res?.data?.data || [];
        setAllProductPrice(data);
      });
      // setSelectedRoom({...})
    });
  }, []);
  const priceCategory = useAppSelector((state) => state.priceCategorySlice);
  const updatePrice =  (projectDetail: ProjectDetail) => {
    let price: number = 0;
    projectDetail.buildingAreas.forEach((bArea) => {
      bArea.areas.forEach((area) => {
        area.floors.forEach((floor) => {
          floor.floorRooms.forEach((room) => {
            room.functions.forEach((fun) => {
              const prod = allProductPrice[fun.id];

              if (prod && Object.values(fun.systemDetails || {}).length) {
                const catType = prod[0].optionTypeByValue;
                const findingProduct: {
                  [key: string]: string | number | boolean;
                } = {};
                Object.keys(fun.systemDetails || {}).forEach((key) => {
                  if (catType[key] === CustomizationProductTypeEnum.SIZE) {
                    findingProduct[key] = '1,1';
                  } else if (
                    catType[key] === CustomizationProductTypeEnum.QUANTITY
                  ) {
                    findingProduct[key] = 1;
                  } else {
                    findingProduct[key] = fun.systemDetails[key];
                  }
                });

                const prodPrice = prod.find((cat) =>
                  Object.keys(cat?.optionMetaByValue || {}).map(
                    (key) =>
                      cat?.optionMetaByValue?.[key] === findingProduct?.[key]
                  ).filter(v => v)?.length === Object.keys(cat?.optionMetaByValue || {})?.length
                );

                let subPrice: number = prodPrice?.price || 0;
                // console.log(prodPrice , fun.id , fun.name , fun , findingProduct);
                
                Object.keys(
                  (prodPrice?.optionTypeByValue as unknown as object) || {}
                )?.forEach((key) => {
                  const type = prodPrice?.optionTypeByValue?.[key] || "";
                  if (type === CustomizationProductTypeEnum.SIZE) {
                    const sizes = fun.systemDetails[key]
                      ?.toString()
                      ?.split(",");
                    const size =
                      parseInt(sizes?.[0]) * parseInt(sizes?.[1]) || 1;
                    subPrice = size * subPrice;
                  }
                  if (type === CustomizationProductTypeEnum.QUANTITY) {
                    subPrice =
                      (parseInt(fun.systemDetails[key] as string) || 0) *
                      subPrice;
                  }
                });
                price += subPrice * fun.count;
              }
            });
          });
        });
      });
    });

    dispatch(updatePriceValue(price + price * (priceCategory.value / 100)));
  }

  useEffect(() => {
    updatePrice(projectDetail.projectDetail)
  }, [projectDetail, allProductPrice]);

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
                <span className="font-semibold text-xl">
                  {" "}
                  £{(price.value * (userData?.userData?.rebateRate || 0) / 100).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 text-primary font-semibold">
              <div
                className="mb-3 cursor-pointer flex"
                onClick={() => {
                  printPdf();
                }}
              >
                <img src="/download-doc.svg" alt="" />
                <div className="align-content-center">
                  &nbsp; Download Tech Specification Sheet
                </div>
              </div>
              <div className="cursor-pointer flex">
                <img src="/download-doc.svg" alt="" />
                <div className="align-content-center">
                  &nbsp; Download Sales Brochure
                </div>
              </div>
            </div>
          </div>
          <div className="w-25rem">{components[currentStep]}</div>
        </div>
      </div>

      <div style={{
        width: '100%',
        display: 'none'
      }}
      id='pdf-div'>
        <ProjectStep3Pdf
          allProductPrice={allProductPrice}
          customizationOptions={customizationOptions}
        />
      </div>
    </>
  );
};
export default PaymentStepComponent;
