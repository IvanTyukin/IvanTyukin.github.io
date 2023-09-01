
function App() {
	// const [taskList, setTaskList] = useState([]);
	console.log(JSON.parse(localStorage.getItem('TasksObject')))
	const tasksObject = JSON.parse(localStorage.getItem('TasksObject')) || [];
	const [taskList, setTaskList] = React.useState(tasksObject);

	function id () {
        return uuidv4();
    };

	function addTask(newTaskText, tasks, setNewText) {
		const newTask = {};
		newTask.id = id();
		newTask.taskText = newTaskText;
		newTask.isDone = false;
		newTask.isReduct = false;

		// console.log(JSON.stringify(newTask));
		

		if (newTask.taskText.trim()) {
			const tasksCopy = Object.assign([], tasks);
			tasksCopy.push(newTask);
			setTaskList(tasksCopy);
			localStorage.setItem('TasksObject',
							JSON.stringify(tasksCopy));
			console.log(typeof localStorage.getItem('TasksObject'))
			// localStorage.setItem('TasksObject',
			// 				JSON.stringify(tasksCopy));
			// setTaskList(
			// 	JSON.parse(localStorage.getItem('TasksObject'))
			// );
		}
		
		setNewText("");
	}

	function decorateTask(i, field, tasks) {
		const tasksCopy = Object.assign([], tasks);
		// console.log(typeof JSON.stringify(tasksCopy));
		tasksCopy[i][field] = !tasksCopy[i][field];
		setTaskList(tasksCopy);
		localStorage.setItem('TasksObject',
							JSON.stringify(tasksCopy));
	}

	function removeTask (i, tasks) {
		const tasksCopy = [...tasks.slice(0, i), ...tasks.slice(i+1)];
		setTaskList(tasksCopy);
		localStorage.setItem('TasksObject',
							JSON.stringify(tasksCopy));
	}

	function reductTask (i, field, tasks) {
		const tasksCopy = Object.assign([], tasks);
		// console.log(tasksCopy);
		
		tasksCopy[i][field] = !tasksCopy[i][field];
		setTaskList(tasksCopy);
		localStorage.setItem('TasksObject',
							JSON.stringify(tasksCopy));
	}

	function save(curTaskVal, i,  tasks) {
		const tasksCopy = Object.assign([], tasks);
		 
		tasksCopy.forEach((elem, index) => {
			
			if (elem.id === i) {
				console.log(index === i);
				elem.taskText = curTaskVal;
				elem.isReduct = false;
				if (elem.taskText.trim()) {
					setTaskList(tasksCopy);
					localStorage.setItem('TasksObject',
							JSON.stringify(tasksCopy));
				}
			}
		});
		
		
	}

	return <div className="App">
		<h1>ToDo List</h1>
		<MainFrame taskList = {taskList} addTask={addTask}/>
		<TaskList taskList={taskList} 
					decorateTask={decorateTask}  
					removeTask={removeTask}
					reductTask = {reductTask}
					save={save}/>
		
	</div>


}

function MainFrame ({taskList, addTask}) {

    const [newText, setNewText] = React.useState("");

    function changeText (event) {
        setNewText(event.target.value);
    }


    return <div className="mainFrame">
        <div className="mainPanel">
            <input className="inputSpace"
                placeholder="Enter new task"
                value={newText} 
                onChange={(event) =>changeText(event)}
		onKeyPress={(e) => {
			if (e.key === 'Enter') {
				addTask(newText, taskList, setNewText)
			}
		}}	
            />
            <button className="addTask"
                    onClick={() => addTask(newText, taskList, setNewText)}>
                add
            </button>
        </div>
    </div>;
}



function TaskField({value, id, taskList, save}) {
    const [curTaskValue, setCurTaskVal] = React.useState(value);

    function changeTask (event) {
                    setCurTaskVal(event.target.value);
                }

    

    
    return (
        <>
            <input value={curTaskValue} 
		onChange={(event) => changeTask(event)} 
		onKeyPress={(e) => {
			if (e.key === 'Enter') {
				save(curTaskValue,id, taskList)
			}
		}} />
            <button onClick={() => save(curTaskValue,id, taskList)}><img src="add.png" /></button>
        </>
    );
}




function TaskList ({taskList, decorateTask, removeTask, reductTask, save}) {
    // console.log(taskList);
    

    const result = taskList.map((elem, index, taskList) => {
        let div;
        
        if (elem.isDone){
            div = <div className="text decorated">{elem.taskText}</div> 
        } else {
            div = <div className="text">{elem.taskText}</div>;
        }
        let text;
        if (!elem.isReduct) {
            text = div;
        } else {
           

            text = <TaskField value={elem.taskText} id={elem.id} taskList={taskList} 
                                save={save}/>

        }


        return <li key={elem.id}>
            <div className="input">
                <input type="checkbox" checked={elem.isDone} 
                    onChange={() => decorateTask(index, "isDone" , taskList)} />
                {text}
            </div>
            <span className="buttons">
                <button className="removeButton" 
                    onClick={() => removeTask(index, taskList)}>
                    <img src="delete.png" alt=""/>
                </button>
                <button onClick={() => reductTask(index, "isReduct", taskList)}>Reduct</button>
            </span>
        </li>
        
        
    });


    return <>
    { 
        taskList.length ?
        <>
            <hr />
            <h2>Things to do</h2>
                <ul>
                    {result}
                </ul>
        </> :
        <></>
    }
    </>
    
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)
