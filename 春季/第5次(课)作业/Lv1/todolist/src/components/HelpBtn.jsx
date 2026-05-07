import { useNavigate } from "react-router-dom";

function HelpBtn() {
  const navigate = useNavigate();

  return (
    <button
      id="help-btn"
      className="help-btn"
      aria-label="Open help information"
      onClick={() => {
        navigate("/help");
      }}
    >
      Help
    </button>
  );
}

export default HelpBtn;
