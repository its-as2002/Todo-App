const Task = ({ data, deleteTask, index }) => {
	const { taskName, taskDescription, id } = data;
	return (
		<div className="flex w-full my-2">
			<h1 className="w-[10%] text-center bg-slate-500">{index + 1}</h1>
			<h1 className="w-[30%] text-center bg-slate-300">{taskName}</h1>
			<h1 className="w-[60%] bg-slate-500 text-center">{taskDescription}</h1>
			<button
				className="w-[10%] text-"
				type="button"
				onClick={() => {
					deleteTask(id);
				}}>
				❌
			</button>
		</div>
	);
};
export default Task;
