import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <Link to={"/"}>
          <button>
            <div className="text-s m-4">
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
                Menitcom
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
