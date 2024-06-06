import { RxStarFilled } from "react-icons/rx";
import "./Star.css";
const Star = ({ filled, onClick }) => {
  return (
    <span
      className={`star ${filled ? "filled" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <RxStarFilled />
    </span>
  );
};
export default Star;
