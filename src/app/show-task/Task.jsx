import UserContext from '@/contextAPI/userContext';
import React, { useContext } from 'react'
import { RxCross1 } from "react-icons/rx";


const Task = ({task, deleteTaskParent}) => {

  const {user} = useContext(UserContext);

  function deleteTask(taskId) {
    // ....
    deleteTaskParent(taskId);
  }

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "Completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-white">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-red-500 bg-white rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <RxCross1 />
          </span>
        </div>
        <p className="font-normal text-white">{task.content}</p>
        <div className="flex justify-between mt-3 text-white">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Task