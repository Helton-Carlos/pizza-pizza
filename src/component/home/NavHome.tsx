import logo from "../../assets/home/logo.png";

const NavHome = () => {
  return (
    <div className="w-11/12 flex items-center justify-between mx-auto mt-4">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <div className="flex gap-5">
        <p className="text-sm  hover:text-primary">Início</p>
        <p className="text-sm hover:text-primary">Menu</p>
        <p className="text-sm hover:text-primary">Sobre Nós</p>
      </div>
    </div>
  );
};

export default NavHome;
