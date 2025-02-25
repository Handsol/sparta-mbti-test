import { Outlet } from "react-router-dom";
import Dashboard from "../components/layout/Dashboard";
import Header from "../components/layout/LayoutHeader";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
};

export default HomePage;
