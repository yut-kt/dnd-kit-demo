"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { useState } from "react";
import { GridContainer } from "@/components/GridDnD/GridContainer";

const GridDnD = () => {
  const [ids, setIds] = useState<number[]>(
    Array.from({ length: 14 }, (_, i) => i + 1),
  );
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    if (active.id !== over.id) {
      const activeIndex = ids.indexOf(Number(active.id));
      const overIndex = ids.indexOf(Number(over.id));
      const newIds = [...ids];
      newIds[activeIndex] = ids[overIndex];
      newIds[overIndex] = ids[activeIndex];
      setIds(newIds);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <GridContainer>
        {ids.map((id) => (
          <Droppable id={id.toString()} key={id}>
            <Draggable id={id.toString()}>
              {id} ※このテキストがDraggableです
            </Draggable>
          </Droppable>
        ))}
      </GridContainer>
    </DndContext>
  );
};

export { GridDnD };
