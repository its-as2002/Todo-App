const Task = (props) => {
	const { taskName, taskDescription, id, deleteTask } = props.data;
	return (
		<div className="flex justify-around">
			<h1>{id}</h1>
			<h1>{taskDescription}</h1>
			<button
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