import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import "./resizable.css";

interface Props extends ComponentProps {
  id: string;
}

interface Sizes {
  width: number;
  height: number;
  columnSpan: number;
  rowSpan: number;
}

const INTERVAL_WIDTH = 180;
const INTERVAL_HEIGHT = 32;
const GAP = 8;
const INITIAL_SIZES: Sizes = {
  width: 356,
  height: 64,
  columnSpan: 6,
  rowSpan: 1,
};

const Droppable: React.FC<Props> = ({ id, children }) => {
  const [sizes, setSizes] = useState<Sizes>(INITIAL_SIZES);
  const { isOver, setNodeRef } = useDroppable({ id });

  const handleResize = (event: any, { size }: any) => {
    const newState: Partial<Sizes> = {};

    if (size.width === sizes.width + INTERVAL_WIDTH) {
      newState.width = INITIAL_SIZES.width * 2 + GAP;
      newState.columnSpan = INITIAL_SIZES.columnSpan * 2;
    }

    if (size.width === sizes.width - INTERVAL_WIDTH) {
      newState.width = INITIAL_SIZES.width;
      newState.columnSpan = INITIAL_SIZES.columnSpan;
    }

    if (size.height === sizes.height + INTERVAL_HEIGHT) {
      newState.height = sizes.height + INITIAL_SIZES.height + GAP;
      newState.rowSpan = sizes.rowSpan + 1;
    }

    if (size.height === sizes.height - INTERVAL_HEIGHT) {
      newState.height = sizes.height - INITIAL_SIZES.height - GAP;
      newState.rowSpan = sizes.rowSpan - 1;
    }

    if (Object.keys(newState).length > 0) {
      setSizes((prevState) => ({ ...prevState, ...newState }));
    }
  };

  const style = {
    display: "flex",
    color: isOver ? "green" : undefined,
    gridColumnStart: `span ${sizes.columnSpan}`,
    gridRowStart: `span ${sizes.rowSpan}`,
    backgroundColor: "#FFF",
  };

  return (
    <Resizable
      className="box"
      width={sizes.width}
      height={sizes.height}
      onResize={handleResize}
      draggableOpts={{ grid: [INTERVAL_WIDTH, INTERVAL_HEIGHT] }}
    >
      <div ref={setNodeRef} style={style}>
        <div style={{ flexGrow: 1 }}>{children}</div>
      </div>
    </Resizable>
  );
};

export { Droppable };
