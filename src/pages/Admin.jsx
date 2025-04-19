import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

function Admin() {
  return (
    <div className="flex flex-col lg:flex-row mt-20 mx-auto max-w-6xl font-nicer">
      <AdminNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
