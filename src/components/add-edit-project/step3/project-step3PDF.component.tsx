import { useAppDispatch, useAppSelector } from "../../../store/store.utils";

import {
  ProjectAreas,
  ProjectAreaFloors,
  ProjectFloorFunction,
} from "../../../interfaces/project.interface";
import { useEffect } from "react";
import { CustomizationProductTypeEnum } from "../../../enums/customizationProduct.enum";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import OptionRendererComponent from "./option-renderer.component";
import { updatePriceValue } from "../../../store/feature/priceValue.slice";
import {
  TableData,
  ProductAllPrice,
  customizationOptionsForTable,
  TableInternalData,
  TableDataTypeEnum,
  CustomizationProductOptions,
} from "./project-step3.component";

const ProjectStep3Pdf = ({
  allProductPrice,
  customizationOptions
}: {
  allProductPrice: ProductAllPrice;
  customizationOptions: customizationOptionsForTable;
}) => {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.userDataSlice);
  const priceCategory = useAppSelector((state) => state.priceCategorySlice);
  const price = useAppSelector((state) => state.priceValueSlice);


  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );

  useEffect(() => {
    let price: number = 0;
    projectDetailState.projectDetail.buildingAreas.forEach((bArea) => {
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
                  )
                );

                let subPrice: number = prodPrice?.price || 0;
                Object.keys(
                  (prodPrice?.optionTypeByValue as unknown as object) || {}
                )?.forEach((key) => {
                  const type = prodPrice?.optionTypeByValue?.[key] || "";
                  if (type === CustomizationProductTypeEnum.SIZE) {
                    const sizes = fun.systemDetails[key]
                      ?.toString()
                      ?.split(",");
                    const size =
                      parseInt(sizes?.[0]) + parseInt(sizes?.[1]) || 1;
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
  }, [projectDetailState]);
  const makeTableData = (products: ProjectFloorFunction[]): TableData => {
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
    console.log(tableData);

    return tableData;
  };
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number,
    roomName: string
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
            <div className="mt-2 flex align-content-center">
              <div className="text-2xl align-content-center border-right-2 pr-2 border-gray-300">
                {floor.name}
              </div>
              <div key={roomName} className="p-2 text-xl align-content-center">
                {roomName}
              </div>
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
        <div>
          <div
            className={!floorIndex ? "mt-2" : "pt-2 border-top-1 border-500"}
          >
            <div className="flex-column align-items-center flex-wrap">
              <div
                className="mt-3 pl-4 mb-4"
                
              >
                {floor.floorRooms.map((room) => {
                  return room.isSelected ? (
                    <>
                      <div className="mt-4 mb-3">
                        {headerTemplate(
                          buildingAreaName,
                          buildingAreaIndex,
                          area,
                          areaIndex,
                          floor,
                          floorIndex,
                          room.name
                        )}
                      </div>
                      <div>
                        <div
                         
                        >
                          {  (() => { 
                            const tableData = makeTableData(room.functions);
                            return Object.keys(tableData).map(
                            (catId) => (
                              <>
                                {tableData[catId]?.length ? (
                                  <DataTable value={tableData[catId]}>
                                    {Object.keys(tableData[catId][0]).map(
                                      (dataKay) => (
                                        <Column
                                          field={dataKay}
                                          header={dataKay}
                                          style={{ width: "20%" }}
                                          body={(data: TableInternalData) => (
                                            <>
                                              {data[dataKay].type ===
                                              TableDataTypeEnum.PRODUCT ? (
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
                                                      room.functions.find(
                                                        (fun) =>
                                                          fun.id ===
                                                          (
                                                            data[dataKay]
                                                              .data as CustomizationProductOptions
                                                          ).productId
                                                      )?.systemDetails as {
                                                        [key: number]:
                                                          | string
                                                          | boolean;
                                                      };
                                                      
                                                    return data2;
                                                  })()}
                                                  dataKey={dataKay}
                                                  customizationOption={
                                                    data[dataKay]
                                                      .data as CustomizationProductOptions
                                                  }
                                                  valueChanged={() => {}}
                                                />
                                              )}
                                            </>
                                          )}
                                        ></Column>
                                      )
                                    )}
                                  </DataTable>
                                ) : null}
                              </>
                            )
                          )})() }
                        </div>
                      </div>
                    </>
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
      <div className="p-4 mt-6">
        <div className="flex justify-content-between mb-6">
          <div></div>

          <div>
            <div className="m-auto max-w-max text-4xl font-semibold">
              Tech details for your system
            </div>
            <p className="m-auto max-w-max text-500 text-lg mt-3">
              Over view of Tech details for your system.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="border-1 border-200 flex">
        <div
          className="border-right-1 border-200"
          style={{
            width: "100%",
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
      </div>
      <div
        className="text-xl w-full flex justify-content-around align-content-center flex-wrap"
        style={{
          height: "40px",
          borderTop: "1px solid #DDD",
          background: "#fff",
        }}
      >
        <div className="flex justify-content-around flex-wrap align-content-center">
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
      </div>
    </>
  );
};

export default ProjectStep3Pdf;
