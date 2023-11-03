import { useState } from 'react';

const useBoard = () => {
    const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);

    const dragStart = (event: any) => {
        event.dataTransfer.setData("height", event.target.clientHeight.toString());
        event.dataTransfer.setData("width", event.target.clientWidth.toString());
        setDraggedItem(event.target);
    };

    const dragEnter = (event: any) => {
        event.preventDefault();
        if (draggedItem) {
            event.target.appendChild(draggedItem);
            draggedItem.style.opacity = '0';
        }
    };

    const dragLeave = () => {
        // You can implement this if needed.
    };

    const dragOver = (event: any) => {
        event.preventDefault();
    };

    const drop = (event: any) => {
        event.preventDefault();
        if (draggedItem) {
            draggedItem.style.opacity = '1';
        }
    };

    return {
        dragStart,
        dragEnter,
        dragLeave,
        dragOver,
        drop
    }
}

export default useBoard