// import { useState } from "react";
// import { useDispatch } from "react-redux";

function TodoItem({ item, completed, toggleTask, onChangeName, deleteTask }) {

  // const [isCompleted, setIsCompleted] = useState(completed);

  // const handleToggleCompletion = () => {
  //   setIsCompleted(!isCompleted);
  // };

  return (
    <li data-task-item className={`task-item ${completed ? 'completed' : ''}`}>
      <p
       data-task-name className="task-name"
       onContextMenu={(e) => {
          e.preventDefault();
          if (completed) {
            deleteTask();
          } else {
            onChangeName();
          }
       }}
        // onClick={() => {
        //   if (!completed) {
        //     onChangeName();
        //   }
        // }}
        // onContextMenu={() => {
        //   if (completed) {
        //     deleteTask();
        //   }
        // }}
      >{item.name}</p>
      <div
       className="checkmark-wrapper"
       onClick={toggleTask}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="checkmark"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          > 
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>
    </li>
  );
}

export default TodoItem;
