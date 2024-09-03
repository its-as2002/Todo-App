import Task from "./Task";
const ShowTask = (props) => {
	const { taskList, deleteTask } = props;

	return (
		<div className="flex flex-col">
			<div className="bg-cyan-500 flex w-full">
				<div className="py-4 w-[10%] text-white font-bold text-center ">
					No.
				</div>

				<h1 className="text-white font-bold py-4 w-[20%]  text-center">
					Task Name
				</h1>

				<h1 className="text-white font-bold py-4 w-[60%] text-center">
					Task Description
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
