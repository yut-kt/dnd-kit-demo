"use client";
import { useDroppable } from "@dnd-kit/core";
import React, { useState } from "react";

interface Props extends ComponentProps {
  id: string;
}
const Droppable: React.FC<Props> = ({ id, children }) => {
  const [columnSpan, setColumnSpan] = useState<number>(6);
  const [rowSpan, setRowSpan] = useState<number>(1);
  const { isOver, setNodeRef } = useDroppable({ id });
  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnSpan(event.target.checked ? 12 : 6);
  };
  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowSpan(Number(event.target.value));
  };

  const style = {
    display: "flex",
    color: isOver ? "green" : undefined,
    gridColumnStart: `span ${columnSpan}`,
    gridRowStart: `span ${rowSpan}`,
    backgroundColor: "#FFF",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div style={{ flexGrow: 1 }}>{children}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <input
            type="number"
            id={`height-${id}`}
            min={1}
            max={4}
            defaultValue={1}
            onChange={handleChangeNumber}
          />
          <label htmlFor={`height-${id}`}>Height</label>
        </div>
        <div>
          <input
            type="checkbox"
            id={`wider-${id}`}
            onChange={handleChangeCheck}
          />
          <label htmlFor={`wider-${id}`}>Widder</label>
        </div>
      </div>
    </div>
  );
};

export { Droppable };
