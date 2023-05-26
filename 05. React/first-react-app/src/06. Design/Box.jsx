import "./Box.css";
function Box({ isActive, toggle }) {
  return (
    <div
      className="Box"
      onMouseEnter={toggle}
      style={{ backgroundColor: isActive ? "red" : "black" }}
    ></div>
  );
}

export default Box;
