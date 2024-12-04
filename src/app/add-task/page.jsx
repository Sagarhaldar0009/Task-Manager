import React from 'react'
import AddTask from './AddTask'

export const metadata = {
  title: "Add Task - Task Manager",
};

const page = () => {
  return <AddTask/> // Using Server Component to render Client Component (to update Meta Data - Title)
}

export default page