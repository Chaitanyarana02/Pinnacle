import React, { useState } from "react";
import { useDrop } from "react-dnd";
import {
  DefaultProduct,
  ProjectFloorFunction,
  ProjectFloorRooms,
  RoomFunctions,
} from "../../../interfaces/project.interface";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const DropZone = ({
  onDrop,
  functions,
  room,
  products,
}: {
  onDrop: (item: DefaultProduct) => void;
  functions: ProjectFloorFunction[];
  room: ProjectFloorRooms;
  products: RoomFunctions[];
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => onDrop(item as DefaultProduct),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  const dialogFooter = (
    <>
      <Button
        label="Save & Continue"
        style={{ float: "left" }}
        rounded
        onClick={() => {}}
      />
    </>
  );
  return (
    <div
      className="mt-4 flex flex-wrap align-content-center"
      style={{
        border: "2px dashed #DDD",
        borderRadius: "30px",
        height: "150px",
        overflow: "auto",
        backgroundColor: "#FAFAFA",
      }}
      ref={drop}
    >
      {functions.length ? (
        functions.map((functionItem, index) => (
          <span
            key={index}
            className="font-bold w-max align-content-center m-2"
            style={{
              border: "1px solid #DDD",
              padding: "5px 15px",
              backgroundColor: "white",
              borderRadius: "30px",
            }}
          >
            {functionItem.name}
            <i
              className="pi pi-trash m-3"
              style={{
                fontSize: "0.7rem",
              }}
            ></i>

            <i
              className="pi pi-minus"
              style={{
                fontSize: "0.7rem",
              }}
            ></i>
            <span className="m-2">{functionItem.count}</span>
            <i
              className="pi pi-plus"
              style={{
                fontSize: "0.7rem",
              }}
            ></i>
          </span>
        ))
      ) : (
        <div className="flex justify-content-around w-full">
          <div>
            Drag and Drop functions here or
            <span
              className="text-primary font-bold"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              {" "}
              Select functions
            </span>
          </div>
        </div>
      )}
      <Dialog
        visible={showDialog}
        style={{ width: "550px" }}
        className="function-model"
        header={
          <span>
            <span className=" text-500"> Select Functions For:</span>
            <span> {room.name}</span>
          </span>
        }
        modal
        footer={dialogFooter}
        onHide={() => setShowDialog(false)}
      >
        <div className="w-full" style={{ backgroundColor: "#FAFAFA" }}>
          {products.map((product, productIndex) => {
            return (
              <div className="w-max p-3" key={productIndex}>
                <div className="font-bold text-400">{product.categoryName}</div>
                <div className="flex flex-wrap" style={{ width: "500px" }}>
                  {product.products.map((productItem, productItemIndex) => {
                    return (
                      <div
                        key={productItemIndex}
                        className={
                          productItemIndex
                            ? "inline p-2 font-semibold text-sm m-2 text-primary"
                            : "inline p-2 font-semibold text-sm m-2"
                        }
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "2rem",
                        }}
                      >
                        {productItem.name}
                        <i
                          onClick={() => {}}
                          className={
                            productIndex
                              ? "pi pi-check ml-4 mr-2 p-1 bg-primary"
                              : "pi pi-check ml-4 mr-2 p-1 text-white"
                          }
                          style={{
                            border: productIndex
                              ? "1px solid #2D74FE"
                              : "1px solid #ddd",
                            borderRadius: "1.5rem",
                          }}
                        ></i>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Dialog>
    </div>
  );
};

export default DropZone;
