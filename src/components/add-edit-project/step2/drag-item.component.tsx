import  { useState } from "react";
import { useDrag } from "react-dnd";
import { DefaultProduct } from "../../../interfaces/project.interface";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const DragItem = ({
  dbClickedItem,
  product,
}: {
  product: DefaultProduct;
  dbClickedItem: () => void;
}) => {
  const [isShowDialog, setShowDialog] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { ...product },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onDoubleClick={() => {
        setShowDialog(true)
      }}
      className="flex items-center m-2"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <span
        className="font-semibold text-700"
        style={{
          border: "1px solid #DDD",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        {product.name}
        {/* <img src="dragIcon.png"  style={{
                 }} alt="" /> */}
      </span>

      <Dialog
        visible={isShowDialog}
        style={{ width: "400px" }}
        header={`Add one ${product.name} to all rooms?`}
        modal
        className="p-fluid"
        footer={
          <Button
            label="Save & Continue"
            style={{ float: "left" }}
            rounded
            onClick={() => {
              dbClickedItem();
              setShowDialog(false)
            }}
          />
        }
        onHide={() => setShowDialog(false)}
      ></Dialog>
    </div>
  );
};

export default DragItem;
