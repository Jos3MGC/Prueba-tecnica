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
              <p className="p_normal">Tarea 1</p>
              <img
                draggable="false"
                style={{ width: '100%', height: '100%' }}
                src="https://imgs.search.brave.com/6eDSlAH5gmBH0YQDXLmzaOsM7l_6llG9-9XDVtvx2Dw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzM5MzYw/MTAvc2NyZWVuc2hv/dHMvNjk5ODU2OS9t/ZWRpYS80ZjMyYzAw/NzhkNjQyOTJmYjNh/NWZhZmM0YTUzNjBm/Yi5qcGc_cmVzaXpl/PTQwMHgzMDAmdmVy/dGljYWw9Y2VudGVy"
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
              <p className="p_normal">Tarea 2</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="row_reg_done">
            <MdDoneOutline className="iconBoard" /><p>Done</p>
          </div>
          <div className="droppable" onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragOver} onDrop={drop}>
          <div draggable className="draggable" onDragStart={dragStart}>
              <p className="p_normal">Tarea 3</p>
              <img
                draggable="false"
                style={{ width: '100%', height: '100%' }}
                src="https://imgs.search.brave.com/_tYvyHUvABsb7x2LVMxYIVjFRox6OmpEYvufK394OsQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHNkLWdyYXRpcy9k/aXNlbm8tc2l0aW9z/LXdlYi1zdS1uZWdv/Y2lvXzI0OTcyLTM5/NC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
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

