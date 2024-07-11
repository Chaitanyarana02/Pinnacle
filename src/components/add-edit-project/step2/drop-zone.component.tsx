import React from "react";
import { useDrop } from "react-dnd";
import { DefaultProduct } from "../../../interfaces/ProductList.interface";
import { ProjectFloorFunction } from "../../../interfaces/project.interface";

const DropZone = ({
  onDrop,
  functions,
}: {
  onDrop: (item: DefaultProduct) => void;
  functions: ProjectFloorFunction[];
}) => {
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => onDrop(item as DefaultProduct),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

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
      {functions.map((functionItem, index) => (
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
          <i className="pi pi-trash m-3" style={{
            fontSize: "0.7rem"
          }}></i>

          <i className="pi pi-minus" style={{
            fontSize: "0.7rem"
          }}></i>
          <span className="m-2">{functionItem.count}</span>
          <i className="pi pi-plus" style={{
            fontSize: "0.7rem"
          }}></i>
        </span>
      ))}
    </div>
  );
};

export default DropZone;
