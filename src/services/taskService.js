import { httpAxios } from "@/helper/httpHelper";


// API to add task by a LoggedIn User
export async function addTask(task) {
  const result = await httpAxios
  .post("/api/tasks", task)
  .then((response) => response.data);
  
  return result;
}


// API to fetch all the task of a Particular User
export async function getTasksOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
  return result;
}

// API to delete any Specific Task
export async function deleteTask(taskId) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`)
    .then((response) => response.data);
  return result;
}
