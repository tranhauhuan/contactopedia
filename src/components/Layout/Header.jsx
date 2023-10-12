import logo from "../../images/react.png";
export default function Header() {
  return (
    <div className="py-2 pl-2 mr-2" style={{ borderBottom: "1px solid #777" }}>
      <div className="mr-2 inline-block">
        <img
          src={logo}
          alt=""
          style={{ height: "40px", verticalAlign: "top" }}
        />
      </div>
      <span className="ml-3 text-white">ContactOpeadia</span>
    </div>
  );
}
