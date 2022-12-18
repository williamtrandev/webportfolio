import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
const initialData = {
    items: {
        1: { id: 1, content: "Item 1" },
        2: { id: 2, content: "Item 2" },
        3: { id: 3, content: "Item 3" },
        4: { id: 4, content: "Item 4" },
        5: { id: 5, content: "Item 5" },
        6: { id: 6, content: "Item 6" },
    },
    elements: {
        "element-1": {
            id: "element-1",
            title: "Cột 1",
            itemIds: [1, 3, 4, 5, 6],
        },
        "element-2": {
            id: "element-2",
            title: "Cột 2",
            itemIds: [2],
        },
        "element-3": {
            id: "element-3",
            title: "Cột 3",
            itemIds: [],
        },
    },
    elementOrder: ["element-1", "element-2", "element-3"],
};
const reorderElementList = (sourceCol, startIndex, endIndex) => {
    const newItemIds = Array.from(sourceCol.itemIds);
    const [removed] = newItemIds.splice(startIndex, 1);
    newItemIds.splice(endIndex, 0, removed);

    const newElement = {
        ...sourceCol,
        itemIds: newItemIds,
    };

    return newElement;
};

export default function Create() {
    const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const sourceCol = state.elements[source.droppableId];
        const destinationCol = state.elements[destination.droppableId];
        if (sourceCol.id === destinationCol.id) {
            const newElement = reorderElementList(
                sourceCol,
                source.index,
                destination.index
            );
            const newState = {
                ...state,
                elements: {
                    ...state.elements,
                    [newElement.id]: newElement,
                },
            };
            setState(newState);
            return;
        }

        // If the user moves from one element to another
        const startitemIds = Array.from(sourceCol.itemIds);
        const [removed] = startitemIds.splice(source.index, 1);
        const newStartCol = {
            ...sourceCol,
            itemIds: startitemIds,
        };

        const enditemIds = Array.from(destinationCol.itemIds);
        enditemIds.splice(destination.index, 0, removed);
        const newEndCol = {
            ...destinationCol,
            itemIds: enditemIds,
        };

        const newState = {
            ...state,
            elements: {
                ...state.elements,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol,
            },
        };

        setState(newState);
    };

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden" spellCheck="false">
            <div className="relative flex justify-center">
                <h1
                    className="text-black"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    Your Text
                </h1>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[30px] border rounded-[50%] opacity-0 group-hover:opacity-100 group-hover:border group-hover:border-slate-500">
                    <div className="flex justify-center items-center h-full">
                        +
                    </div>
                </div>
            </div>
            <nav className="flex justify-center items-center">
                <p className="text-center text-2xl text-bold border-b-2 border-slate-500">
                    Home
                </p>
                <p className="text-center text-2xl text-bold ml-10">About</p>
                <p className="text-center text-2xl text-bold ml-10">Skills</p>
            </nav>
            {/* <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex justify-between">
                    {state.elementOrder.map((elementId) => {
                        const element = state.elements[elementId];
                        const items = element.itemIds.map(
                            (itemId) => state.items[itemId]
                        );
                        // console.log(items);
                        return (
                            <div
                                key={element.id}
                                // element={element}
                                // items={items}
                                className="m-[20px] flex flex-col justify-start w-[200px] items-center bg-slate-50"
                            >
                                <h1 className="text-center">{element.title}</h1>
                                <Droppable droppableId={element.id}>
                                    {(dropapleProvided, dropableSnapshot) => (
                                        <div
                                            className="flex flex-col w-full items-center"
                                            ref={dropapleProvided.innerRef}
                                            {...dropapleProvided.dropableProps}
                                        >
                                            {items.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={`${item.id}`}
                                                    index={index}
                                                >
                                                    {(
                                                        draggableProvided,
                                                        draggableSnapshot
                                                    ) => (
                                                        <div
                                                            className="flex mb-[10px] p-[10px]"
                                                            ref={
                                                                draggableProvided.innerRef
                                                            }
                                                            {...draggableProvided.draggableProps}
                                                            {...draggableProvided.dragHandleProps}
                                                        >
                                                            {item.content}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        );
                    })}
                </div>
            </DragDropContext> */}
        </div>
    );
}
