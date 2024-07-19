import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import {
  ProjectAreas,
  ProjectAreaFloors,
  RoomFunctions,
  DefaultProduct,
} from "../../../interfaces/project.interface";
import {
  addFunctionToRoom,
  updateRoomSelection,
} from "../../../store/feature/project-detail.slice";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./drag-item.component";
import DropZone from "./drop-zone.component";
import { updateCurrentStep } from "../../../store/feature/project-step.slice";
import { RadioButton } from "primereact/radiobutton";
import { PriceCategoryEnum } from "../../../enums/price-category.enum";
import { useEffect, useState } from "react";
import ProjectService from "../../../services/project.service";

const ProjectStep2Component = () => {
  const projectDetailState = useAppSelector(
    (state) => state.projectDetailState
  );
  const [priceCategory, setPriceCategory] = useState<number>(
    PriceCategoryEnum.BUDGET
  );
  const [products, setProducts] = useState<RoomFunctions[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
      ProjectService.getProductsCategoryWise().then((res) => {
        const data = res.data.data
        const prod: RoomFunctions[] = []
        Object.keys(data).forEach( cat => {
          if(data[cat].length) {
            prod.push({
              categoryName: cat,
              products: data[cat].map((p: {id: number, name: string, min_price: number , max_price: number }) => ({
                name: p.name,
                minPrice: p.min_price,
                maxPrice: p.max_price,
                id: p.id,
              }))
            })
          }
  
        });

        setProducts(prod);
        
      })
  }, [])
  // const products: RoomFunctions[] = [
  //   {
  //     categoryName: "Light",
  //     products: [
  //       { name: "LED Light", minPrice: 50, maxPrice: 100, id: 1 },
  //       { name: "CFL Light", minPrice: 75, maxPrice: 150, id: 2 },
  //       {
  //         name: "LED Ceiling Light",
  //         minPrice: 100,
  //         maxPrice: 200,
  //         id: 3,
  //       },
  //     ],
  //   },
  //   {
  //     categoryName: "Socket",
  //     products: [
  //       { name: "LED Socket", minPrice: 50, maxPrice: 100, id: 4 },
  //       { name: "Smart Socket", minPrice: 75, maxPrice: 150, id: 5},
  //       {
  //         name: "LED Smart Socket",
  //         minPrice: 100,
  //         maxPrice: 200,
  //         id: 6,
  //       },
  //     ],
  //   },
  //   {
  //     categoryName: "Sensors",
  //     products: [
  //       {
  //         name: "Temperature Sensor",
  //         minPrice: 50,
  //         maxPrice: 100,
  //         id: 7,
  //       },
  //       {
  //         name: "Humidity Sensor",
  //         minPrice: 75,
  //         maxPrice: 150,
  //         id: 8,
  //       },
  //       { name: "Light Sensor", minPrice: 100, maxPrice: 200, id: 9, count: 1 },
  //     ],
  //   },
  //   {
  //     categoryName: "Shades",
  //     products: [
  //       { name: "LED Shade", minPrice: 50, maxPrice: 100, id: 10, count: 1 },
  //       { name: "Smart Shade", minPrice: 75, maxPrice: 150, id: 11, count: 1 },
  //       {
  //         name: "LED Smart Shade",
  //         minPrice: 100,
  //         maxPrice: 200,
  //         id: 12,
  //       },
  //     ],
  //   },
  // ];
  const headerTemplate = (
    buildingAreaName: string,
    buildingAreaIndex: number,
    area: ProjectAreas,
    areaIndex: number,
    floor: ProjectAreaFloors,
    floorIndex: number
  ) => {
    return (
      <div
        style={{ width: "50rem" }}
        key={buildingAreaIndex + "header" + areaIndex + "_" + floorIndex}
      >
        <div className="flex justify-content-between align-content-center">
          <div>
            <div className="text-500 text-sm">
              <span className="text-xl mr-2">{area.name}</span>
              <img src="Rectangle.png" className="mr-2" alt="" />
              <span>{area.internalName}</span>
              <span className="mr-1 ml-1">&#8226;</span>
              <span>{buildingAreaName}</span>
            </div>
            <div className="mt-4">
              <span className="text-2xl">{floor.name}</span>
            </div>
          </div>

          <span className="">
            <i
              className="pi pi-chevron-down border-circle surface-200 p-3"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </span>
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
        className="flex w-full justify-content-between pl-5 mt-0 pr-5"
        key={buildingAreaIndex + "_" + areaIndex + "_" + floorIndex}
      >
        <div style={{ width: "58rem" }}>
          <Divider className="m-0 mt-4" />
          <div className="mt-2">
            <Accordion activeIndex={0}>
              <AccordionTab
                header="Header I"
                headerTemplate={headerTemplate(
                  buildingAreaName,
                  buildingAreaIndex,
                  area,
                  areaIndex,
                  floor,
                  floorIndex
                )}
              >
                <div className="flex align-items-center flex-wrap">
                  {floor.floorRooms.map((room, roomIndex) => {
                    return (
                      <div className="w-full">
                        <div className="flex justify-content-between mt-4">
                          <div className="text-xl text-1000">{room.name}</div>
                          <div className="text-primary">Reset</div>
                        </div>
                        <DropZone
                          room={room}
                          products={products}
                          functions={room.functions}
                          onDrop={(item: DefaultProduct) => {
                            console.log(item);
                            dispatch(
                              addFunctionToRoom({
                                buildingAreaIndex,
                                areaIndex,
                                floorIndex,
                                roomIndex,
                                value: {
                                  name: item.name,
                                  count: 1,
                                  id: item.id,
                                },
                              })
                            );
                          }}
                        ></DropZone>
                      </div>
                    );
                  })}
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 mt-6">
        <div className="flex justify-content-between mb-6">
          <div>
            <Button
              label="Edit Structure"
              icon="pi pi-angle-left"
              rounded
              severity="secondary"
              size="large"
              onClick={() => dispatch(updateCurrentStep(1))}
            />
          </div>

          <div>
            <div className="m-auto max-w-max text-4xl font-semibold">
              Define Functions for each room
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
              onClick={() => {
                dispatch(updateCurrentStep(3));
              }}
            />
          </div>
        </div>
        <div className="flex justify-content-between">
          <div>
            {projectDetailState?.projectDetail?.buildingAreas?.map(
              (buildingArea, buildingAreaIndex) => (
                <section key={buildingAreaIndex}>
                  {buildingArea.areas.map((area, areaIndex) => (
                    <>
                      {area.floors.map((floor, floorIndex) => {
                        return getSection(
                          floor,
                          buildingArea.name,
                          buildingAreaIndex,
                          area,
                          areaIndex,
                          floorIndex
                        );
                      })}
                    </>
                  ))}
                </section>
              )
            )}
          </div>
          <div>
            <div
              className="border-1"
              style={{
                borderRadius: "30px",
                borderColor: "#DDD",
                boxShadow: "1px 1px 1px #DDD",
                width: "30rem",
              }}
            >
              <div className="m-4">
                <span className="font-bold">
                  Drag & Drop Functions in rooms
                </span>
                <br />
                <br />
                <span className="text-500">
                  HINT: Double click a function to add to all rooms
                </span>

                <div
                  style={{
                    border: "1px solid #DDD",
                    backgroundColor: "#FAFAFA",
                    borderRadius: "10px",
                  }}
                  className="mt-4 mb-3"
                >
                  <div
                    className="m-2 flex flex-wrap"
                    style={{
                      height: "320px",
                      overflow: "auto",
                    }}
                  >
                    {products.map((product, productIndex) => {
                      return (
                        <div className="w-max m-3" key={productIndex}>
                          <span className="font-bold text-400">
                            {product.categoryName}
                          </span>
                          {product.products.map(
                            (productItem, productItemIndex) => {
                              return (
                                <DragItem
                                  product={productItem}
                                  key={productItemIndex}
                                />
                              );
                            }
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Button
                  label="Auto Recommend Functions"
                  rounded
                  severity="secondary"
                  className="mt-2"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="flex justify-content-between mt-3">
              <div>
                <Button
                  label="Undo"
                  icon="pi pi-angle-left"
                  rounded
                  severity="secondary"
                  className="mr-2"
                  onClick={() => {}}
                />
                <Button
                  label="Redo"
                  icon="pi pi-angle-right"
                  rounded
                  severity="secondary"
                  onClick={() => {}}
                />
              </div>
              <span className="text-primary align-content-center">
                Reset All
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-content-between align-content-center flex-wrap"
        style={{
          height: "40px",
          borderTop: "1px solid #DDD",
        }}
      >
        <div className="flex justify-content-between flex-wrap align-content-center">
          <div>
            <div className="pl-2">Set Quality Level:</div>
          </div>
          <div className="flex justify-content-between w-18rem align-content-center ml-3 flex-wrap">
            <div>
              <RadioButton
                inputId="productQUality1"
                name="productQUality"
                value={PriceCategoryEnum.BUDGET}
                onChange={(e) => setPriceCategory(e.value)}
                checked={priceCategory === PriceCategoryEnum.BUDGET}
              />
              <label htmlFor="productQUality1" className="ml-1">
                Budget
              </label>
            </div>
            <div>
              <RadioButton
                inputId="productQUality2"
                name="productQUality"
                value={PriceCategoryEnum.STANDARD}
                onChange={(e) => setPriceCategory(e.value)}
                checked={priceCategory === PriceCategoryEnum.STANDARD}
              />
              <label htmlFor="productQUality2" className="ml-1">
                Standard
              </label>
            </div>
            <div>
              <RadioButton
                inputId="productQUality3"
                name="productQUality"
                value={PriceCategoryEnum.PREMIUM}
                onChange={(e) => setPriceCategory(e.value)}
                checked={priceCategory === PriceCategoryEnum.PREMIUM}
              />
              <label htmlFor="productQUality3" className="ml-1">
                Premium
              </label>
            </div>
          </div>
        </div>
        <div
          className="bg-primary align-content-center pl-2 pr-2"
          style={{
            height: "40px",
            borderTop: "1px solid #DDD",
          }}
        >
          Confirm & Add Tech Details <i className="pi pi-angle-right"></i>
        </div>
      </div>
    </DndProvider>
  );
};

export default ProjectStep2Component;
