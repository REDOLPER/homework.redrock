import { useDispatch } from "react-redux";
import { selectAll, deselectAll, toggleAll } from '../store/todoSlice';

function Fns() {
  const dispatch = useDispatch();
  return (
    <div className="fns">
      <button onClick={() => dispatch(selectAll())}>Select All</button>
      <button onClick={() => dispatch(deselectAll())}>Deselect All</button>
      <button onClick={() => dispatch(toggleAll())}>Toggle All</button>
    </div>
  );
}

export default Fns;
