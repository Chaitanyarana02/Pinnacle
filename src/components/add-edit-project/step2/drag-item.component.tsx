import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name }: {name: string}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
             className="flex items-center m-2"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}>
                    
               <span
                 className="font-bold"
                 style={{
                   border: "1px solid #DDD",
                   padding: "10px",
                   backgroundColor: "white",
                   borderRadius: "20px",
                 }}
               >
                 {name}
                 {/* <img src="dragIcon.png"  style={{
                 }} alt="" /> */}
               </span>
             </div>
    );
};

export default DragItem;