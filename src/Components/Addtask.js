import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShowTask from "./ShowTask";

const AddTask = () => {
	const [taskName, setTaskName] = useState("");
	const [taskDescription, setTaskDescription] = useState("");
	const [taskList, setTaskList] = useState([]);
	const deleteTask = (id) => {
		const newTaskList = taskList.filter((task) => task.id !== id);
		setTaskList(newTaskList);
	};
	return (
		<div className="flex flex-col">
			<div className="bg-black flex p-4 justify-around">
				<div className="p-4 flex gap-2">
					<h1 className="text-white font-bold p-2">Task Name</h1>
					<input
						type="text"
						className="p-2 outline-none"
						placeholder="Enter Task Name"
						value={taskName}
						onChange={(e) => {
							setTaskName(e.target.value);
						}}
					/>
				</div>
				<div className="p-4 flex gap-2">
					<h1 className="text-white font-bold p-2">Task Description</h1>
					<input
						type="text"
						className="p-2  outline-none"
						placeholder="Enter Task Description"
						value={taskDescription}
						onChange={(e) => {
							setTaskDescription(e.target.value);
						}}
						required
					/>
				</div>
				<div className="flex items-center justify-center">
					<button
						type="submit"
						className="bg-white p-2 mx-4 rounded-lg"
						onClick={() => {
							if (taskName === "" || taskDescription === "") {
								alert("Please fill all the fields");
								return;
							}
							setTaskList([
								...taskList,
								{ taskName, taskDescription, id: uuidv4() },
							]);
							setTaskName("");
							setTaskDescription("");
						}}>
						AddTask
					</button>
				</div>
			</div>
			<ShowTask taskList={taskList} deleteTask={deleteTask} />
		</div>
	);
}
export default AddTask;