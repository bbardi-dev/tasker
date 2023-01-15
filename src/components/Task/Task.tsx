interface Props {}
const Task = ({data}: Props) => {


  return (
    <div className="p-2">
      {data.map(task=>{
        return(
          <div key={task.id} className="bg-gray-200 m-8 w-44 rounded p-2 text-gray-700">
            <p className="m-2">{task.data}</p>
            <button>Update</button>
          </div>
        )
      })}
    </div>
  )
}
export default Task