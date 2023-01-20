import MyButton from "../component/MyButton";
import Tag from "../component/Tag";
import star from "../assets/home/star.png";
import fries from "../assets/home/fries.png";

function Home() {
  return (
    <div className="mx-8 md:mt-12">
      <Tag title="O MELHOR FASTFOOD DELIVERY DE BRASÍLIA" icon={fries} />
      <div className="my-5">
        <div className="md:mt-10">
          <h2 className="text-3xl font-bold mt-4">Peça rápido,</h2>
          <h2 className="flex text-3xl font-bold">
            aprecie<div className="text-yellow pl-2">lentamente.</div>
          </h2>
          <p className="text-gray text-sm mt-4 font-bold md:my-5">
            Pizzas com massa feita na hora, assada na pedra no forno a lenha!
          </p>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <MyButton text="Pedir Agora" condition />
          <MyButton text="Ver Menu" />
        </div>
        <div className="md:mt-12 flex items-center">
          <div className="flex">
            <img
              src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
              alt="..."
              className="shadow-lg rounded-full w-[50px] h-auto align-middle border-none"
            />
            <img
              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
              alt="..."
              className="z-10 relative right-6 shadow-lg rounded-full w-[50px] h-auto align-middle border-none"
            />
            <img
              src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
              alt="..."
              className="z-20 relative right-12 shadow-lg rounded-full w-[50px] h-auto align-middle border-none"
            />
          </div>
          <div className="relative right-10">
            <p className="text-sm font-bold mb-1">
              Nossos clientes satisfeitos
            </p>
            <div className="flex items-center">
              <img
                src={star}
                alt={star}
                className="shadow-lg rounded-full w-[20px] h-auto pr-1 align-middle border-none"
              />
              <p className="text-gray text-sm font-bold">
                4.8 (2.5k avaliações)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
