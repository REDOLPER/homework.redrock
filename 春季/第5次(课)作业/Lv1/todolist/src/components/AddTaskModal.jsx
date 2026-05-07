import { addTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function AddTaskModal({ isHidden, onClose }) {
  const dispatch = useDispatch();

  // 点击模态框外部时关闭模态框
  // 通过 事件冒泡 和 e.target 与 e.currentTarget 的比较 来判断点击是否发生在模态框外部
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      id="modal-wrapper"
      className={"modal-wrapper" + (isHidden ? " hidden" : "")}
      onClick={handleWrapperClick}
    >
      <div id="modal" className="modal">
        <h2>What task would you like to add?</h2>
        <input
          type="text"
          id="new-task-input"
          className="new-task-input"
          required
        />
        <button
          id="confirm-task-btn"
          className="confirm-task-btn"
          aria-label="Confirm the addition of the new task"
          onClick={() => {
            const input = document.getElementById('new-task-input');
            const taskName = input.value.trim();
            if (taskName) {
              dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
              input.value = '';
              onClose();
            }
          }}
          >
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;
