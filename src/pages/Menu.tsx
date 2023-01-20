import pizza from "@/assets/pizza.png";
import Tag from "@/component/Tag";
import Card from "@/component/Card";

function Menu() {
  return (
    <div className="mx-8 md:mt-12">
      <Tag title="FAÇA SUA ESCOLHA DA MELHOR PIZZA DA CIDADE" icon={pizza} />
      <Card sabor="FAÇA SUA" ingredientes="FAÇA PIZZA" image="CIDADE" />
    </div>
  );
}

export default Menu;
