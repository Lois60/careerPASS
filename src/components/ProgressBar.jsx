import "./ProgressBar.css";

const ProgressBar = ({ total, current, color }) => {
  const newTotal = 10;
  const progress =
    total === 0 ? "0" : Math.round((current / total) * 100).toString() + "%";
  const myStyle = {
    width: progress,
    backgroundColor: color,
  };
  console.log(myStyle);

  return (
    <div className="progressBar__container">
      <div className="progressBar__inner" style={myStyle}>
        {/* <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold">
          {progress}
        </p> */}
      </div>
    </div>
  );
};

export default ProgressBar;
