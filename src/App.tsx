import { Link, Outlet } from "react-router-dom";
import "./App.css";

import NarutoPgae from "./pages/narutoPgae";

function Root() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>home</Link>
          </li>
          <li>
            <Link to={`/naruto`}>naruto</Link>
          </li>
          <li>
            <Link to={`/items`}>items page</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
