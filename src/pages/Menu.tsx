import pizza from "@/assets/pizza.png";
import Tag from "@/component/Tag";
import Card from "@/component/Card";

function Menu() {
  const pizzas = [
    {
      sabor: "AMERICANA",
      ingredientes: "Molho de tomate, mussarela e presunto.",
      image: "AMERICANA",
      preco: "20,00",
    },
    {
      sabor: "ATUM",
      ingredientes: "Molho de tomate, mussarela e atum.",
      image: "ATUM",
      preco: "22,00",
    },
    {
      sabor: "BACON",
      ingredientes: "Molho de tomate, mussarela e bacon.",
      image: "BACON",
      preco: "23,90",
    },
  ];
  return (
    <div className="mx-8 md:mt-12">
      <Tag title="FAÇA SUA ESCOLHA DA MELHOR PIZZA DA CIDADE" icon={pizza} />
      <div>
        {pizzas.map((item) => (
          <Card
            key={item.toString()}
            sabor={item.sabor}
            ingredientes={item.ingredientes}
            image={item.image}
            preco={item.preco}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
