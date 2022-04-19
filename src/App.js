import { Link, Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList.js";

function App() {
  return (
    <div>
      <Link to="/users">
        <button> UsersList </button>
      </Link>

      <Link to="/">
        <button> Home </button>
      </Link>

      <Routes>
        <Route path="users" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;