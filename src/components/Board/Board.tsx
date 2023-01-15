import Task from "../Task/Task";

type Props = {};
const Board = ({data}: Props) => {

  return (
    <div className=" text-center flex bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white h-screen">
      <div className="m-4">
        <h2 className="text-xl mb-4"> PreTodo</h2>
        <div className="bg-gray-300  text-center rounded">
          <Task data={data}/>
          <button className="text-gray-700 mb-4">+ Add Task</button>
        </div>
        
      </div>
     <div className="m-4 ">
        <h2 className="text-xl mb-4"> Todo</h2>
        <div className="bg-gray-300  text-center rounded">
          <Task data={data}/>
          <button className="text-gray-700 mb-4">+ Add Task</button>
        </div>
      </div>
      <div className="m-4">
        <h2 className="text-xl mb-4"> Done</h2>
        <div className="bg-gray-300  text-center rounded">
          <Task data={data}/>
          <button className="text-gray-700 mb-4">+ Add Task</button>
        </div>
      </div>
      
    </div>
  )
};
export default Board;
