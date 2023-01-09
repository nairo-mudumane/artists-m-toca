import { Link } from "react-router-dom";

export function Overview() {
  return (
    <div className="w-full h-[100vh] flex gap-6 items-center justify-center">
      <Link to="/login">Login page</Link>
      <Link to="/new">Register page</Link>
    </div>
  );
}
