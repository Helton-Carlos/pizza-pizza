import logo from "../../assets/home/logo.png";

function NavHome() {
  return (
    <div className="flex items-center w-11/12 mx-auto">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <div className="p-4 gap-5">
        <span>Início</span>
        <span>Menu</span>
        <span>Sobre Nós</span>
      </div>
    </div>
  );
}

export default NavHome;
