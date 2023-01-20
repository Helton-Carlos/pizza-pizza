import pizza from "../assets/home/pizza.png";
import Tag from "../component/Tag";

function Menu() {
  return (
    <div className="mx-8 md:mt-12">
      <Tag title="FAÇA SUA ESCOLHA DA MELHOR PIZZA DA CIDADE" icon={pizza} />
    </div>
  );
}

export default Menu;
