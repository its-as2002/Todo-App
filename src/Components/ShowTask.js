import Task  from "./Task";
const ShowTask = (props) => {
	const { taskList,deleteTask } = props;
	

	return (
		<div className="flex flex-col">
			<div className="bg-cyan-500 flex p-4 justify-evenly">
				<div className="p-6 text-white font-bold ">No.</div>
				<div className="p-4">
					<h1 className="text-white font-bold p-2">Task Name</h1>
				</div>
				<div className="p-4">
					<h1 className="text-white font-bold p-2">Task Description</h1>
				</div>
			</div>
			<div>
				{taskList.map((taskData,index) => (
					<Task data={taskData} deleteTask={deleteTask} index={index} key={taskData.id} />
				))}
			</div>
		</div>
	);
};
export default ShowTask;