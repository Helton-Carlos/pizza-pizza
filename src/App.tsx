import NavHome from "./component/home/NavHome";
import MyButton from "./component/project/MyButton";
import Tag from "./component/project/Tag";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-white w-[60%] h-full">
        <NavHome />
        <div className="w-3/5 m-8">
          <Tag title="O MELHOR FASTFOOD DELIVERY DE BRASÍLIA" />
          <h2 className="text-3xl font-bold mt-4 uppercase">
            Peça rápido, aprecie <div className="text-yellow">lentamente</div>
          </h2>
          <p className="text-gray text-sm mt-4 font-bold">
            Pizzas com massa feita na hora, assada na pedra no forno a lenha!
          </p>
          <MyButton text="Pedir Agora" />
        </div>
      </div>
      <div className="bg-primary w-[40%] h-full bg-[url('./assets/home/pizza-delivery-man-making-phone-gesture-removebg.png')]"></div>
    </div>
  );
}

export default App;
