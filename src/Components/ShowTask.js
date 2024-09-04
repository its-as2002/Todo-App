import Task from "./Task";
const ShowTask = (props) => {
	const { taskList, deleteTask } = props;

	return (
		<div className="flex flex-col">
			<div className="bg-cyan-500 flex w-full">
				<div className="py-4 w-[10%] text-white font-bold border-x-2 text-center ">
					No.
				</div>

				<h1 className="text-white font-bold py-4 w-[20%]  border-x-2 text-center">
					Task Name
				</h1>

				<h1 className="text-white font-bold py-4 w-[60%] text-center border-x-2">
					Task Description
				</h1>
				<h1 className="text-white font-bold py-4 w-[10%] text-center border-x-2">
					Delete
				</h1>
			</div>
			<div>
				{taskList.map((taskData, index) => (
					<Task
						data={taskData}
						deleteTask={deleteTask}
						index={index}
						key={taskData.id}
					/>
				))}
			</div>
		</div>
	);
};
export default ShowTask;
