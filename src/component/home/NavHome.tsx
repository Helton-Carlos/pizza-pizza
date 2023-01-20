import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";

const NavHome = () => {
  return (
    <div className="w-11/12 flex items-center justify-between mx-auto mt-10">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <div className="flex gap-5">
        <Link
          to="/"
          className="text-sm font-bold hover:text-primary cursor-pointer"
        >
          Início
        </Link>
        <Link
          to="/menu"
          className="text-sm font-bold hover:text-primary cursor-pointer"
        >
          Menu
        </Link>
        <Link
          to="/contato"
          className="text-sm font-bold hover:text-primary cursor-pointer"
        >
          Contato
        </Link>
      </div>
    </div>
  );
};

export default NavHome;
