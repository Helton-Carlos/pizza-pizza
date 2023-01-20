import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-white w-[60%] h-full">
        <div className="w-4/5 mx-auto">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <div className="bg-primary w-[40%] h-full bg-[url('./assets/pizza-delivery-man-making-phone-gesture-removebg.png')]"></div>
    </div>
  );
}

export default App;
