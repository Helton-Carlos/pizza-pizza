import logo from "../../assets/home/logo.png";

const NavHome = () => {
  return (
    <div className="w-11/12 flex items-center justify-between mx-auto mt-10">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <div className="flex gap-5">
        <p className="text-sm font-bold hover:text-primary cursor-pointer">
          Início
        </p>
        <p className="text-sm font-bold hover:text-primary cursor-pointer">
          Menu
        </p>
        <p className="text-sm font-bold hover:text-primary cursor-pointer">
          Sobre Nós
        </p>
      </div>
    </div>
  );
};

export default NavHome;
