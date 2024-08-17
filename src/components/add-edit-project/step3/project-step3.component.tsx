import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import {
  updateCurrentStep,
  updateCurrentSubStepOfLastStep,
  updateIsStepVisible,
} from "../../../store/feature/project-step.slice";
import {
  ProjectAreas,
  ProjectAreaFloors,
  ProjectFloorFunction,
  ProjectDetail,
} from "../../../interfaces/project.interface";
import { useEffect, useRef, useState } from "react";
import ProjectService from "../../../services/project.service";
import { CustomizationProductTypeEnum } from "../../../enums/customizationProduct.enum";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import OptionRendererComponent from "./option-renderer.component";
import { updateDefaultFunctionOptions, updateFunctionOptions } from "../../../store/feature/project-detail.slice";
import { updateProjectDetails } from "../../../store/feature/project-list.slice";
import { Toast } from "primereact/toast";
import { updatePriceValue } from "../../../store/feature/priceValue.slice";
export interface CustomizationProductOptions {
  id: number;
  productCategoryId: number;
  customizationOptionId: number;
  options: Array<string>;
  customizationOption: string;
  type: CustomizationProductTypeEnum;
  productId?: number;
}
export interface CustomizationOptionByCategory {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  customizationOptions: CustomizationProductOptions[];
}
export interface customizationOptionsForTable {
  [id: string]: {
    products: {
      id: number;
      name: string;
      categoryId: number;
    }[];
    categoryId: number;
    category: string;
    customizationOptions: CustomizationProductOptions[];
  };
}
export interface TableData {
  [id: string]: TableInternalData[];
}
export interface TableInternalData {
  [name: string]: {
    type: TableDataTypeEnum;
    data: CustomizationProductOptions | { name: string; id: number };
  };
}

export enum TableDataTypeEnum {
  PRODUCT = "Product",
  CUSTOMIZATION_OPTION = "CustomizationOption",
}

export interface ProductAllPrice {
  [id: number]: {
    optionsMetaById: { [key: number]: string | boolean };
    optionMetaByValue: { [key: string]: string | boolean };
    optionTypeByValue: { [key: string]: string | boolean };
    optionTypeById: { [key: string]: string | boolean };
    optionsType: { [key: number]: string };
    price: number;
  }[];
}
const ProjectStep3Component = () => {
  const toast = useRef<Toast>(null);
  const dispatch = useAppDispatch();
  const [selectedRoom, setSelectedRoom] = useState<{
    buildingAreaIndex: number;
    areaIndex: number;
    floorIndex: number;
    roomIndex: number;
    functions: ProjectFloorFunction[];
  }>({
    buildingAreaIndex: 0,
    areaIndex: 0,
    floorIndex: 0,
    roomIndex: 0,
    functions: [],
  });
  const [tableData, setTableData] = useState<TableData>({});
  const userData = useAppSelector((state) => state.userDataSlice);
  const [allProductPrice, setAllProductPrice] = useState<ProductAllPrice>([]);
  const priceCategory = useAppSelector((state) => state.priceCategorySlice);
  const price = useAppSelector((state) => state.priceValueSlice);
  const [customizationOptions, setCustomizationOptions] =
    useState<customizationOptionsForTable>({});

  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
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
                    findingProduct[key] = 1;
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
                console.log(prodPrice , fun.id , fun.name , fun , findingProduct);
                
                Object.keys(
                  (prodPrice?.optionTypeByValue as unknown as object) || {}
                )?.forEach((key) => {
                  const type = prodPrice?.optionTypeByValue?.[key] || "";
                  if (type === CustomizationProductTypeEnum.SIZE) {
                    const sizes = fun.systemDetails[key]?.toString()?.split(",");
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
    updatePrice(projectDetailState.projectDetail)
  }, [projectDetailState, allProductPrice]);

  useEffect(() => {
    let isSelectedRoomSet = false;
    let selectedRoomVar: {
      buildingAreaIndex: number;
      areaIndex: number;
      floorIndex: number;
      roomIndex: number;
      functions: ProjectFloorFunction[];
    } = {
      buildingAreaIndex: 0,
      areaIndex: 0,
      floorIndex: 0,
      roomIndex: 0,
      functions: [],
    };
    const productIds: number[] = [];
    projectDetailState.projectDetail?.buildingAreas?.forEach(
      (areas, buildingAreaIndex) => {
        areas?.areas.forEach((area, areaIndex) => {
          area?.floors.forEach((floor, floorIndex) => {
            floor?.floorRooms.forEach((room, roomIndex) => {
              if (
                room.isSelected &&
                room.functions.length > 0 &&
                !isSelectedRoomSet
              ) {
                selectedRoomVar = {
                  buildingAreaIndex,
                  areaIndex,
                  floorIndex,
                  roomIndex,
                  functions: room.functions,
                };
                isSelectedRoomSet = true;
              }
              room.functions.forEach((fun) => {
                if (!productIds.includes(fun?.id)) {
                  productIds.push(fun?.id);
                }
              });
            });
          });
        });
      }
    );
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
        dispatch(updateDefaultFunctionOptions(data))
        // updatePrice(projectDetailState.projectDetail)

      });
      setSelectedRoom(selectedRoomVar);
      makeTableData(selectedRoomVar.functions , customizationOptions);
    });
  }, []);


  const makeTableData = (products: ProjectFloorFunction[] , customizationOptions: customizationOptionsForTable) => {
    const tableData: TableData = {};
    Object.keys(customizationOptions).forEach((catId) => {
      tableData[catId] = [];
      customizationOptions[catId].products.forEach((product) => {
        const index = products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          const data: TableInternalData = {};
          data[customizationOptions[catId].category] = {
            type: TableDataTypeEnum.PRODUCT,
            data: {
              id: product.id,
              name: product.name,
            },
          };
          customizationOptions[catId].customizationOptions.forEach((option) => {
            data[option.customizationOption] = {
              type: TableDataTypeEnum.CUSTOMIZATION_OPTION,
              data: { ...option, productId: product.id },
            };
          });
          tableData[catId].push(data);
        }
      });
    });

    setTableData(tableData);
  };
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number
  ) => {
    return (
      <div key={buildingAreaIndex + "header" + areaIndex + "_" + floorIndex}>
        <div className="flex justify-content-between align-content-center">
          <div>
            <div className="text-500 text-sm">
              <span className="text-xl mr-2">
                {area.description || area.name}
              </span>
              <img src="Rectangle.png" className="mr-2" alt="" />
              <span>{area.name}</span>
              <span className="mr-1 ml-1">&#8226;</span>
              <span>{buildingAreaName}</span>
            </div>
            <div className="mt-4">
              <span className="text-2xl">{floor.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const getSection = (
    floor: ProjectAreaFloors,
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floorIndex: number
  ) => {
    return (
      <div
        className="flex w-full justify-content-center pl-5 mt-0 pr-5"
        key={buildingAreaIndex + "_" + areaIndex + "_" + floorIndex}
      >
        <div style={{ width: "47rem" }}>
          <div
            className={!floorIndex ? "mt-2" : "pt-2 border-top-1 border-200"}
          >
            <div className="flex-column align-items-center flex-wrap">
              {headerTemplate(
                buildingAreaName,
                buildingAreaIndex,
                area,
                areaIndex,
                floor,
                floorIndex
              )}
              <div
                className="mt-3 pl-4 mb-4"
                style={{
                  borderLeft: "1px solid #DDD",
                }}
              >
                {floor.floorRooms.map((room, roomIndex) => {
                  return room.isSelected ? (
                    <div
                      key={room.name + roomIndex}
                      style={
                        selectedRoom?.areaIndex === areaIndex &&
                        selectedRoom.buildingAreaIndex === buildingAreaIndex &&
                        selectedRoom.floorIndex === floorIndex &&
                        selectedRoom.roomIndex === roomIndex
                          ? {
                              borderBottom: "1px solid #DDD",
                              padding: "1.2rem",
                              color: "#2D74FE !important",
                              borderRadius: "1rem",
                              backgroundColor: "#E9F1FE",
                              fontWeight: "600",
                              cursor:'pointer'
                            }
                          : {
                              padding: "1.2rem",
                              cursor:'pointer'
                            }
                      }
                      onClick={() => {
                        setSelectedRoom({
                          buildingAreaIndex,
                          areaIndex,
                          floorIndex,
                          roomIndex,
                          functions: room.functions,
                        });
                        makeTableData(room.functions, customizationOptions);
                      }}
                    >
                      {room.name}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="p-4 mt-6">
        <div className="flex justify-content-between mb-6">
          <div>
            <Button
              label="Edit Functions"
              icon="pi pi-angle-left"
              rounded
              severity="secondary"
              size="large"
              onClick={() => dispatch(updateCurrentStep(2))}
            />
          </div>

          <div>
            <div className="m-auto max-w-max text-4xl font-semibold">
              Define Tech details for your system
            </div>
            <p className="m-auto max-w-max text-500 text-lg mt-3">
              Start by assigning multiple functions needed for your project
              Structure.
            </p>
          </div>
          <div>
            <Button
              label="Print Sales Brochure"
              icon="pi pi-print"
              rounded
              severity="secondary"
              size="large"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="border-1 border-200 flex">
        <div
          className="border-right-1 border-200"
          style={{
            width: "25%",
          }}
        >
          {projectDetailState?.projectDetail?.buildingAreas?.map(
            (buildingArea, buildingAreaIndex) => (
              <section key={buildingAreaIndex}>
                {buildingArea.areas.map((area, areaIndex) => (
                  <>
                    {area.floors.map((floor, floorIndex) => {
                      return floor.isSelected &&
                        floor.floorRooms.length &&
                        floor.floorRooms.filter((v) => v.isSelected).length
                        ? getSection(
                            floor,
                            buildingArea.name,
                            buildingAreaIndex,
                            area,
                            areaIndex,
                            floorIndex
                          )
                        : null;
                    })}
                  </>
                ))}
              </section>
            )
          )}
        </div>
        <div
          style={{
            width: "70%",
          }}
        >
          {Object.keys(tableData).map((catId) => (
            <>
              {tableData[catId].length ? (
                <DataTable value={tableData[catId]}>
                  {Object.keys(tableData[catId][0]).map((dataKay) => (
                    <Column
                      field={dataKay}
                      header={dataKay}
                      style={{ width: "20%" }}
                      body={(data: TableInternalData) => (
                        <>
                          {data[dataKay].type === TableDataTypeEnum.PRODUCT ? (
                            <>
                              {
                                (
                                  data[dataKay].data as {
                                    name: string;
                                  }
                                ).name
                              }
                            </>
                          ) : (
                            // this line creates options
                            <OptionRendererComponent
                              value={(() => {
                                const data2 =
                                  projectDetailState.projectDetail.buildingAreas[
                                    selectedRoom.buildingAreaIndex
                                  ].areas[selectedRoom.areaIndex].floors[
                                    selectedRoom.floorIndex
                                  ].floorRooms[
                                    selectedRoom.roomIndex
                                  ].functions.find(
                                    (fun) =>
                                      fun.id ===
                                      (
                                        data[dataKay]
                                          .data as CustomizationProductOptions
                                      ).productId
                                  )?.systemDetails as {
                                    [key: number]: string | boolean;
                                  };
                                  
                                return data2;
                              })()}
                              dataKey={dataKay}
                              customizationOption={
                                data[dataKay]
                                  .data as CustomizationProductOptions
                              }
                              valueChanged={(value) => {

                                dispatch(
                                  updateFunctionOptions({
                                    buildingAreaIndex:
                                      selectedRoom.buildingAreaIndex,
                                    areaIndex: selectedRoom.areaIndex,
                                    floorIndex: selectedRoom.floorIndex,
                                    roomIndex: selectedRoom.roomIndex,
                                    functionIndex:
                                      projectDetailState.projectDetail.buildingAreas[
                                        selectedRoom.buildingAreaIndex
                                      ]?.areas[selectedRoom.areaIndex]?.floors[
                                        selectedRoom.floorIndex
                                      ]?.floorRooms[
                                        selectedRoom.roomIndex
                                      ]?.functions.findIndex(
                                        (fun) =>
                                          fun.id ===
                                          (
                                            data[dataKay]
                                              .data as CustomizationProductOptions
                                          ).productId
                                      ),
                                    key: dataKay,
                                    value: value as string | boolean,
                                  })
                                );
                              }}
                            />
                          )}
                        </>
                      )}
                    ></Column>
                  ))}
                </DataTable>
              ) : null}
            </>
          ))}
        </div>
      </div>
      <div
        className="w-full flex justify-content-between align-content-center flex-wrap sticky bottom-0"
        style={{
          height: "40px",
          borderTop: "1px solid #DDD",
          background: "#fff",
        }}
      >
        <div className="flex justify-content-between flex-wrap align-content-center">
          <div>
            <div className="pl-2">
              <span>
                Final Price:{" "}
                <span className="font-semibold">£{price.value}</span>
              </span>
              <span className="ml-3">
                Rebate:{" "}
                <span className="font-semibold">
                  £{userData.userData.rebateRate}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="bg-primary align-content-center pl-2 pr-2 cursor-pointer"
          style={{
            height: "40px",
            borderTop: "1px solid #DDD",
          }}
          onClick={() => {
            dispatch(
              updateProjectDetails(projectDetailState.projectDetail)
            ).then(() => {
              localStorage.setItem(
                projectDetailState.projectDetail.id?.toString() || "",
                JSON.stringify(projectDetailState.projectDetail)
              );
              dispatch(updateIsStepVisible(false));
              dispatch(updateCurrentStep(4));
              dispatch(updateCurrentSubStepOfLastStep(1));
            });
          }}
        >
          Confirm & Proceed to Order <i className="pi pi-angle-right"></i>
        </div>
      </div>
    </>
  );
};

export default ProjectStep3Component;
