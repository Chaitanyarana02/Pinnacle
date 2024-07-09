
import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
        className="mt-4"
        style={{
          borderRadius:"30px",
          height: "150px",
          overflow:"auto",
          backgroundColor: "#FAFAFA",
          border: `2px dashed ${isOver ? 'green' : '#DDD'}`,
        }}
            ref={drop}>
        
        </div>
    );
};

export default DropZone;