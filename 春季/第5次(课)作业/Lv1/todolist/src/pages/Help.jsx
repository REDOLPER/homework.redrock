import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();

  return (
    <>
      <button 
       className="return-btn"
       onClick={() => {
        navigate("/");
       }}
      >Return</button>
      <div className="help">
        <h2>Help</h2>
        <p>这是一个ToDoList</p>
        <p>使用说明：</p>
        <ul>
          <li>点击“Add new to-do”按钮添加新任务</li>
          <li>点击任务旁边的复选框可以标记任务为已完成</li>
          <li>右键点击未完成任务可以修改任务</li>
          <li>右键点击已完成任务可以删除任务</li>
        </ul>
        <p style={{ color: '#efefef', padding: '0 1rem', textDecoration: 'line-through' }}>
          因为想不到在哪里使用 router 所以用这个水了一页（
        </p>
      </div>
    </>
  );
}

export default Help;
