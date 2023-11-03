import useBoard from '@/hooks/useBoard';
import { MdDoneOutline } from 'react-icons/md';
import { TbProgressCheck } from 'react-icons/tb';
import { HiOutlineClipboardList } from 'react-icons/hi';

const TrelloBoard = () => {

  const {
    dragStart,
    dragEnter,
    dragLeave,
    dragOver,
    drop
  } = useBoard();

  return (
    <div className="board">
      <div className="row">
        <div className="column">
          <div className="row_reg_toDo">
            <HiOutlineClipboardList className="iconBoard" /><p>To Do</p>
          </div>
          <div className="droppable" onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDrop={drop}>
            <div draggable className="draggable" onDragStart={dragStart}>
              <p className="p_normal">Mueve la imagen</p>
              <img
                draggable="false"
                style={{ width: '100%', height: '100%' }}
                src="https://images.unsplash.com/photo-1661749701679-639d5e14f4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="row_reg_doing ">
            <TbProgressCheck className="iconBoard" /><p>Doing</p>
          </div>
          <div className="droppable" onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDrop={drop}>
            <div draggable className="draggable" onDragStart={dragStart}>
              <p className="p_normal">Mueve la imagen</p>
              <img
                draggable="false"
                style={{ width: '100%', height: '100%' }}
                src="https://images.unsplash.com/photo-1661749701679-639d5e14f4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="row_reg_done">
            <MdDoneOutline className="iconBoard" /><p>Done</p>
          </div>
          <div className="droppable" onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDrop={drop}>
          <div draggable className="draggable" onDragStart={dragStart}>
              <p className="p_normal">Mueve la imagen</p>
              <img
                draggable="false"
                style={{ width: '100%', height: '100%' }}
                src="https://images.unsplash.com/photo-1661749701679-639d5e14f4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrelloBoard;

