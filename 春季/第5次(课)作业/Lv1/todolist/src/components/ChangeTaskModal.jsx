import { useEffect } from "react";
import { useState } from "react";

function ChangeTaskModal({ isHidden, onClose, onConfirm, currentName }) {
  const [inputValue, setInputValue] = useState(currentName);

  useEffect(() => {
    setInputValue(currentName);
  }, [currentName]);

  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = () => {
    const newName = inputValue.trim();
    if (newName) {
      onConfirm(newName);
    }
  }

  return (
    <div 
      id="modal-wrapper"
      className={"modal-wrapper" + (isHidden ? " hidden" : "")}
      onClick={handleWrapperClick}
    >
      <div id="modal" className="modal">
        <h2>Change the task name</h2>
        <input
          type="text"
          id="new-task-input"
          className="new-task-input"
          required
          value={inputValue || ''}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          id="confirm-task-btn"
          className="confirm-task-btn"
          aria-label="Confirm the change of the task name"
          onClick={handleConfirm}
          >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ChangeTaskModal;
